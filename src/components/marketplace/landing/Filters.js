/**
 * MUI Imports
 */
import {
  Box,
  TextField,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';

/**
 * React Imports
 */
import { useState } from 'react';

const Filters = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const [open, setOpen] = useState(true);

  const onHoverHandler = () => {
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  const entityTypes = [
    {
      isActive: true,
      header: 'Extensions',
      description:
        'Lorem ipsum lorem ipsum lorem ipsum loren ipsum lorem ipsum',
    },
    {
      isActive: false,
      header: 'Modules',
      description:
        'Lorem ipsum lorem ipsum lorem ipsum loren ipsum lorem ipsum',
    },
    {
      isActive: false,
      header: 'Apps',
      description:
        'Lorem ipsum lorem ipsum lorem ipsum loren ipsum lorem ipsum',
    },
  ];

  const tags = [
    {
      isActive: true,
      tag: 'Schema',
    },
    {
      isActive: false,
      tag: 'Seo',
    },
    {
      isActive: false,
      tag: 'Commerce',
    },
    {
      isActive: false,
      tag: 'Analytics',
    },
    {
      isActive: false,
      tag: 'Security',
    },
    {
      isActive: false,
      tag: 'Frameworks',
    },
  ];

  return (
    <Container>
      {/* Entity Types Component  */}

      <Typography
        variant="h6"
        component="h3"
        sx={{
          color: theme.palette.zesty.zestyLightText,
          fontWeight: '500',
          mb: 2,
        }}
      >
        Entity Types
      </Typography>
      <Grid container spacing={2}>
        {entityTypes.map((item, idx) => (
          <Grid key={idx} item sm={12} md={4}>
            <Button
              fullWidth={true}
              color="secondary"
              variant={item.isActive ? 'contained' : 'outlined'}
              sx={{
                border: item.isActive
                  ? ''
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
                '&:hover': {
                  background: item.isActive
                    ? theme.palette.zesty.zestyRedHover
                    : '',
                },
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="h5"
                component="h2"
              >
                {item.header}
              </Typography>
              <Typography
                sx={{
                  px: 4,
                  color: item.isActive
                    ? ''
                    : theme.palette.zesty.zestyLightText,
                }}
                variant="subtitle2"
                component="p"
              >
                Lorem ipsum lorem ipsum lorem ipsum loren ipsum lorem ipsum
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Tags Component  */}

      <Typography
        variant="h6"
        component="h3"
        sx={{
          color: theme.palette.zesty.zestyLightText,
          fontWeight: '500',
          mt: 4,
          mb: 2,
        }}
      >
        Tags
      </Typography>

      <Grid container spacing={2}>
        {tags.map((item, idx) => (
          <Grid key={idx} item sm={6} md={4} lg={2}>
            <Button
              fullWidth={true}
              color="secondary"
              variant={item.isActive ? 'contained' : 'outlined'}
              sx={{
                border: item.isActive
                  ? ''
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
                '&:hover': {
                  background: item.isActive
                    ? theme.palette.zesty.zestyRedHover
                    : '',
                },
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="h6"
                component="h2"
              >
                {item.tag}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Search Component  */}

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexWrap: isTablet ? 'wrap' : 'no-wrap',
          mt: 4,
        }}
      >
        <TextField
          variant="outlined"
          color="secondary"
          fullWidth
          placeholder="Search for apps"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          // onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          onMouseEnter={onHoverHandler}
          sx={{
            ml: { xs: 0, md: 2 },
            mt: { xs: 2, md: 0 },
            width: { xs: 'auto', md: '20%' },
            alignSelf: 'stretch',
            color: theme.palette.zesty.zestyLightText2,
            fontWeight: 'bold',
          }}
          variant="outlined"
          color={isDarkMode ? 'secondary' : 'inherit'}
          // onClick={() => handleSort()}
        >
          Sort:
          <Typography
            sx={{
              color: theme.palette.zesty.zestyOrange,
              ml: 0.3,
              fontWeight: 'bold',
            }}
            component={'span'}
          >
            A-Z
          </Typography>
        </Button>
        {open ? (
          <Card
            onMouseLeave={onMouseLeave}
            sx={{
              zIndex: 10,
              position: 'absolute',
              bottom: -180,
              right: isTablet ? '' : 0,
              width: 195,
              background: theme.palette.common.white,
            }}
          >
            <Button
              sx={{
                fontWeight: 'normal',
                color: theme.palette.zesty.zestyZambezi,
              }}
              variant="text"
              color="inherit"
              fullWidth
            >
              Best Match
            </Button>
            <Box
              component="hr"
              sx={{
                width: '80%',
                borderTop: 0,
              }}
            />
            <Button
              sx={{
                fontWeight: 'normal',
                color: theme.palette.zesty.zestyZambezi,
              }}
              variant="text"
              color="inherit"
              fullWidth
            >
              Recently Added
            </Button>
            <Box
              component="hr"
              sx={{
                width: '80%',
                borderTop: 0,
              }}
            />
            <Button
              sx={{
                fontWeight: 'normal',
                color: theme.palette.zesty.zestyZambezi,
              }}
              variant="text"
              color="inherit"
              fullWidth
            >
              Most Installed
            </Button>
          </Card>
        ) : null}
      </Box>
    </Container>
  );
};

export default Filters;
