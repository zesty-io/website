/**
 * React Imports
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * MUI Imports
 */
import { Card, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grow from '@mui/material/Grow';
// import { useMediaQuery } from '@mui/material';

/**
 *  Components Imports
 */
import LeftGridLinks from './LeftGridLinks';
import RightGridLinks from './RightGridLinks';

const NavItem = ({ navHandler, activeNav, id, route, colorInvert = false }) => {
  const theme = useTheme();

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        onClick={(e) => navHandler(e, id)}
      >
        <Typography
          sx={{
            fontWeight: activeNav?.id === id ? 700 : 400,
            color:
              activeNav?.id === id
                ? theme.palette.zesty.zestyOrange
                : linkColor,
          }}
          title={route?.nav_title || ''}
        >
          {route?.nav_title || ''}
        </Typography>
        <ExpandMoreIcon
          sx={{
            marginLeft: theme.spacing(1 / 4),
            width: 16,
            height: 16,
            transform: activeNav?.id === id ? 'rotate(180deg)' : 'none',
            color:
              activeNav?.id === id
                ? theme.palette.zesty.zestyOrange
                : linkColor,
          }}
        />
      </Box>
      <Grow
        style={{ transformOrigin: '0 0 0' }}
        {...(activeNav?.id === id ? { timeout: 500 } : {})}
        in={activeNav?.id === id}
      >
        <Card
          sx={{
            mt: 4,
            width: '100%',
            maxWidth: 1076,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 0) !important',
            borderTop: `3px solid ${theme.palette.zesty.zestyOrange}`,
            borderRadius: 1,
            minHeight: 495,
          }}
        >
          {/* Grid container that holds left and rigt column of the flyout navigation*/}
          <Grid sx={{ minHeight: 495 }} container>
            <Grid
              sx={{ p: 5, background: theme.palette.background.smokeWhite }}
              item
              sm={12}
              md={7}
            >
              <LeftGridLinks route={route} />
            </Grid>
            <Grid
              sx={{
                p: 5,
                borderLeft: `1px solid ${theme.palette.background.smokeWhiteLevel2}`,
              }}
              item
              sm={12}
              md={5}
            >
              <RightGridLinks route={route} />
            </Grid>
          </Grid>
        </Card>
      </Grow>
    </Box>
  );
};

NavItem.propTypes = {
  route: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
