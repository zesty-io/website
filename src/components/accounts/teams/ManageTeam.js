import { LoadingButton } from '@mui/lab';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import NoteIcon from '@mui/icons-material/Note';
import LockIcon from '@mui/icons-material/Lock';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import { FormInput } from '../ui';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useZestyStore } from 'store';
import { accountsValidations } from '../validations';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { notistackMessage } from 'utils';

const MySwal = withReactContent(Swal);

const ManageTeam = ({ id, name, description, getAllTeams }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [initialValues, setInitialValues] = useState({
    name,
    description,
  });
  const [willUpdate, setWillUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const { ZestyAPI } = useZestyStore((state) => state);
  const [owners, setOwners] = useState([]);
  const [instances, setInstances] = useState([]);
  const [members, setMembers] = useState([]);

  const getOwners = async () => {
    const ownerResponse = await ZestyAPI.getTeamMembers(id);
    setOwners(ownerResponse?.data);
  };

  const getInstances = async () => {
    const instancesResponse = await ZestyAPI.getAllTeamsInstances(id);
    setInstances(instancesResponse?.data);
  };

  const getMembers = async () => {
    const membersResponse = await ZestyAPI.getTeamMembersPending(id);
    setMembers(membersResponse?.data);
  };

  const deleteTeam = async () => {
    const name = formik.values.name;
    MySwal.fire({
      title: `Are you sure you want to delete ${name}?`,
      showDenyButton: true,
      confirmButtonText: 'Continue',
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await ZestyAPI.deleteTeam(id);
        notistackMessage(
          enqueueSnackbar,
          {
            message: `Deleted Team: ${name}`,
            callback: getAllTeams,
          },
          response,
        );
      }
    });
  };

  const cancelTeamInvite = async (teamInviteZUID) => {
    MySwal.fire({
      title: `Are you sure you want to cancel this invite?`,
      showDenyButton: true,
      confirmButtonText: 'Continue',
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await ZestyAPI.respondToTeamInvite(
          teamInviteZUID,
          'cancel',
        );
        notistackMessage(
          enqueueSnackbar,
          {
            message: `Users team invitation successfully canceled`,
            callback: getMembers,
          },
          response,
        );
      }
    });
  };

  const deleteTeamMember = async (teamZUID, userZUID) => {
    MySwal.fire({
      title: `Are you sure you want to remove this user?`,
      showDenyButton: true,
      confirmButtonText: 'Continue',
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await ZestyAPI.deleteTeamMember(teamZUID, userZUID);
        notistackMessage(
          enqueueSnackbar,
          {
            message: `Team member is successfully removed`,
            callback: getMembers,
          },
          response,
        );
      }
    });
  };

  const formik = useFormik({
    validationSchema: accountsValidations.updateTeam,
    initialValues,
    onSubmit: async (values) => {
      setIsUpdating(true);
      const name = formik.values.name,
        description = formik.values.description;
      const response = await ZestyAPI.updateTeam({ name, description }, id);

      notistackMessage(
        enqueueSnackbar,
        {
          message: `Updated Team: ${name}`,
        },
        response,
      );

      setInitialValues({ name, description });

      setWillUpdate(false);
      setIsUpdating(false);
    },
  });

  const formikInvite = useFormik({
    validationSchema: accountsValidations.forgotPassword,
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      setIsInviting(true);
      const response = await ZestyAPI.createTeamInvite({
        admin: false,
        inviteeEmail: formikInvite.values.email,
        teamZUID: id,
      });

      notistackMessage(
        enqueueSnackbar,
        {
          message: `Team invitation sent!`,
          callback: getMembers,
        },
        response,
      );

      formikInvite.resetForm();
      setIsInviting(false);
    },
  });

  useEffect(() => {
    const initializeValues = async () => {
      getOwners();
      getInstances();
      getMembers();
    };

    initializeValues();
  }, [id]);

  useEffect(() => {
    if (!formikInvite.isValid && formikInvite.isSubmitting) {
      enqueueSnackbar(formikInvite.errors.email, { variant: 'error' });
    }
  }, [formikInvite.isValid, formikInvite.isSubmitting]);

  return (
    <Paper elevation={4} sx={{ height: '100%' }}>
      <Stack height="100%">
        <Typography color="text.secondary" variant="h6" px={3} py={1}>
          <Stack direction="row" alignItems="center">
            <NoteIcon sx={{ mr: 1 }} />
            {id}
          </Stack>
        </Typography>
        <Divider />
        <Stack
          p={3}
          color="text.secondary"
          sx={{ overflowY: 'auto', overflowX: 'hidden', height: 574 }}
        >
          <Stack position="relative" mb={2}>
            <Stack>
              {!willUpdate ? (
                <Stack>
                  <Typography variant="h6">{initialValues.name}</Typography>
                  <Typography>{initialValues.description}</Typography>
                </Stack>
              ) : (
                <Stack>
                  <FormInput
                    type="text"
                    customLabel="Team Name"
                    placeholder="Enter your team name"
                    name="name"
                    color="secondary"
                    fullWidth
                    formik={formik}
                  />
                  <FormInput
                    type="text"
                    customLabel="Description of your team"
                    name="description"
                    color="secondary"
                    formik={formik}
                    fullWidth
                    multiline
                  />
                </Stack>
              )}
            </Stack>
            <IconButton
              sx={{ position: 'absolute', top: '-1rem', right: '-.7rem' }}
              onClick={() => setWillUpdate((prev) => !prev)}
            >
              {willUpdate ? <DisabledByDefaultIcon /> : <SettingsIcon />}
            </IconButton>
          </Stack>

          {willUpdate && (
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <LoadingButton
                color="info"
                startIcon={<SaveIcon />}
                variant="contained"
                onClick={formik.handleSubmit}
                type="submit"
                loading={isUpdating}
              >
                Update Team
              </LoadingButton>
              <IconButton onClick={deleteTeam}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          )}

          <Stack mb={2}>
            <Typography variant="h6">Owners</Typography>
            <List>
              {owners
                ?.filter((owner) => owner.admin)
                .map((owner) => (
                  <ListItem disablePadding key={owner.ID}>
                    <Stack width="100%" direction="row" alignItems="center">
                      <LockIcon fontSize=".7rem" sx={{ mr: 1 }} />
                      <Typography ml={1}>{owner.email}</Typography>
                    </Stack>
                  </ListItem>
                ))}
            </List>
          </Stack>
          <Stack mb={2}>
            <Typography variant="h6">Members</Typography>
            {members?.length === 0 ? (
              <Typography variant="caption">
                No members for this team
              </Typography>
            ) : (
              <List disablePadding>
                {members
                  ?.filter((member) => !member.cancelled)
                  .map((member) => (
                    <ListItem disablePadding key={member.ZUID}>
                      <Stack width="100%" direction="row" alignItems="center">
                        {member.accepted ? (
                          <PersonIcon />
                        ) : (
                          <AccessTimeFilledIcon fontSize=".7rem" />
                        )}
                        <Typography ml={1}>{member.inviteeEmail}</Typography>
                        <IconButton
                          onClick={() => {
                            if (!member.accepted) cancelTeamInvite(member.ZUID);
                            else
                              deleteTeamMember(
                                member.teamZUID,
                                member.inviteeUserZUID,
                              );
                          }}
                          sx={{ ml: 'auto' }}
                        >
                          <PersonOffIcon fontSize=".7rem" />
                        </IconButton>
                      </Stack>
                    </ListItem>
                  ))}
              </List>
            )}
          </Stack>
          <Stack mb={2}>
            <Typography variant="h6">Instances</Typography>
            {instances?.length === 0 ? (
              <Typography variant="caption">
                No instances for this team
              </Typography>
            ) : (
              'show lists'
            )}
          </Stack>
        </Stack>
        <Stack mt="auto">
          <Divider />
          <Stack direction="row" alignItems="center" spacing={1} px={3} py={1}>
            <FormInput
              type="text"
              placeholder="Enter your team members email address"
              name="email"
              color="secondary"
              formik={formikInvite}
              fullWidth
              hasNoLabel
              boxGutterBottom={false}
              size="small"
              hasHelperText={false}
              hasError={false}
            />

            <LoadingButton
              startIcon={<PersonAddIcon />}
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ px: 4 }}
              type="submit"
              loading={isInviting}
              onClick={formikInvite.handleSubmit}
            >
              Invite
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ManageTeam;
