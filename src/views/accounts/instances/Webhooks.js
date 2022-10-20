import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import {
  AccountsHeader,
  AccountsPopover,
  AccountsTable,
  AccountsTableHead,
  accountsValidations,
  DeleteMsg,
  FormInput,
  FormSelect,
  StickyTable,
  SubmitBtn,
} from 'components/accounts';

import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { accounts } from 'components/accounts/constants';

const MySwal = withReactContent(Swal);

const COLUMNS_VIEW = [
  {
    id: 'key',
    label: 'Key',
  },
  {
    id: 'value',
    label: 'Value',
  },
];

const eventActionSwitcher = (event) => {
  const res = accounts.eventActionOptions.find((e) => e.value === event)?.label;
  return res;
};

const CustomTable = ({
  data,
  isInstanceOwner,
  handleDeleteWebhookModal,
  handleTestWebhook,
  handleViewWebhook,
  loading,
}) => {
  const ROWS = data?.map((e) => {
    return {
      ...e,
      id: e.ZUID,
    };
  });

  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'url',
      headerName: 'URL',
      minWidth: 500,
      flex: 1,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.URL,
      renderHeader: () => <AccountsTableHead>URL</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={params.row.URL}
            variant="body2"
          >
            {params.row.URL}
          </Typography>
        );
      },
    },
    {
      field: 'method',
      headerName: 'Method',
      width: 150,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.method,
      renderHeader: () => <AccountsTableHead>Method</AccountsTableHead>,
      renderCell: (params) => {
        return <Typography variant="body2">{params.row.method}</Typography>;
      },
    },
    {
      field: 'resource',
      headerName: 'Resource',
      width: 150,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.resource,
      renderHeader: () => <AccountsTableHead>Resource</AccountsTableHead>,
      renderCell: (params) => {
        return <Typography variant="body2">{params.row.resource}</Typography>;
      },
    },
    {
      field: 'eventType',
      headerName: 'Event Type',
      width: 150,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.eventAction,
      renderHeader: () => <AccountsTableHead>Event Type</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography variant="body2">
            {eventActionSwitcher(params.row.eventAction)}
          </Typography>
        );
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
        const action = [
          {
            title: 'Delete Webhook',
            action: () => handleDeleteWebhookModal(data),
          },
          { title: 'Test Webhook', action: () => handleTestWebhook(data) },
          { title: 'View Webhook', action: () => handleViewWebhook(data) },
        ];
        return (
          <AccountsPopover
            title={
              <Button variant="text" color="primary">
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
        autoHeight={false}
      />
    </Stack>
  );
};

const WebhookForm = ({ onSubmit }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.createWebhook,

    initialValues: {
      parentResourceZUID: '',
      resource: '',
      method: '',
      eventAction: '',
      URL: '',
      contentType: 'application/json',
      authorization: '',
      text: '',
    },
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Divider>Resource to Listen to</Divider>
        <Grid container spacing={2} paddingY={2}>
          <Grid item xs={6}>
            <FormSelect
              label="Resource"
              name={'resource'}
              formik={formik}
              options={accounts.resourceOptions}
            />
          </Grid>

          <Grid item xs={6}>
            <FormSelect
              label="Event Action"
              name={'eventAction'}
              formik={formik}
              options={accounts.eventActionOptions}
            />
          </Grid>
        </Grid>

        <Divider>HTTP Options</Divider>
        <Grid container spacing={2} paddingY={2}>
          <Grid xs={12} item>
            <FormInput name={'URL'} formik={formik} />
          </Grid>
          <Grid xs={6} item>
            <FormSelect
              label="Method"
              name={'method'}
              formik={formik}
              options={accounts.methodOptions}
            />
          </Grid>
          <Grid xs={6} item>
            <FormInput name={'authorization'} formik={formik} />
          </Grid>
        </Grid>

        <Box paddingY={4}>
          {formik.values.method === 'POST' && (
            <Grid container>
              <Grid xs={12} item>
                <FormSelect
                  label="Content Type"
                  name={'contentType'}
                  formik={formik}
                  options={accounts.contentTypeOptions}
                />
              </Grid>
              <Grid xs={12} item>
                <FormInput
                  label="Body"
                  name={'text'}
                  formik={formik}
                  multiline={true}
                />
              </Grid>
            </Grid>
          )}
        </Box>
        {/* <FormInput name={'Parent Resource ZUID'} formik={formik} /> */}
        <Box paddingTop={4}>
          <SubmitBtn loading={formik.isSubmitting}>Create Webhook</SubmitBtn>
        </Box>
      </form>
    </Box>
  );
};

export const Webhooks = ({
  createWebhook,
  isInstanceOwner,
  webhooks,
  deleteWebhook,
  testWebhook,
  loading,
}) => {
  const handleAddWebhookModal = () => {
    MySwal.fire({
      title: 'Create Webhook',
      html: <WebhookForm onSubmit={createWebhook} />,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      showCloseButton: true,
    });
  };
  const handleDeleteWebhookModal = (data) => {
    const action = () => {
      deleteWebhook(data.ZUID);
    };
    DeleteMsg({ title: 'Delete this Webhook?', action });
  };
  const handleTestWebhook = (data) => {
    testWebhook(data);
  };
  const handleViewWebhook = (data) => {
    const ROWS_VIEW = Object.entries(data).map((e) => {
      return { key: e[0], value: e[1] };
    });
    MySwal.fire({
      title: 'View Webhook',
      html: (
        <StickyTable
          perPage={100}
          pagination={false}
          rows={ROWS_VIEW}
          columns={COLUMNS_VIEW}
        />
      ),
      showConfirmButton: false,
    });
  };

  const headerProps = {
    title: 'Webhooks',
    description: `Manage your Webhook's`,
  };

  return (
    <Grid container>
      <AccountsHeader {...headerProps}>
        {isInstanceOwner && (
          <Button
            onClick={handleAddWebhookModal}
            color="primary"
            variant="contained"
            type="button"
            startIcon={<AddIcon />}
          >
            Create Webhooks
          </Button>
        )}
      </AccountsHeader>

      <Grid item xs={12}>
        <CustomTable
          loading={loading}
          data={webhooks}
          isInstanceOwner={isInstanceOwner}
          handleDeleteWebhookModal={handleDeleteWebhookModal}
          handleTestWebhook={handleTestWebhook}
          handleViewWebhook={handleViewWebhook}
        />
      </Grid>
    </Grid>
  );
};
