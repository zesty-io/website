import { Button, Stack } from '@mui/material';
import CustomDataGrid from 'components/accounts/instances/CustomDataGrid';
import React, { useEffect, useMemo, useState } from 'react';
import { useZestyStore } from 'store';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import { FormInput } from 'components/accounts';
import { accountsValidations } from 'components/accounts/';

const MySwal = withReactContent(Swal);

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Locales() {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);
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
          const code = params?.row?.code;
          MySwal.fire({
            title: `Are you sure you want to delete ${code}?`,
            showDenyButton: true,
            confirmButtonText: 'Continue',
            denyButtonText: `Cancel`,
          }).then(async (result) => {
            if (result.isConfirmed) {
              const response = await ZestyAPI.deleteLocale(code);
              if (response.error) {
                enqueueSnackbar(response.error, { variant: 'error' });
              } else {
                getLocales();
              }
            }
          });
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

  const InputLocale = () => {
    const formik = useFormik({
      initialValues: {
        locale: '',
      },
      validationSchema: accountsValidations.localeSchema,
      onSubmit: async (values) => {
        MySwal.close();
        const response = await ZestyAPI.addLocale(values.locale);
        if (response.error) {
          enqueueSnackbar(response.error, { variant: 'error' });
        } else {
          getLocales();
        }
        formik.resetForm();
      },
    });

    return (
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput
          name="locale"
          formik={formik}
          placeholder="Enter a valid locale"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    );
  };

  return (
    <>
      <Stack>
        <Button sx={{ px: 0, ml: 'auto' }} title="add">
          <Button
            variant="contained"
            color="success"
            startIcon={<AddOutlinedIcon />}
            onClick={() => {
              MySwal.fire({
                title: `Locale`,
                showConfirmButton: false,
                html: <InputLocale />,
              });
            }}
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
    </>
  );
}

Locales.data = {
  container: 'InstanceContainer',
};
