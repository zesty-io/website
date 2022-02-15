import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CollapsibleItem = ({ item, isOpen = false }) => {
  const [open, setOpen] = React.useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        paddingX={2}
        sx={{ cursor: 'pointer', color: 'text.secondary' }}
        onClick={() => handleClick()}
      >
        <Typography
          variant="caption"
          color={'text.secondary'}
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 1,
            display: 'block',
          }}
        >
          {item.groupTitle}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {item.pages.map((p, i) => (
          <Box marginBottom={1 / 2} key={i}>
            <Button
              component={'a'}
              href={p.href}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                color: 'text.primary',
                borderRadius: 0,
                paddingX: 2,
              }}
              startIcon={p.icon || null}
            >
              {p.title}
            </Button>
          </Box>
        ))}
      </Collapse>
    </Box>
  );
};

CollapsibleItem.propTypes = {
  item: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
};

export default CollapsibleItem;
