import { Card, Typography, useTheme, Box } from '@mui/material';

import FillerContent from 'components/globals/FillerContent';

const TestimonialCard = ({ feature }) => {
  const theme = useTheme();

  const {
    headline,
    person_name,
    person_title,
    company_name,
    company_logo,
    image,
    testimonial_content,
  } = feature;

  return (
    <Card
      sx={{
        margin: 0,
        mx: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: '64px',
        py: '32px',
        borderRadius: '22px',
        maxWidth: { xs: '100%', sm: '380px' },
        minHeight: '460px',
        backgroundColor: 'white',
      }}
    >
      <Box
        component="img"
        src={image?.data[0]?.url || FillerContent.image}
        sx={{ width: '112px', height: '112px', borderRadius: '50%', mb: 3 }}
      />
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 400,
          mb: 3,
          color: theme.palette.zesty.zestyDarkText,
        }}
      >
        {headline}
      </Typography>
      <Box
        flexGrow={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'end'}
        flexDirection={'column'}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 800,
            color: theme.palette.zesty.zestyDarkText,
          }}
        >
          {person_name}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 600,
            color: theme.palette.zesty.zestyZambezi,
          }}
        >
          {person_title}
        </Typography>
      </Box>
    </Card>
  );
};

export default TestimonialCard;
