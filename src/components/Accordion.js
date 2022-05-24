import { AccordionDetails, Box, Link, Typography } from '@mui/material';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import * as helper from 'utils';

export const AccordionCustom = ({ data, header }) => {
  const title = helper.generateHeader(header);
  const arr = helper.transformJson(data);
  return (
    <Accordion allowZeroExpanded>
      <Typography variant="p" component="h1" sx={{}} paddingY={2} paddingX={2}>
        {title}
      </Typography>
      {arr.map((item) => (
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Link>{item.title}</Link>
            </AccordionItemButton>
          </AccordionItemHeading>
          {item.children && (
            <AccordionItemPanel>
              {item?.children?.map((e) => (
                <Box>
                  <Box>
                    {!e.children && (
                      <Link underline="none" href={e.href}>
                        {e.name}
                      </Link>
                    )}
                    {e.children && (
                      <details
                        style={{ cursor: 'pointer', padding: '.5rem 0' }}
                      >
                        <summary>{e.name}</summary>
                        {e?.children?.map((x) => (
                          <Link
                            paddingLeft={2}
                            sx={{
                              cursor: 'pointer',
                              //   fontSize: '10px',
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
                </Box>
              ))}
            </AccordionItemPanel>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
