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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMardown from 'mui-markdown';

/**
 * React Imports
 */
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MarketplaceContext } from '../MarketplaceContext';
import useDebounce from 'components/hooks/useDebounce';

const Filters = ({ marketEntityTypes, marketTags, marketEntities }) => {
  const { setEntities, setIsSearching } = useContext(MarketplaceContext);
  const router = useRouter();

  /************************************************
   * Theme Settings
   */

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  /************************************************
   * Sorting Handlers
   */

  const [isAsc, setIsAsc] = useState(false);
  /**
   * It sorts the list of entities by name, and then reverses the list if it's already sorted
   */
  const handleSort = () => {
    const list = [...marketEntities].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

    setEntities(isAsc ? list : list.reverse());
    setIsAsc(!isAsc);
  };

  /************************************************
   * Filter  Handlers
   */
  const [open, setOpen] = useState(false);
  const onHoverHandler = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  /************************************************
   * Search  Handlers
   */

  const [search, setSearch] = useState('');
  const value = useDebounce(search, () =>
    setEntities(
      marketEntities?.filter((ext) => {
        return ext.name.toLowerCase().includes(value.toLowerCase());
      }),
    ),
  );
  // Check if search is active
  useEffect(() => {
    search ? setIsSearching(true) : setIsSearching(false);
  }, [search]);

  /************************************************
   * Tags  Handlers
   */

  /* Creating a new array of objects from the marketTags array. */
  const [tags, setTags] = useState(
    marketTags.map((item, idx) => {
      return {
        isActive: idx === 0 ? true : false,
        tag: item.name,
      };
    }),
  );

  /**
   * It loops through the tags array and sets the isActive property of the tag at the index passed in to
   * true, and sets the isActive property of all other tags to false
   * @param idx - the index of the tag that was clicked
   */
  const tagsHandler = (idx) => {
    tags.forEach((item, i) =>
      idx === i ? (item.isActive = true) : (item.isActive = false),
    );
    setEntityTypes([...entityTypes]);
  };

  /************************************************
   * Entity types Handlers
   */

  /* Creating a new array of objects from the marketEntityTypes array. */

  const [entityTypes, setEntityTypes] = useState(
    marketEntityTypes.map((item, idx) => {
      return {
        isActive: router.asPath === item.uri ? true : false,
        name: item.name,
        description: item.description,
        uri: item.uri,
      };
    }),
  );

  /**
   * Hide Search if market items are less than 9
   */
  const [hideSearch, setHideSearch] = useState(false);
  useEffect(() => {
    marketEntities.length < 9 ? setHideSearch(true) : setHideSearch(false);
  }, [marketEntities]);

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
        {entityTypes?.map((item, idx) => (
          <Grid sx={{ width: '100%' }} key={idx} item sm={12} md={4}>
            <Box
              href={item.uri}
              component="a"
              fullWidth={true}
              color="secondary"
              sx={{
                textDecoration: 'none',
                width: '100%',
                maxWidth: 550,
                minHeight: 118,
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
                background: item.isActive
                  ? theme.palette.zesty.zestyOrange
                  : '',
                '&:hover': {
                  border: `1px solid ${theme.palette.zesty.zestyOrange}`,
                  background: item.isActive
                    ? ''
                    : theme.palette.zesty.zestyLightOrange,
                },
              }}
            >
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="h5"
                component="h2"
              >
                {item.name}
              </Typography>
              <MuiMardown
                overrides={{
                  p: {
                    component: Typography,
                    props: {
                      variant: 'subtitle2',
                      component: 'p',
                      sx: {
                        px: 4,
                        color: item.isActive
                          ? ''
                          : theme.palette.zesty.zestyLightText,
                      },
                    },
                  },
                }}
              >
                {item.description}
              </MuiMardown>
            </Box>
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
              onClick={() => tagsHandler(idx)}
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
          display: hideSearch ? 'none' : 'flex',
          flexWrap: isTablet ? 'wrap' : 'no-wrap',
          mt: 4,
        }}
      >
        <TextField
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for apps"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          onClick={() => handleSort()}
          onMouseDown={onMouseLeave}
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
