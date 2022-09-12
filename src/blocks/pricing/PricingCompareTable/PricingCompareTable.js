import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );
const PricingCompareTable = ({ tiers, category = '', pricingLevers }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box>
      <Accordion expanded={expanded === 'panel1'}>
        {/* Removed expandIcon from AccordionSummary */}
        {/*expandIcon={<ExpandMoreIcon />}*/}
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: 'background.level2' }}
        >
          <Typography>{capitalize(category.replaceAll('_', ' '))}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper} elevation={0}>
            <Table aria-label="caption table" sx={{ minWidth: 600 }}>
              <caption style={{ display: 'none' }}>
                Compare the plans and choose the one which works for you the
                best.
              </caption>
              <TableHead>
                <TableRow></TableRow>
                <TableRow>
                  <TableCell>Features</TableCell>

                  {/* Do not include Sandbox tier in table */}
                  {tiers
                    .filter((tier) => tier.meta.zuid != '7-e0e8cadec0-7crggz')
                    .map((item, i) => (
                      <TableCell align="center" key={i}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {item.name}
                        </Typography>
                      </TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {pricingLevers
                  .filter((lever) => lever.classification == category)
                  .map((lever) => (
                    <TableRow key={`${category}${lever.zuid}`}>
                      <TableCell component="th" scope="row" width="300">
                        {lever.title}
                      </TableCell>

                      {/* Do not include Sandbox tier in table */}
                      {tiers
                        .filter(
                          (tier) => tier.meta.zuid != '7-e0e8cadec0-7crggz',
                        )
                        .map((tier) => (
                          <TableCell align="center">
                            {lever.included_pricing_tier.find(
                              (zuid) => zuid == tier.meta.zuid,
                            ) ? (
                              <Box display={'flex'} justifyContent={'center'}>
                                <Box
                                  component={Avatar}
                                  bgcolor={theme.palette.secondary.main}
                                  width={20}
                                  height={20}
                                >
                                  <svg
                                    width={12}
                                    height={12}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Box>
                              </Box>
                            ) : (
                              ''
                            )}
                          </TableCell>
                        ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default PricingCompareTable;
