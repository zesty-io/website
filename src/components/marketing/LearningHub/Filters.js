/**
 * MUI Imports
 */
import { Box, TextField, Container, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * React Imports
 */
import { useContext } from 'react';
import { LearningHubVideosContext } from './context/LearningHubVideosContext';

const Filters = ({ featuredCards }) => {
  /************************************************
   * Theme Settings
   */

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';
  const { setSearchKey } = useContext(LearningHubVideosContext);

  return (
    <Container>
      <Grid
        sx={{
          mt: isTablet ? -5 : -13,
        }}
        container
        spacing={2}
      >
        {featuredCards?.map((item, idx) => (
          <Grid sx={{ width: '100%' }} key={idx} item sm={12} md={4}>
            <Box
              href={item.uri}
              component="a"
              fullWidth={true}
              p={1}
              sx={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: isTablet ? 'auto' : 550,
                minHeight: 150,
                border: item.isActive
                  ? ''
                  : isDarkMode
                  ? `1px solid ${theme.palette.zesty.zestyOrange}`
                  : `1px solid ${theme.palette.common.grey}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1,
                color: item.isActive
                  ? theme.palette.common.white
                  : theme.palette.zesty.zestyZambezi,
                borderRadius: 2,
                background: item.isActive
                  ? theme.palette.zesty.zestyBlue
                  : theme.palette.background.paper,
                '&:hover': {
                  border: `1px solid ${theme.palette.zesty.zestyOrange}`,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: item.isActive
                    ? theme.palette.common.white
                    : isDarkMode
                    ? theme.palette.zesty.zestyOrange
                    : '',
                }}
                variant="h5"
                component="h2"
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: item.isActive
                    ? ''
                    : theme.palette.zesty.zestyLightText,
                }}
                variant="subtitle"
                component="p"
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          position: 'relative',
          flexWrap: isTablet ? 'wrap' : 'no-wrap',
          mt: 4,
        }}
      >
        <TextField
          sx={{
            background: theme.palette.background.paper,
          }}
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search for videos"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
};

export default Filters;
