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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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

const ManageTeam = ({ id, teamName, teamDescription }) => {
  const formik = useFormik({
    initialValues: {
      teamName,
      description: teamDescription,
    },
  });
  const [willUpdate, setWillUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { ZestyAPI } = useZestyStore((state) => state);
  const [owner, setOwner] = useState('');
  const [instances, setInstances] = useState([]);
  const [members, setMembers] = useState([]);

  const updateTeam = async () => {
    setIsUpdating(true);
    const name = formik.values.teamName,
      description = formik.values.description;
    await ZestyAPI.updateTeam({ name, description }, id);
    formik.setFieldValue('teamName', name);
    formik.setFieldValue('description', description);

    setWillUpdate(false);
    setIsUpdating(false);
  };

  useEffect(() => {
    const initializeValues = async () => {
      const ownerResponse = await ZestyAPI.getTeamMembers(id);
      setOwner(ownerResponse?.data[0]?.email);

      const instancesResponse = await ZestyAPI.getAllTeamsInstances(id);
      setInstances(instancesResponse?.data);

      const membersResponse = await ZestyAPI.getTeamMembersPending(id);
      setMembers(membersResponse?.data);
    };

    initializeValues();
  }, [id]);

  return (
    <Paper elevation={4} sx={{ height: '100%' }}>
      <Stack>
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
          sx={{ overflowY: 'auto', height: 574 }}
        >
          <Stack position="relative" mb={2}>
            <Stack>
              {!willUpdate ? (
                <Stack>
                  <Typography variant="h6">{formik.values.teamName}</Typography>
                  <Typography>{formik.values.description}</Typography>
                </Stack>
              ) : (
                <Stack>
                  <FormInput
                    type="text"
                    customLabel="Team Name"
                    placeholder="Enter your team name"
                    name="teamName"
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
                onClick={() => updateTeam()}
                loading={isUpdating}
              >
                Update Team
              </LoadingButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Stack>
          )}

          <Stack mb={2}>
            <Typography variant="h6">Owners</Typography>
            <Typography>
              <Stack direction="row" alignItems="center">
                <LockIcon fontSize=".7rem" sx={{ mr: 1 }} />
                {owner}
              </Stack>
            </Typography>
          </Stack>
          <Stack mb={2}>
            <Typography variant="h6">Members</Typography>
            {members?.length === 0 ? (
              <Typography>No members for this team</Typography>
            ) : (
              <List>
                {members.map((member) => (
                  <ListItem sx={{ pb: 1 }} disablePadding key={member.ZUID}>
                    <Stack width="100%" direction="row" alignItems="center">
                      {member.accepted ? <PersonIcon /> : <AccessTimeIcon />}
                      <Typography ml={1}>{member.inviteeEmail}</Typography>
                      <IconButton sx={{ ml: 'auto' }}>
                        <PersonOffIcon />
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
              <Typography>No instances for this team</Typography>
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
              formik={formik}
              fullWidth
              hasNoLabel
              boxGutterBottom={false}
              size="small"
            />

            <LoadingButton
              startIcon={<PersonAddIcon />}
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ px: 4 }}
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
