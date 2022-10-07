import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';




const PartnersColor = (partnerLogos) => {

const logos = partnerLogos.partnerLogos   ;

  return (
    <Grid container spacing={0}>
      {logos.map((item, index) => (
        <Grid
          item
          container
          key={index}
          xs={4}
          direction={index < 3 ? 'row' : 'row-reverse'}
        >
          <Grid item xs={6}>
            <Avatar
              src={item?.url }
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 60, md: 80 },
                padding: 2,
                boxShadow: 4,
                marginTop: 1,
                bgcolor: 'background.paper',
              }}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default PartnersColor;
