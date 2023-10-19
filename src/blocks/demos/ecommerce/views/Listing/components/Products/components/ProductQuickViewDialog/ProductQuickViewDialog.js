import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';

import { Details } from './components';

const ProductQuickViewDialog = ({ onClose, open, imageSrc, details }) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth={'lg'}>
      <Box paddingY={{ xs: 1, sm: 2 }} paddingX={{ xs: 2, sm: 4 }}>
        <Box
          paddingY={{ xs: 1, sm: 2 }}
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Typography variant={'h6'}>Product quick vew</Typography>
          <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={24}
            height={24}
            onClick={onClose}
            sx={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </Box>
        </Box>
        <Box paddingY={2}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: 1,
                  height: 1,
                  '& img': {
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    borderRadius: 2,
                  },
                }}
              >
                <img src={imageSrc} alt={details.title} loading={'lazy'} />
              </Box>
            </Grid>
            <Grid item container xs={12} md={6} alignItems={'center'}>
              <Box width={1}>
                <Details {...details} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

ProductQuickViewDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
};

export default ProductQuickViewDialog;
