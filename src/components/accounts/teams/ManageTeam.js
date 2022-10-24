import { LoadingButton } from '@mui/lab';
import {
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  Paper,
  Skeleton,
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
import { grey } from '@mui/material/colors';

const MySwal = withReactContent(Swal);

const ManageTeam = ({ teamZUID, name, description, getAllTeams, isOwner }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [initialValues, setInitialValues] = useState({
    name,
    description,
  });
  const [willUpdate, setWillUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const [listOfRemovingMembers, setListOfRemovingMembers] = useState(false);
  const [isDeletingTeam, setIsDeletingTeam] = useState(false);
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
    const name = initialValues.name;
    MySwal.fire({
      title: `Are you sure you want to delete ${name}?`,
      showDenyButton: true,
      confirmButtonText: 'Continue',
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsDeletingTeam(true);
        const response = await ZestyAPI.deleteTeam(teamZUID);
        await notistackMessage(
          enqueueSnackbar,
          {
            message: `Deleted Team: ${name}`,
            callback: async () => {
              await getAllTeams();
            },
          },
          response,
        );
        setIsDeletingTeam(false);
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
        setListOfRemovingMembers(true);
        const response = await ZestyAPI.respondToTeamInvite(
          teamInviteZUID,
          'cancel',
        );
        await notistackMessage(
          enqueueSnackbar,
          {
            message: `Users team invitation successfully canceled`,
            callback: async () => {
              await getFilteredMembers();
            },
          },
          response,
        );
        setListOfRemovingMembers(false);
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
        setListOfRemovingMembers(true);
        const response = await ZestyAPI.deleteTeamMember(teamZUID, userZUID);
        await notistackMessage(
          enqueueSnackbar,
          {
            message: `Team member is successfully removed`,
            callback: async () => {
              await getFilteredMembers();
            },
          },
          response,
        );
        setListOfRemovingMembers(false);
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

      await notistackMessage(
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

      await notistackMessage(
        enqueueSnackbar,
        {
          message: `Team invitation sent!`,
          callback: async () => {
            await getFilteredMembers();
            formikInvite.resetForm();
          },
        },
        response,
      );

      setIsInviting(false);
    },
  });

  useEffect(() => {
    const initializeValues = async () => {
      await getInstances();
      await getFilteredMembers();
    };

    initializeValues();
  }, [teamZUID]);

  useEffect(() => {
    if (!formikInvite.isValid && formikInvite.isSubmitting) {
      enqueueSnackbar(formikInvite.errors.email, { variant: 'error' });
    }
  }, [formikInvite.isValid, formikInvite.isSubmitting]);

  return (
    <Paper
      sx={{
        height: '100%',
        color: 'text.secondary',
        border: `1px solid ${grey[400]}`,
      }}
    >
      {isDeletingTeam ? (
        <Stack height="100%">
          <Skeleton variant="rectangular" height="100%" />
        </Stack>
      ) : (
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
                      color="primary"
                      fullWidth
                      formik={formik}
                    />
                    <FormInput
                      type="text"
                      customLabel="Description of your team"
                      name="description"
                      color="primary"
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
                  display: isOwner ? 'block' : 'none',
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
                  .map((member, index) => (
                    <ListItem disablePadding key={index}>
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
                  {isInviting || listOfRemovingMembers
                    ? [...new Array(filteredMembers?.length)]?.map((index) => (
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height={20}
                          key={index}
                          animation="wave"
                          sx={{ my: 2 }}
                        />
                      ))
                    : filteredMembers?.map((member, index) => (
                        <ListItem disablePadding key={index}>
                          <Stack
                            width="100%"
                            direction="row"
                            alignItems="center"
                          >
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
                                visibility: isOwner ? 'visible' : 'hidden',
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
                  {instances?.map((instance, index) => (
                    <ListItem disablePadding key={index}>
                      <Link
                        underline="none"
                        href={`/instances/${instance.ZUID}`}
                      >
                        {instance.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              )}
            </Stack>
          </Stack>
          {isOwner && (
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
                    color="primary"
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
                    color="primary"
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
      )}
    </Paper>
  );
};

export default ManageTeam;
