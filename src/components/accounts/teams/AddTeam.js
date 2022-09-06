import { LoadingButton } from '@mui/lab';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FormInput } from '../ui';
import { useFormik } from 'formik';
import { accountsValidations } from '../validations';
import { useState } from 'react';
import { useZestyStore } from 'store';
import { useSnackbar } from 'notistack';
import { notistackMessage } from 'utils';

const AddTeam = ({ getAllTeams }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { ZestyAPI } = useZestyStore((state) => state);
  const [isCreating, setIsCreating] = useState(false);
  const formik = useFormik({
    validationSchema: accountsValidations.updateTeam,
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: async (values) => {
      setIsCreating(true);
      const name = values.name,
        description = values.description;
      const response = await ZestyAPI.createTeam({ name, description });
      notistackMessage(
        enqueueSnackbar,
        {
          message: 'Team created!',
          callback: async () => {
            await getAllTeams();
            formik.resetForm();
            setIsCreating(false);
          },
        },
        response,
      );
    },
  });
  return (
    <Paper elevation={4} sx={{ height: '100%' }}>
      <Stack height="100%">
        <Typography color="text.secondary" variant="h6" px={3} py={1}>
          Teams
        </Typography>
        <Divider />
        <Stack p={3} color="text.secondary">
          <Stack mb={2}>
            <Typography pb={2}>
              Teams are a great way to manage multiple users who need to access
              an instance.
            </Typography>
            <Typography>
              Once you have created a team you can share your team ID with an
              instance owner to let them select a role and invite your team to
              their instance. This will allow you to manage who has access to an
              instance without needing the instance owner or admin.
            </Typography>
          </Stack>
          <Stack>
            <FormInput
              type="text"
              customLabel="Team Name"
              placeholder="Enter your team name"
              name="name"
              color="secondary"
              formik={formik}
            />
            <FormInput
              type="text"
              customLabel="Description of your team"
              name="description"
              color="secondary"
              formik={formik}
              multiline
            />
          </Stack>
        </Stack>
        <Stack mt="auto">
          <Divider />
          <Stack direction="row" alignItems="center" spacing={1} px={3} py={1}>
            <LoadingButton
              startIcon={<AddIcon />}
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              loading={isCreating}
              type="submit"
              onClick={formik.handleSubmit}
            >
              Create Team
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AddTeam;
