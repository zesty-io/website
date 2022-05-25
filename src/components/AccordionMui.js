import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as helper from 'utils';
import { Box, Button, Link, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

export const AccordionMui = ({ header, data }) => {
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
  const handleClick = (path) => {
    console.log(path, 11111111);
    router.push({ pathname: path });
    // window.open(item.titleHref, '_self');
  };
  const customStyle = {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  };

  const BtnStyle = {
    fontWeight: 600,
    display: 'flex',
    textAlign: 'left',
    justifyItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    whiteSpace: 'nowrap',
  };
  return (
    <div>
      {header && (
        <Typography
          variant="p"
          component="h1"
          sx={{ whiteSpace: 'nowrap', fontSize: '18px', ...customStyle }}
          paddingY={2}
          paddingX={2}
        >
          {/* <Box dangerouslySetInnerHTML={{ __html: title }}></Box> */}
          {generateTitle(title)}
        </Typography>
      )}
      {arr &&
        arr?.map((item) => {
          // if (!item.children) {
          //   return (
          //     <Box
          //       boxShadow={1}
          //       padding={2}
          //       sx={{
          //         width: '100%',
          //         textAlign: 'left',
          //         fontWeight: 600,

          //         ...customStyle,
          //       }}
          //     >
          //       {item.title}
          //     </Box>
          //   );
          // }
          return (
            <Accordion disableGutters elevation={1}>
              <AccordionSummary
                expanded={!item.children}
                expandIcon={item?.children ? <ExpandMoreIcon /> : false}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => handleClick(item.titleHref)}
              >
                <Box
                  onClick={() => handleClick(item.titleHref)}
                  underline="none"
                  sx={{ fontWeight: 600, ...customStyle }}
                >
                  {item.title}
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {item?.children?.map((e) => {
                  return (
                    <Box>
                      <Box
                        href={e.href}
                        sx={{ fontSize: '14px', ...customStyle }}
                      >
                        <Box
                          onClick={() => handleClick(e.href)}
                          paddingY={0.5}
                          dangerouslySetInnerHTML={{ __html: e.name }}
                        ></Box>
                      </Box>
                      {e.children && (
                        <details
                          style={{ cursor: 'pointer', padding: '.5rem 0' }}
                        >
                          <summary
                            style={{
                              fontWeight: 600,
                              ...customStyle,
                            }}
                          >
                            {e.name}
                          </summary>
                          {e?.children?.map((x) => (
                            <Box
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
                              {x?.name}
                            </Box>
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
    </div>
  );
};
