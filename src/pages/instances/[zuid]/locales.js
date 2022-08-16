import { Button, Stack, TextField } from '@mui/material';
import CustomDataGrid from 'components/accounts/instances/CustomDataGrid';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import React, { useEffect, useMemo, useState } from 'react';
import { useZestyStore } from 'store';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CustomDialog from 'components/accounts/instances/CustomDialog';
import useDialog from 'components/hooks/useDialog';
import { useSnackbar } from 'notistack';

const Locales = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [open, handleOpen, handleClose] = useDialog();
  const [openDel, handleOpenDel, handleCloseDel] = useDialog();
  const [locale, setLocale] = useState('');
  const [code, setCode] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const columns = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'active',
      headerName: 'Active',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'code',
      headerName: 'Code',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'default',
      headerName: 'Default',
      minWidth: 110,
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 300,
      flex: 1,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'activate/deactivate',
      headerName: '',
      sortable: false,
      flex: 1,
      minWidth: 80,
      renderCell: (params) => {
        const code = params?.row?.code,
          action = params?.row?.active ? 'deactivate' : 'activate';
        const onClick = async (e) => {
          e.stopPropagation();

          const response = await ZestyAPI.updateLocale(code, action);
          if (response.error) {
            enqueueSnackbar(response.error, { variant: 'error' });
          } else {
            getLocales();
          }
        };

        return (
          <Button title={action} onClick={onClick}>
            {params?.row?.active ? (
              <ToggleOnOutlinedIcon color="success" />
            ) : (
              <ToggleOffOutlinedIcon color="error" />
            )}
          </Button>
        );
      },
    },
    {
      field: 'delete',
      headerName: '',
      sortable: false,
      flex: 1,
      minWidth: 80,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();
          handleOpenDel();
          setCode(params?.row?.code);
        };

        return (
          <Button title="delete" onClick={onClick}>
            <DeleteOutlineOutlinedIcon color="error" />
          </Button>
        );
      },
    },
  ]);

  useEffect(() => {
    getLocales();
  }, []);

  const getLocales = async () => {
    setRows([]);
    setIsLoading(true);
    const locales = await ZestyAPI.getLocales('all');
    const newLocales = locales?.data?.map((c) => ({
      ...c,
      id: c.ID,
    }));
    setIsLoading(false);
    setRows(newLocales);
  };
  return (
    <InstanceContainer>
      <Stack>
        <Button sx={{ px: 0, ml: 'auto' }} title="add">
          <Button
            variant="contained"
            color="success"
            startIcon={<AddOutlinedIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
        </Button>
      </Stack>

      <CustomDataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        isLoading={isLoading}
      />

      <CustomDialog
        title="Locale"
        open={open}
        handleClose={handleClose}
        showCloseIcon
        actions={
          <>
            <Button
              variant="contained"
              color="success"
              onClick={async () => {
                const response = await ZestyAPI.addLocale(locale);
                if (response.error) {
                  enqueueSnackbar(response.error, { variant: 'error' });
                } else {
                  getLocales();
                }
                setLocale('');
                handleClose();
              }}
            >
              Continue
            </Button>
            <Button variant="outlined" color="warning" onClick={handleClose}>
              Cancel
            </Button>
          </>
        }
      >
        <TextField
          sx={{ mt: 1 }}
          label="Please enter a locale"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </CustomDialog>

      <CustomDialog
        title={`Are you sure you want to delete ${code}?`}
        open={openDel}
        handleClose={handleCloseDel}
        showCloseIcon
        actions={
          <>
            <Button
              variant="contained"
              color="success"
              onClick={async () => {
                const response = await ZestyAPI.deleteLocale(code);
                if (response.error) {
                  enqueueSnackbar(response.error, { variant: 'error' });
                } else {
                  getLocales();
                }

                setCode('');
                handleCloseDel();
              }}
            >
              Continue
            </Button>
            <Button variant="outlined" color="warning" onClick={handleCloseDel}>
              Cancel
            </Button>
          </>
        }
      />
    </InstanceContainer>
  );
};

export default Locales;
