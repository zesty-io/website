import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * MUI Imports
 */
import { Box, Typography, Button, Grid, Card } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import { useTheme, alpha } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Star from '../../../../public/assets/images/homepage/star.svg';

const Bottom = ({ theme, isMedium, isDarkMode, content, FillerContent }) => {
  return (
    <Box sx={{}}>
      <Container sx={{ py: 5 }}>
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                variant: 'h4',
                sx: {
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              },
            },
          }}
        >
          {content.cta_description || FillerContent.description}
        </MuiMarkdown>
      </Container>
    </Box>
  );
};

export default Bottom;
