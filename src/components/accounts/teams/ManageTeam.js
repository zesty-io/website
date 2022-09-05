import { LoadingButton } from '@mui/lab';
import {
  Divider,
  IconButton,
  Link,
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

const ManageTeam = ({ teamZUID, name, description, getAllTeams, isAdmin }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [initialValues, setInitialValues] = useState({
    name,
    description,
  });
  const [willUpdate, setWillUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const { ZestyAPI } = useZestyStore((state) => state);
  const [teamMembers, setTeamMembers] = useState([]);
  const [instances, setInstances] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const getFilteredMembers = async () => {
    let regularMembers = await ZestyAPI.getTeamMembers(teamZUID);
    let pendingMembers = await ZestyAPI.getTeamMembersPending(teamZUID);
    let filteredPendingMembers = [];

    setTeamMembers(regularMembers?.data);

    regularMembers = regularMembers?.data?.filter((member) => !member.admin);
    pendingMembers = pendingMembers?.data;

    filteredPendingMembers = [...pendingMembers].filter(
      (x) =>
        x.inviteeUserZUID !==
        regularMembers.find((c) => c.ZUID === x.inviteeUserZUID)?.ZUID,
    );

    setFilteredMembers(
      [...filteredPendingMembers, ...regularMembers]?.filter(
        (member) => !member.cancelled && !member.declined && !member.accepted,
      ),
    );
  };

  const getInstances = async () => {
    const response = await ZestyAPI.getAllTeamsInstances(teamZUID);
    setInstances(response?.data);
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
        const response = await ZestyAPI.deleteTeam(teamZUID);
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
            callback: getFilteredMembers,
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
            callback: getFilteredMembers,
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
      const response = await ZestyAPI.updateTeam(
        { name, description },
        teamZUID,
      );

      notistackMessage(
        enqueueSnackbar,
        {
          message: `Updated Team: ${name}`,
          callback: () => {
            setInitialValues({ name, description });
          },
        },
        response,
      );

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
        teamZUID,
      });

      notistackMessage(
        enqueueSnackbar,
        {
          message: `Team invitation sent!`,
          callback: getFilteredMembers,
        },
        response,
      );

      formikInvite.resetForm();
      setIsInviting(false);
    },
  });

  useEffect(() => {
    const initializeValues = async () => {
      getInstances();
      getFilteredMembers();
    };

    initializeValues();
  }, [teamZUID]);

  useEffect(() => {
    if (!formikInvite.isValid && formikInvite.isSubmitting) {
      enqueueSnackbar(formikInvite.errors.email, { variant: 'error' });
    }
  }, [formikInvite.isValid, formikInvite.isSubmitting]);

  return (
    <Paper elevation={4} sx={{ height: '100%', color: 'text.secondary' }}>
      <Stack height="100%">
        <Typography variant="h6" px={3} py={1}>
          <Stack direction="row" alignItems="center">
            <NoteIcon sx={{ mr: 1 }} />
            {teamZUID}
          </Stack>
        </Typography>
        <Divider />
        <Stack
          p={3}
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
              sx={{
                position: 'absolute',
                top: '-1rem',
                right: '-.7rem',
                display: isAdmin ? 'block' : 'none',
              }}
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
              {teamMembers
                ?.filter((member) => member.admin)
                .map((member) => (
                  <ListItem disablePadding key={member.ID}>
                    <Stack width="100%" direction="row" alignItems="center">
                      <LockIcon fontSize=".7rem" />
                      <Typography ml={1}>{member.email}</Typography>
                    </Stack>
                  </ListItem>
                ))}
            </List>
          </Stack>
          <Stack mb={2}>
            <Typography variant="h6">Members</Typography>
            {filteredMembers?.length === 0 ? (
              <Typography variant="caption">
                No members for this team
              </Typography>
            ) : (
              <List disablePadding>
                {filteredMembers?.map((member) => (
                  <ListItem disablePadding key={member.ZUID}>
                    <Stack width="100%" direction="row" alignItems="center">
                      {member.ID !== undefined ? (
                        <PersonIcon fontSize=".7rem" />
                      ) : (
                        <AccessTimeFilledIcon fontSize=".7rem" />
                      )}
                      <Typography ml={1}>
                        {member.inviteeEmail || member.email}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          if (member.ID === undefined)
                            cancelTeamInvite(member.ZUID);
                          else deleteTeamMember(teamZUID, member.ZUID);
                        }}
                        sx={{
                          ml: 'auto',
                          visibility: isAdmin ? 'visible' : 'hidden',
                        }}
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
              <List disablePadding>
                {instances?.map((instance) => (
                  <ListItem disablePadding key={instance.ZUID}>
                    <Link underline="none" href={`/instances/${instance.ZUID}`}>
                      {instance.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            )}
          </Stack>
        </Stack>
        {isAdmin && (
          <Stack mt="auto">
            <Divider />
            <form noValidate onSubmit={formikInvite.handleSubmit}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                px={3}
                py={1}
              >
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
                  autoComplete="off"
                />

                <LoadingButton
                  startIcon={<PersonAddIcon />}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  sx={{ px: 4 }}
                  type="submit"
                  loading={isInviting}
                >
                  Invite
                </LoadingButton>
              </Stack>
            </form>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export default ManageTeam;
