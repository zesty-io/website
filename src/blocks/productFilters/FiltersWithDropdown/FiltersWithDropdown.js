import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import {
  FilterSize,
  FilterPrice,
  FilterColor,
  FilterBrand,
  SortBySelectBox,
} from './components';

import Container from 'components/Container';

const FiltersWithDropdown = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            T-shirts
          </Link>
          <Typography color="text.primary">Classy sweatshirt</Typography>
        </Breadcrumbs>
        <Typography variant={'h4'} fontWeight={700} marginTop={2}>
          Classy sweatshirt
        </Typography>
      </Box>
      <Box
        display={'flex'}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent={'space-between'}
        flexDirection={{ xs: 'column', md: 'row' }}
        marginY={4}
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
      <Box
        borderRadius={2}
        border={`4px dashed ${theme.palette.divider}`}
        height={400}
      />
    </Container>
  );
};

export default FiltersWithDropdown;
