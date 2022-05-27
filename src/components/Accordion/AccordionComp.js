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

const customStyle = {
  color: '#333333',
  textAlign: 'left',
  display: 'flex',
};
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

  const handleClick = (pathname) => {
    router.push({ pathname });
  };

  const isCurrentUrl = (name) => {
    const newName = name.replaceAll(' ', '-').toLowerCase();
    const res = window.location.pathname.includes(newName);
    console.log(newName, 2222);
    return res;
  };
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {header && (
        <Typography
          variant="p"
          component="h1"
          sx={{
            fontWeight: 'bolder',
            whiteSpace: 'nowrap',
            fontSize: '19px',
            background: '#f1f1f1',
            marginTop: '1rem',
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
          const active = isCurrentUrl(item?.title);
          if (!item.children) {
            return (
              <Style.AccordionBtnHead
                active={active}
                onClick={() => handleClick(item.href)}
                underline="none"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></Style.AccordionBtnHead>
            );
          }
          return (
            <Accordion
              disableGutters
              elevation={1}
              sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                border: 0,
                overflowX: 'hidden',
                margin: 0,
              }}
            >
              <AccordionSummary
                expanded={!item.children}
                expandIcon={
                  item?.children ? (
                    <Style.IconContainer>
                      <ExpandMoreIcon />
                    </Style.IconContainer>
                  ) : (
                    false
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  boxShadow: 'none',
                  border: 0,
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',

                  padding: 0,
                }}
              >
                <Style.AccordionBtnHead
                  active={active}
                  onClick={() => handleClick(item.href)}
                  underline="none"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></Style.AccordionBtnHead>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  boxShadow: 'none',
                  border: 0,
                  padding: 1,
                }}
              >
                {item?.children?.map((e) => {
                  const active = isCurrentUrl(e?.name);
                  return (
                    <Box
                      sx={{
                        borderLeft: '1px solid #e1e1e1',
                      }}
                    >
                      {!e.children && (
                        <Style.AccordionBtn
                          onClick={() => handleClick(e.href)}
                          dangerouslySetInnerHTML={{ __html: e.name }}
                        ></Style.AccordionBtn>
                      )}
                      {e.children && (
                        <Accordion
                          sx={{
                            boxShadow: 'none',
                            backgroundColor: 'transparent',
                            border: 0,
                            overflowX: 'hidden',
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ fontWeight: 600, ...customStyle }}
                          >
                            <Style.AccordionBtnHead
                              active={active}
                              onClick={() => handleClick(e?.href)}
                              underline="none"
                              dangerouslySetInnerHTML={{ __html: e?.name }}
                            ></Style.AccordionBtnHead>
                          </AccordionSummary>
                          <AccordionDetails>
                            {e?.children.map((x) => {
                              return (
                                <Box
                                  sx={{
                                    borderLeft: '1px solid #e1e1e1',
                                  }}
                                >
                                  <Style.AccordionBtn
                                    onClick={() => handleClick(x.href)}
                                    dangerouslySetInnerHTML={{
                                      __html: x?.name,
                                    }}
                                  ></Style.AccordionBtn>
                                </Box>
                              );
                            })}
                          </AccordionDetails>
                        </Accordion>
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
