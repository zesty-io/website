import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

import {
  FilterSize,
  FilterPrice,
  FilterColor,
  FilterBrand,
  SortBySelectBox,
} from './components';

const Filters = ({ children }) => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h5'} fontWeight={700} marginY={1}>
          <Typography
            variant={'inherit'}
            sx={{
              display: 'inline-flex',
              py: '1px',
              px: '2px',
              borderRadius: 1,
              color: 'common.white',
              bgcolor: 'error.main',
            }}
          >
            Save up to 30%!
          </Typography>{' '}
          Discover our latest promotions
        </Typography>
        <Typography color={'text.secondary'}>
          We believe lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus feugiat elit vitae enim lacinia semper.
        </Typography>
      </Box>
      <Box
        display={'flex'}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent={'space-between'}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box width={1} display={'flex'}>
          <Box
            display={'flex'}
            alignItems={'center'}
            paddingBottom={{ xs: 1, md: 0 }}
            overflow={'auto'}
          >
            <Typography sx={{ whiteSpace: 'nowrap' }}>Filter by</Typography>
            <Box marginX={1}>
              <FilterSize />
            </Box>
            <Box marginX={1}>
              <FilterPrice />
            </Box>
            <Box marginX={1}>
              <FilterColor />
            </Box>
            <Box marginX={1}>
              <FilterBrand />
            </Box>
          </Box>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          marginTop={{ xs: 1, md: 0 }}
        >
          <Typography sx={{ whiteSpace: 'nowrap' }} marginRight={1}>
            Sort by
          </Typography>
          <SortBySelectBox />
        </Box>
      </Box>
      <Box paddingY={4}>{children}</Box>
      <Box display={'flex'} justifyContent={'center'} width={1}>
        <Pagination count={10} size={'large'} color="primary" />
      </Box>
    </Box>
  );
};

Filters.propTypes = {
  children: PropTypes.node,
};

export default Filters;
