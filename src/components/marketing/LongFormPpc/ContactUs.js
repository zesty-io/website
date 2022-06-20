// MUI Imports
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// Components Imports
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';

const ContactUs = ({ title, description, formContent }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.common.white,
        paddingTop: '3rem',
        paddingBottom: '1rem',
        borderRadius: '15px',
        paddingX: '3rem',
      }}
      maxWidth={600}
      margin={'0 auto'}
    >
      <Box marginBottom={4}>
        <Typography
          variant={'h3'}
          sx={{
            fontWeight: 700,
            color: theme.palette.common.black,
          }}
          align={'center'}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.common.black,
          }}
          align={'center'}
        >
          {description}
        </Typography>
      </Box>
      <Box paddingBottom={6} textAlign="center">
        <StandardFormWithSelect {...formContent} />
      </Box>
    </Box>
  );
};

export default ContactUs;
