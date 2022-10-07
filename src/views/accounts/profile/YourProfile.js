import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useZestyStore } from 'store';
import Swal from 'sweetalert2';
import { hashMD5 } from 'utils/Md5Hash';
import withReactContent from 'sweetalert2-react-content';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import {
  AccountsHeader,
  AccountsPopover,
  AccountsTable,
  AccountsTableHead,
  EmailForm,
  ErrorMsg,
  FormInput,
  SubmitBtn,
  SuccessMsg,
} from 'components/accounts/ui';
import { useFormik } from 'formik';
import { accountsValidations } from 'components/accounts';

const MySwal = withReactContent(Swal);

const CustomTable = ({ emails, userInfo, deleteEmail, loading }) => {
  const ROWS = emails?.map((e) => {
    return { ...e, id: e.verificationCode || Math.random() };
  });

  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'address',
      headerName: 'Email',
      width: 400,
      editable: false,
      sortable: false,
      renderHeader: () => <AccountsTableHead>Email</AccountsTableHead>,
      renderCell: (params) => {
        return <Typography variant="body2">{params.row.address}</Typography>;
      },
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 400,
      editable: false,
      sortable: false,
      renderHeader: () => <AccountsTableHead>Description</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography variant="body2">{params.row.name || '-'}</Typography>
        );
      },
    },
    {
      field: 'primary',
      headerName: 'Primary',
      width: 200,
      editable: false,
      sortable: false,
      renderHeader: () => <AccountsTableHead>Primary</AccountsTableHead>,
      renderCell: (params) => {
        const isPrimary =
          params?.row?.address === userInfo?.email ? (
            <CheckCircleIcon color="success" />
          ) : (
            ''
          );
        return <Typography variant="body2">{isPrimary}</Typography>;
      },
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 200,
      editable: false,
      sortable: false,
      renderHeader: () => <AccountsTableHead>Verified</AccountsTableHead>,
      renderCell: (params) => {
        const isVerified = params.row.responseReceived ? (
          <CheckCircleIcon color="success" />
        ) : (
          ''
        );
        return <Typography variant="body2">{isVerified}</Typography>;
      },
    },
    {
      field: 'action',
      headerName: '',
      width: 100,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        const data = params.row;
        const isPrimary =
          params?.row?.address === userInfo?.email ? true : false;
        const action = [
          { title: 'Delete Email', action: () => deleteEmail(data.address) },
        ];
        return (
          <AccountsPopover
            title={
              <Button
                sx={{ display: isPrimary ? 'none' : 'block' }}
                variant="text"
                color="primary"
              >
                <MoreVertIcon color="disabled" />
              </Button>
            }
            id={'actions'}
            items={action}
            colorInvert={false}
          />
        );
      },
    },
  ];

  return (
    <Stack p={4}>
      <AccountsTable
        loading={loading}
        rows={ROWS}
        columns={COLUMNS}
        pageSize={100}
        autoHeight={true}
      />
    </Stack>
  );
};

const ProfileHeader = ({ userInfo }) => {
  const profileUrl =
    'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  return (
    <Stack width={1}>
      <Stack direction={'row'} width={1} justifyContent="center">
        <img src={profileUrl} alt="" width={100} height={100} />
        <Button href="https://en.gravatar.com/">Edit</Button>
      </Stack>
    </Stack>
  );
};

export const YourProfile = ({ getUser, loading, setloading }) => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [emails, setemails] = React.useState([]);

  const updateUsernameSuccess = async (data) => {
    await getUser();
    console.log(data, 'success');
    SuccessMsg({ title: 'Update Success' });
  };

  const updateUsernameError = async (err) => {
    await getUser();
    console.log(err, 'err');
    ErrorMsg({ text: err?.error });
  };

  const handleDeleteEmailSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Email Deleted ' });
  };
  const handleDeleteEmailErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };

  const handleGetEmailsSuccess = (data) => {
    console.log(data, 'succ');
    setemails(data.data);
  };
  const handleGetEmailsErr = (err) => {
    console.log(err, 'err');
    ErrorMsg({ text: err.error });
  };
  const getUserEmails = async () => {
    setloading(true);
    const res = await ZestyAPI.getUserEmails();
    !res.error && handleGetEmailsSuccess(res);
    res.error && handleGetEmailsErr(res);
    setloading(false);
  };
  const deleteEmail = async (email) => {
    const res = await ZestyAPI.deleteUserEmail(email);
    !res.error && handleDeleteEmailSuccess(res);
    res.error && handleDeleteEmailErr(res);
    await getUserEmails();
  };
  const updateUsername = async (values) => {
    const userZUID = userInfo.ZUID;
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      prefs: userInfo.prefs,
    };
    const res = await ZestyAPI.updateUser(userZUID, body);
    !res.error && updateUsernameSuccess(res);
    res.error && updateUsernameError(res);
  };

  const formik = useFormik({
    validationSchema: accountsValidations.userName,
    initialValues: {
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
    },
    onSubmit: async (values) => {
      await updateUsername(values);
      formik.resetForm();
    },
  });

  React.useEffect(() => {
    getUserEmails();
  }, []);
  const headerProps = {
    title: 'Profile',
    description: `Manage your Profile`,
  };
  return (
    <Grid container>
      <AccountsHeader {...headerProps}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            MySwal.fire({
              title: 'Edit Profile',
              html: <EditProfile formik={formik} userInfo={userInfo} />,
              showConfirmButton: false,
            });
          }}
          startIcon={<EditIcon />}
        >
          Edit Profile
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            MySwal.fire({
              title: 'Add Email Address',
              html: <EmailForm getUserEmails={getUserEmails} />,
              showConfirmButton: false,
            });
          }}
          startIcon={<AddIcon />}
        >
          Add Email
        </Button>
      </AccountsHeader>
      <Grid item xs={12}>
        <CustomTable
          loading={loading}
          deleteEmail={deleteEmail}
          userInfo={userInfo}
          emails={emails}
        />
      </Grid>
    </Grid>
  );
};

const EditProfile = ({ formik, userInfo }) => {
  return (
    <Stack gap={4}>
      <ProfileHeader userInfo={userInfo} />
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput
          name={'firstName'}
          label={userInfo?.firstName}
          formik={formik}
        />
        <FormInput
          name={'lastName'}
          label={userInfo?.lastName}
          formik={formik}
        />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Stack>
  );
};
