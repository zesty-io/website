import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';
import WYSIWYGRender from 'components/WYSIWYGRender';

const FeaturesWithIllustration = ({
  wysiwyig_type = '',
  rich_text = '',
  image_url = 'https://pzcvtc6b.media.zestyio.com/content-management.png',
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container paddingY={2}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box marginBottom={4}>
            <WYSIWYGRender
              rich_text={rich_text}
              customClass={wysiwyig_type}
            ></WYSIWYGRender>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={image_url || FillerContent.illustration_image}
              alt="Zesty Benefits Graphic"
              width={1}
              /*height={1}*/
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesWithIllustration;
