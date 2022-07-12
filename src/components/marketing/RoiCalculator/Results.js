/**
 *  MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';

const Results = ({ theme }) => {
  return (
    <>
      <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
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

        <Box>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ textAlign: 'center' }}
          >
            Breakdown Summary
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              color: theme.palette.zesty.zestyGreen,
              fontWeight: 'bold',
              textAlign: 'center',
              mt: 2,
            }}
          >
            $ 1,575
          </Typography>
        </Box>

        {/* Custom Chart */}
        <Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: 250,
              height: 207,
              margin: 'auto',
              borderLeft: `1px solid ${theme.palette.zesty.zestyLightGrey}`,
              borderBottom: `1px solid ${theme.palette.zesty.zestyLightGrey}`,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 48,
                height: '100%',
                background: theme.palette.zesty.zestyTealWhite,
              }}
            />
            <Box
              sx={{
                width: '100%',
                maxWidth: 48,
                height: '80%',
                background: theme.palette.zesty.zestyBlue,
              }}
            />
            <Box
              sx={{
                width: '100%',
                maxWidth: 48,
                height: '30%',
                background: theme.palette.zesty.zestyOrange,
              }}
            />
          </Box>

          <Box
            sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', mt: 2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  background: theme.palette.zesty.zestyTealWhite,
                  borderRadius: '100%',
                }}
              ></Box>
              <Typography variant="body2" component="p">
                Resources
                <br />
                $105
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  background: theme.palette.zesty.zestyBlue,
                  borderRadius: '100%',
                }}
              ></Box>
              <Typography variant="body2" component="p">
                Revenue
                <br />
                $10,000
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  background: theme.palette.zesty.zestyOrange,
                  borderRadius: '100%',
                }}
              ></Box>
              <Typography variant="body2" component="p">
                Time Saved
                <br />
                40%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{ textTransform: 'uppercase' }}
          variant="contained"
          color="secondary"
        >
          Download Your report
        </Button>
      </Box>
    </>
  );
};

export default Results;
