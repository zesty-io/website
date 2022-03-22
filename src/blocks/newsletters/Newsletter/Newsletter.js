import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/FillerContent';
import { useTheme } from '@mui/material/styles';

const Newsletter = ({title, description, ctaBtn}) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          fontWeight={700}
          variant={'h4'}
          align={'center'}
          gutterBottom
        >
          {title || FillerContent.header}
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          {description || FillerContent.description}
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'center' }}
          >
            <Box
              flex={'1 1 auto'}
              component={TextField}
              label="Enter your email"
              variant="outlined"
              color="primary"
              fullWidth
              height={54}
              sx={{
                maxWidth: 422,
              }}
            />
            <Box
              component={Button}
              variant="contained"
              color="primary"
              backgroundColor={theme.palette.zesty.zestyOrange}
              size="large"
              height={54}
              marginTop={{ xs: 2, md: 0 }}
              marginLeft={{ md: 2 }}
              sx={{backgroundColor: `${theme.palette.secondary.main}`}}
            >
              {ctaBtn || FillerContent.cta}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
