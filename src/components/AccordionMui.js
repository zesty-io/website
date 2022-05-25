import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as helper from 'utils';
import { Box, Link, useTheme } from '@mui/material';

export const AccordionMui = ({ header, data }) => {
  const theme = useTheme();
  const title = header && helper.generateHeader(header);
  const generateTitle = (title) => {
    if (title?.includes('Tool')) {
      return 'Tools and Resources';
    }
    return title;
  };
  const arr = data && helper.transformJson(data);
  const handleClick = (item) => {
    window.open(item.titleHref, '_self');
  };
  return (
    <div>
      {header && (
        <Typography
          variant="p"
          component="h1"
          sx={{ whiteSpace: 'nowrap', fontSize: '18px' }}
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
            <Accordion>
              <AccordionSummary
                expanded={!item.children}
                expandIcon={item?.children ? <ExpandMoreIcon /> : false}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => handleClick(item)}
              >
                <Link
                  href={item.href}
                  underline="none"
                  sx={{ fontWeight: 600 }}
                >
                  {item.title}
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {item?.children?.map((e) => {
                  return (
                    <Box>
                      <Link href={e.href} sx={{ fontSize: '14px' }}>
                        <Box
                          paddingY={0.5}
                          dangerouslySetInnerHTML={{ __html: e.name }}
                        ></Box>
                      </Link>
                      {e.children && (
                        <details
                          style={{ cursor: 'pointer', padding: '.5rem 0' }}
                        >
                          <summary
                            style={{
                              fontWeight: 600,
                              color: theme.palette.primary.main,
                            }}
                          >
                            {e.name}
                          </summary>
                          {e?.children?.map((x) => (
                            <Link
                              paddingLeft={2}
                              sx={{
                                cursor: 'pointer',
                                fontSize: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                              underline="none"
                              href={x.href}
                            >
                              {x?.name}
                            </Link>
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
