import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import {
  AdminPanelSettingsRounded,
  CodeRounded,
  RecommendRounded,
  BorderColorRounded,
} from '@mui/icons-material';

const BASE_ROLES = Object.freeze([
  {
    name: 'Owner',
    description:
      'Full access to all sections: Content, Schema, Media, Code, Leads, Redirects, Reports, Apps, and Settings. In Accounts they have full access as well which includes the ability to: launch instances, add domains, invite new users and set their roles, add a team, and create tokens.',
    avatar: (
      <Avatar sx={{ bgcolor: 'deepOrange.100' }}>
        <AdminPanelSettingsRounded color="primary" />
      </Avatar>
    ),
  },
  {
    name: 'Admin',
    description:
      'Admins have the same privileges as the Owner role except for deleting other users.',
    avatar: (
      <Avatar sx={{ bgcolor: 'success.light' }}>
        <AdminPanelSettingsRounded
          sx={{ fill: (theme) => theme.palette.success.dark }}
        />
      </Avatar>
    ),
  },
  {
    name: 'Developer',
    description:
      'Access to Content, Schema, Media, Code, Leads, Redirects, Reports, Apps, and Setting section.',
    avatar: (
      <Avatar sx={{ bgcolor: 'blue.100' }}>
        <CodeRounded sx={{ fill: (theme) => theme.palette.blue[500] }} />
      </Avatar>
    ),
  },
  {
    name: 'SEO',
    description:
      'Access to Content, Media, Leads, Redirects, Reports, and Apps section.',
    avatar: (
      <Avatar sx={{ bgcolor: 'purple.100' }}>
        <RecommendRounded sx={{ fill: (theme) => theme.palette.purple[600] }} />
      </Avatar>
    ),
  },
  {
    name: 'Publisher',
    description: 'Access to Content, Media, Leads, Reports, and Apps section.',
    avatar: (
      <Avatar sx={{ bgcolor: 'pink.100' }}>
        <AdminPanelSettingsRounded
          sx={{ fill: (theme) => theme.palette.pink[600] }}
        />
      </Avatar>
    ),
  },
  {
    name: 'Contributor',
    description: 'Access to Content, Media, and Apps section.',
    avatar: (
      <Avatar sx={{ bgcolor: 'yellow.50' }}>
        <BorderColorRounded
          sx={{ fill: (theme) => theme.palette.yellow[500] }}
        />
      </Avatar>
    ),
  },
]);

export const BaseRoles = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Base Roles
      </Typography>
      <List sx={{ p: 0 }}>
        {BASE_ROLES.map((role, index) => (
          <ListItem
            key={index}
            sx={{
              p: 2,
              border: (theme) => `1px solid ${theme.palette.border}`,
              borderRadius: 2,
              mb: index + 1 < BASE_ROLES.length ? 1 : 0,
            }}
          >
            <ListItemAvatar>{role.avatar}</ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" fontWeight={700} color="text.primary">
                  {role.name}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {role.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
