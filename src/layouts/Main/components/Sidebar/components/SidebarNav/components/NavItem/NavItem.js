import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material/';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LeftGridLinks from 'layouts/Main/components/Topbar/components/NavItem/LeftGridLinks';
import RightGridLinks from 'layouts/Main/components/Topbar/components/NavItem/RightGridLinks';

const NavItem = ({ title, items, expanded, onChange }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [_activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
        expanded={expanded === title}
        onChange={onChange}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={title}
          id={title}
          sx={{ padding: 0 }}
        >
          <Typography
          // fontWeight={hasActiveLink() ? 600 : 400}
          // color={hasActiveLink() ? 'primary' : 'text.primary'}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          {/* Grid container that holds left and rigt column of the flyout navigation*/}
          <Grid container>
            <Grid item sm={12} md={7}>
              <LeftGridLinks route={items} />
            </Grid>
            <Grid
              sx={{
                borderTop: `1px solid ${theme.palette.background.smokeWhiteLevel2}`,
                my: isSmall && 5,
                width: '100%',
              }}
              item
              sm={12}
              md={5}
            >
              <RightGridLinks route={items} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
