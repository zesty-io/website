import { Box, Button, Link, Stack, Typography } from '@mui/material';
import {
  accountsValidations,
  DeleteBtn,
  DeleteMsg,
  FormInput,
  FormSelect,
  StickyTable,
  SubmitBtn,
} from 'components/accounts';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const MySwal = withReactContent(Swal);

const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'token',
    label: 'Token',
  },
  {
    id: 'role',
    label: 'Role',
  },
  {
    id: 'expiry',
    label: 'Expires',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const CreateTokenForm = ({ onSubmit, options }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.createToken,
    initialValues: {
      name: '',
      roleZUID: '',
    },
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
    },
  });

  const newOptions = options.map((e) => {
    return { ...e, value: e.ZUID };
  });
  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'name'} formik={formik} />
        <FormSelect
          label="Role"
          name={'roleZUID'}
          formik={formik}
          options={newOptions}
        />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

const CustomTable = ({
  data = [],
  roles = [],
  handleDeleteToken,
  handleUpdateToken,
  isInstanceOwner,
  loading,
}) => {
  const ROWS = data?.map((e) => {
    const role = roles.find((x) => x.ZUID === e.roleZUID)?.name;
    return {
      name: e.name || '-',
      token: e.token || '-',
      role: role || '-',
      expiry: dayjs(e.expiry).format('MMMM D, YYYY') || '-',
      action: isInstanceOwner ? (
        <Box display={'flex'} gap={4}>
          <Button
            onClick={() => handleUpdateToken(e)}
            color="info"
            variant="contained"
            type="button"
          >
            <AutorenewIcon color="inherit" sx={{ marginRight: 1 }} />
            Renew
          </Button>
          <DeleteBtn onClick={() => handleDeleteToken(e)}> </DeleteBtn>
        </Box>
      ) : (
        '-'
      ),
    };
  });

  // const memoizeRows = React.useMemo(() => ROWS, [data]);
  // const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <StickyTable loading={loading} rows={ROWS} columns={COLUMNS} />
    </Box>
  );
};
export const Apis = ({
  tokens,
  instanceRoles,
  isInstanceOwner,
  createToken,
  deleteToken,
  updateToken,
  loading,
}) => {
  const handleCreateTokenModal = () => {
    MySwal.fire({
      title: 'Create Token',
      html: <CreateTokenForm onSubmit={createToken} options={instanceRoles} />,
      showConfirmButton: false,
    });
  };
  const handleDeleteToken = (data) => {
    const val = { tokenZUID: data.ZUID };
    const action = () => {
      deleteToken(val);
    };
    DeleteMsg({ title: 'Delete this token?', action });
  };
  const handleUpdateToken = (data) => {
    const val = { tokenZUID: data.ZUID };
    updateToken(val);
  };
  return (
    <Stack>
      <Stack spacing={1}>
        <Typography>
          The{' '}
          <Link href="https://zesty.org/apis/auth-api#token-based-authentication">
            {' '}
            Access token
          </Link>{' '}
          feature is beta and is recommended for use with the{' '}
          <Link href="https://zesty.org/tools/atom-package">
            Atom IDE plugin
          </Link>{' '}
          , experimenting with CI/CD flows, and/or{'  '}
          <Link href="https://github.com/zesty-io/node-sdk">Node SDK</Link>{' '}
          script usage. This feature will be augmented in the future. After that
          automated production flows using tokens will be generally available.
        </Typography>
        <Typography>
          The{' '}
          <Link href="https://zesty.org/services/web-engine/modes">
            Web Engine
          </Link>{' '}
          has 3 modes (Traditional(default), Hybrid, Headless). The{' '}
          <Link href="https://zesty.org/apis/json-endpoints">
            Instant API endpoints
          </Link>{' '}
          are reliant on the{' '}
          <Typography
            display="inline-block"
            fontWeight="bolder"
            color="text.secondary"
          >
            Access to Basic JSON API for content
          </Typography>{' '}
          to be on. Docs for{' '}
          <Link href="https://instances-api.zesty.org/#9db975df-8f8b-4a6a-b820-2d684a5e0da3">
            updating setting endpoint
          </Link>
        </Typography>
        <Typography>
          All of the other endpoints are reliant on the webengine mode setting
          set to Headless or Hybrid. Once the setting is turned on you can go to
          the /-/headless/ endpoint of the instance. Which is structured using
          the {`instance's`} domain followed by the endpoint. Sample:
          <Link href="https://photoblog.zesty.dev/-/headless/">
            https://photoblog.zesty.dev/-/headless/
          </Link>
        </Typography>
      </Stack>
      <Stack direction="row" width="100%" my={1}>
        {isInstanceOwner && (
          <Button
            onClick={handleCreateTokenModal}
            color="secondary"
            variant="contained"
            type="button"
            sx={{ ml: 'auto' }}
          >
            Create Token
          </Button>
        )}
      </Stack>

      <CustomTable
        loading={loading}
        isInstanceOwner={isInstanceOwner}
        data={tokens}
        roles={instanceRoles}
        handleDeleteToken={handleDeleteToken}
        handleUpdateToken={handleUpdateToken}
      />
    </Stack>
  );
};
