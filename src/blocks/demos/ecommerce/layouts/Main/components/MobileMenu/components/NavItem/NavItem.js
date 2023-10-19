import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const NavItem = ({ title, items }) => {
  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent', p: 0 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            padding: 0,
            minHeight: 0,
            '& .MuiAccordionSummary-content': { m: 0 },
          }}
        >
          <Typography
            color={'text.primary'}
            sx={{
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: 1,
            pl: 2,
            borderLeft: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack spacing={1.5}>
            {items.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                underline={'none'}
                color={'text.primary'}
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {p.title}
              </Link>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
