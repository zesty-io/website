import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { baseroles } from 'components/accounts/users/baseroles';
import { grey } from '@mui/material/colors';
import { docData } from 'components/accounts/users/docData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const BaseRolesTable = ({ title = 'Base Roles in Zesty.io' }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ my: 2, p: 3, border: `1px solid ${grey[400]}` }}>
          <Typography variant="h6" mb={3} color="text.secondary">
            Roles and Permissions
          </Typography>
          {baseroles.map((role) => (
            <Stack key={role.ZUID} px={2} spacing={1} mb={2}>
              <Typography fontWeight="bolder">{role.label}</Typography>
              <Typography>{role.desc}</Typography>
            </Stack>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} height="100%">
        <Paper sx={{ my: 2, p: 3, border: `1px solid ${grey[400]}` }}>
          <Typography variant="h6" mb={3} color="text.secondary">
            Users
          </Typography>
          {docData.map((doc) => (
            <Stack key={doc.id} px={2} spacing={1} mb={2}>
              <Typography fontWeight="bolder">{doc.title}</Typography>
              <Typography>{doc.desc}</Typography>
              <Button
                color="primary"
                endIcon={<ArrowForwardIcon />}
                href={doc.link}
                target="_blank"
                sx={{ alignSelf: 'start' }}
              >
                Learn More
              </Button>
            </Stack>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};
