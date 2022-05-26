import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as helper from 'utils';
import { Box, Button, Link, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

export const AccordionCompv2 = ({ header, data }) => {
  const theme = useTheme();
  const router = useRouter();
  const title = header && helper.generateHeader(header);
  //   const generateTitle = (title) => {
  //     if (title?.includes('Tool')) {
  //       return 'Tools and Resources';
  //     }
  //     return title;
  //   };
  const arr = data && helper.transformJson(data);
  console.log(arr, 111111);
  const handleClick = (pathname) => {
    router.push({ pathname });
  };

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};
