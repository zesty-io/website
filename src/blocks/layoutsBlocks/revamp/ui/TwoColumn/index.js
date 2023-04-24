import React from 'react';
import { Grid } from '@mui/material';
import { mapComponent } from 'components/marketing/AppLayouts/ColumnSelector';

const TwoColumn = (props) => {
  const { childElements } = props;

  // Get component and children component name in an array format

  return (
    <Grid container spacing={2}>
      {childElements?.map((item, i) => {
        const Component = mapComponent(item);
        return (
          <Grid key={i} item xs={12} md={6} lg={6}>
            <Component />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TwoColumn;
