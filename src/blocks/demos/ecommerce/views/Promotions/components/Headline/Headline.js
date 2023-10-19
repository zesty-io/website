import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Headline = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="primary" href="/demos/ecommerce">
        Home
      </Link>
      <Link underline="hover" color="primary" href="/demos/ecommerce/listing">
        Listing
      </Link>
      <Typography color="text.primary">Products</Typography>
    </Breadcrumbs>
  );
};

export default Headline;
