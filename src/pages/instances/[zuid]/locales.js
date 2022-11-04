import { Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useZestyStore } from 'store';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  AccountsHeader,
  AccountsTable,
  AccountsTableHead,
} from 'components/accounts';
import dayjs from 'dayjs';

const MySwal = withReactContent(Swal);

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function Locales() {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [, setAvailableLocales] = useState({});
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
      renderHeader: () => <AccountsTableHead>Active</AccountsTableHead>,
    },
    {
      field: 'code',
      headerName: 'Code',
      minWidth: 110,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Code</AccountsTableHead>,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      minWidth: 200,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Created At</AccountsTableHead>,
      renderCell: (params) => {
        const date = dayjs(params.row.createdAt).format('MMM DD, YYYY');
        return <Typography variant="body2">{date}</Typography>;
      },
    },
    {
      field: 'default',
      headerName: 'Default',
      minWidth: 110,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Default</AccountsTableHead>,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 300,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Name</AccountsTableHead>,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      minWidth: 200,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Updated At</AccountsTableHead>,
      renderCell: (params) => {
        const date = dayjs(params.row.updatedAt).format('MMM DD, YYYY');
        return <Typography variant="body2">{date}</Typography>;
      },
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
            enqueueSnackbar('Successfully Updated Locale', {
              variant: 'success',
            });
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
              const response = await ZestyAPI.deleteLocale(code, false);
              if (response.error) {
                enqueueSnackbar(response.error, { variant: 'error' });
              } else {
                enqueueSnackbar('Successfully Deleted Locale', {
                  variant: 'success',
                });
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

  const getLocales = async () => {
    setRows([]);
    setIsLoading(true);
    const locales = await ZestyAPI.getLocales('all');
    const newLocales =
      !locales?.error &&
      locales?.data?.map((c) => ({
        ...c,
        id: c.ID,
      }));
    setIsLoading(false);
    setRows(newLocales);
  };

  const getAllLocales = async () => {
    const locales = await ZestyAPI.getAllLocales();
    let data =
      !locales?.error &&
      Object.entries(locales?.data)?.map(([key]) => ({
        id: key,
        value: key,
        label: `${locales?.data[key]} - ${key}`,
      }));

    setAvailableLocales(data);
  };

  useEffect(() => {
    getLocales();
    getAllLocales();
  }, []);

  // const InputLocale = ({ availableLocales }) => {
  //   const formik = useFormik({
  //     initialValues: {
  //       locale: '',
  //     },
  //     validationSchema: accountsValidations.localeSchema,
  //     onSubmit: async (values) => {
  //       MySwal.close();
  //       const response = await ZestyAPI.addLocale(values.locale);
  //       if (response.error) {
  //         enqueueSnackbar(response.error, { variant: 'error' });
  //       } else {
  //         enqueueSnackbar('Successfully Added Locale', { variant: 'success' });
  //         getLocales();
  //       }
  //       formik.resetForm();
  //     },
  //   });

  //   return (
  //     <form noValidate onSubmit={formik.handleSubmit}>
  //       <FormSelect name="locale" options={availableLocales} formik={formik} />

  //       <Button color="primary" variant="contained" fullWidth type="submit">
  //         Submit
  //       </Button>
  //     </form>
  //   );
  // };

  const headerProps = {
    title: 'Locales',
    description: 'Manage your languages',
  };
  console.log('::');
  return (
    <Grid container>
      <AccountsHeader {...headerProps}></AccountsHeader>
      {/* <Stack>
        <Link
          alignSelf="start"
          color="primary"
          underline="none"
          href="https://zesty.org/getting-started/i18n-multi-language"
        >
          Locales Documentation
        </Link>
        <Link
          alignSelf="start"
          color="primary"
          underline="none"
          href="https://zesty.org/getting-started/i18n-multi-language#what-happens-when-a-new-language-is-added"
        >
          What happens when lang added?
        </Link>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddOutlinedIcon />}
          sx={{ alignSelf: 'end', display: 'none' }}
          onClick={() => {
            MySwal.fire({
              title: `Locale`,
              showConfirmButton: false,
              html: <InputLocale availableLocales={availableLocales} />,
            });
          }}
        >
          Add
        </Button>
      </Stack> */}

      <Grid item xs={12}>
        <Stack p={4}>
          <AccountsTable
            loading={isLoading}
            rows={rows}
            columns={columns}
            pageSize={100}
            autoHeight={false}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

Locales.data = {
  container: 'InstanceContainer',
};
