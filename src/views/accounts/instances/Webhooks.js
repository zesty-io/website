import { Box, Button, Divider, Grid } from '@mui/material';
import {
  accountsValidations,
  DeleteMsg,
  DirectionStack,
  FormInput,
  FormSelect,
  StickyTable,
} from 'components/accounts';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { accounts } from 'components/accounts/constants';

const MySwal = withReactContent(Swal);

const COLUMNS = [
  {
    id: 'URL',
    label: 'URL',
  },
  {
    id: 'method',
    label: 'Method',
  },
  {
    id: 'resource',
    label: 'Resource',
  },
  {
    id: 'eventAction',
    label: 'Event Type',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

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
}) => {
  const ROWS = data?.map((e) => {
    const btns = [
      <Button
        onClick={() => handleViewWebhook(e)}
        color="primary"
        variant="text"
        fullWidth
        type="submit"
      >
        View
      </Button>,
      <Button
        onClick={() => handleTestWebhook(e)}
        color="primary"
        variant="text"
        fullWidth
        type="submit"
      >
        Test
      </Button>,
      <Button
        onClick={() => handleDeleteWebhookModal(e)}
        color="error"
        variant="text"
        fullWidth
        type="submit"
      >
        Delete
      </Button>,
    ];

    return {
      URL: e.URL || '-',
      method: e.method,
      resource: e.resource,
      eventAction: eventActionSwitcher(e.eventAction) || '-',
      action: isInstanceOwner ? <DirectionStack items={btns} /> : '-',
    };
  });

  // const memoizeRows = React.useMemo(() => ROWS, [data]);
  // const memoizeColumns = React.useMemo(() => COLUMNS, []);

  console.log(ROWS, COLUMNS, ':::');
  return (
    <Box>
      <StickyTable rows={ROWS} columns={COLUMNS} />
    </Box>
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
          <Button
            color="primary"
            disabled={formik.isSubmitting}
            variant="contained"
            fullWidth
            type="submit"
          >
            Create Webhook
          </Button>
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
}) => {
  const handleAddWebhookModal = () => {
    MySwal.fire({
      title: 'Create Webhook',
      html: <WebhookForm onSubmit={createWebhook} />,
      showConfirmButton: false,
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
  return (
    <Box>
      {isInstanceOwner && (
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddWebhookModal}
        >
          Create Webhooks
        </Button>
      )}
      <CustomTable
        data={webhooks}
        isInstanceOwner={isInstanceOwner}
        handleDeleteWebhookModal={handleDeleteWebhookModal}
        handleTestWebhook={handleTestWebhook}
        handleViewWebhook={handleViewWebhook}
      />
    </Box>
  );
};
