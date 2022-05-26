import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as helper from 'utils';
import * as Style from './styles';
import { Box, Button, Link, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

export const AccordionComp = ({ header, data }) => {
  const theme = useTheme();
  const router = useRouter();
  const title = header && helper.generateHeader(header);
  const generateTitle = (title) => {
    if (title?.includes('Tool')) {
      return 'Tools and Resources';
    }
    return title;
  };
  const arr = data && helper.transformJson(data);
  console.log(arr, 111111);
  const handleClick = (pathname) => {
    router.push({ pathname });
  };
  const customStyle = {
    color: '#333333',
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
  };

  return (
    <Box>
      {header && (
        <Typography
          variant="p"
          component="h1"
          sx={{
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            fontSize: '20px',
            ...customStyle,
          }}
          paddingY={2}
          paddingX={2}
        >
          {/* <Box dangerouslySetInnerHTML={{ __html: title }}></Box> */}
          {generateTitle(title)}
        </Typography>
      )}
      {arr &&
        arr?.map((item) => {
          return (
            <Accordion
              disableGutters
              elevation={1}
              sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                border: 0,
                overflowX: 'hidden',
              }}
            >
              <AccordionSummary
                expanded={!item.children}
                expandIcon={item?.children ? <ExpandMoreIcon /> : false}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => handleClick(item.href)}
                sx={{ boxShadow: 'none', border: 0 }}
              >
                <Box
                  onClick={() => handleClick(item.href)}
                  underline="none"
                  sx={{ fontWeight: 600, ...customStyle }}
                >
                  {item.title}
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ boxShadow: 'none', border: 0 }}>
                {item?.children?.map((e) => {
                  return (
                    <Box>
                      {!e.children && (
                        <Style.CustomButton
                          href={e.href}
                          sx={{ fontSize: '14px', ...customStyle }}
                        >
                          <Box
                            onClick={() => handleClick(e.href)}
                            paddingY={0.5}
                            dangerouslySetInnerHTML={{ __html: e.name }}
                          ></Box>
                        </Style.CustomButton>
                      )}
                      {e.children && (
                        <details
                          style={{ cursor: 'pointer', padding: '.5rem 0' }}
                        >
                          <summary
                            onClick={() => handleClick(e.href)}
                            style={{
                              fontWeight: 600,
                              ...customStyle,
                            }}
                          >
                            {e.name}
                          </summary>
                          {e?.children?.map((x) => (
                            <Style.CustomButton
                              onClick={() => handleClick(x.href)}
                              paddingLeft={2}
                              sx={{
                                fontSize: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                                ...customStyle,
                              }}
                              underline="none"
                            >
                              <Box
                                paddingY={0.5}
                                dangerouslySetInnerHTML={{ __html: x?.name }}
                              ></Box>
                            </Style.CustomButton>
                          ))}
                        </details>
                      )}
                    </Box>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </Box>
  );
};
