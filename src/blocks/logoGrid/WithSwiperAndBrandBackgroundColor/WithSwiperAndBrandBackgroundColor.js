import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';



const WithSwiperAndBrandBackgroundColor = (props) => {
  // logos is an array of content items
  let logos = (undefined !== props.logos) ? props.logos : [];

  return (
    <Box bgcolor={'primary.main'}>
      {/* <pre>{JSON.stringify(logos, null, 2)}</pre> */}
      <Container maxWidth={1}>
        <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
          {logos.map((item, i) => (
            <Box
              maxWidth={200}
              key={i}
              marginX={{ xs: 2, md: 3 }}
              marginY={{ xs: 2, md: 3 }}
            >
              <Box
                component="img"
                width={1}
                height="auto"
                src={item.customer_logo.data[0].url}
                alt={`${item.customer_name}, a Zesty.io Customer`}
                sx={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WithSwiperAndBrandBackgroundColor;
