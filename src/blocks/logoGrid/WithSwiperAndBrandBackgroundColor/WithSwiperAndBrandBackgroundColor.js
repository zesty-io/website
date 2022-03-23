import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';



const WithSwiperAndBrandBackgroundColor = (props) => {
  // logos is an array of content items
  let logos = (undefined !== props.logos) ? props.logos : [];
  const theme = useTheme();
  return (
    <Box >
      {/* removed this attribute from above box: bgcolor={'alternate.main'}*/}
      {/* <pre>{JSON.stringify(logos, null, 2)}</pre> */}
      <Container maxWidth={1}  paddingY={2}>
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
                  filter: theme.palette.mode === 'dark' ?  'grayscale(100%) brightness(0%) invert(1)' : 'grayscale(100%) brightness(0%)',
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
