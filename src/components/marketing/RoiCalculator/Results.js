/**
 *  MUI Imports
 */
import { Box, Typography } from '@mui/material';

const Results = ({ theme }) => {
  return (
    <>
      <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Box>
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: theme.palette.zesty.zestyZambezi,
            }}
            variant="h6"
            component="h2"
          >
            YOUR RETURN ON INVESTMENT
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: 'center',
              color: theme.palette.zesty.zestyLightText4,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.zesty.zestyOrange,
                fontWeight: 'bold',
              }}
              variant="h4"
              component="span"
            >
              $ 1,575
            </Typography>
            / month
          </Typography>
        </Box>

        <Box>
          {[1, 2, 3, 4].map(() => (
            <Box sx={{ py: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: theme.palette.secondary.black }}>
                  Time Saved
                </Typography>
                <Typography sx={{ color: theme.palette.zesty.zestyZambezi }}>
                  40%
                </Typography>
              </Box>
              <Box
                component="hr"
                sx={{ borderTop: '0px ', borderLeft: '0px', mt: 2 }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Results;
