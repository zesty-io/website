import React, { useState } from 'react';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import HeaderCell from './HeaderCell';
import BodyCell from './BodyCell';
import EmptyCell from './EmptyCell';
import TierSelector from './TierSelector';

const PricingTable = ({ levers, classification, tiers }) => {
  const theme = useTheme();

  const [selectedTier, setSelectedTier] = useState(tiers[0].title);

  const tierSelectorProps = {
    tiers,
    selectedTier,
    setSelectedTier,
  };

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  if (!levers && !classification && !tiers) return <></>;

  return (
    <Box
      sx={{
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: '#f9fafb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TableContainer
        id="pricing-table"
        component={Paper}
        elevation={0}
        sx={{
          overflowX: 'initial',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#f9fafb',
          maxWidth: 1000,
          px: { xs: 3, sm: 5, lg: 0 },
          '& .MuiTableCell-root, .MuiTableRow-root': {
            border: 0,
            backgroundColor: '#f9fafb',
            padding: 0,
          },
          '& .MuiTableCell-root': {
            width: '260px',
          },
        }}
      >
        <Table stickyHeader={true} aria-label="sticky table" sx={{ border: 0 }}>
          <TableHead
            sx={{
              padding: 0,
              position: 'sticky',
              top: '60px',
              '!important': '',
            }}
          >
            <TableRow>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: '8px',
                    padding: 2,
                    maxWidth: '260px',
                    backgroundColor: 'none',
                  }}
                >
                  {isSmall && <TierSelector {...tierSelectorProps} />}
                </Box>
              </TableCell>
              {tiers.map((tier) => (
                <HeaderCell data={tier} selectedTier={selectedTier} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {classification?.map((item, index) => (
              <>
                <TableRow>
                  <TableCell>
                    <Typography
                      fontSize={18}
                      fontWeight={700}
                      color={theme.palette.zesty.zestyZambezi}
                    >
                      {item.title}
                    </Typography>
                  </TableCell>
                  {tiers.map((tier) => (
                    <EmptyCell tier={tier.title} selectedTier={selectedTier} />
                  ))}
                </TableRow>
                {levers
                  ?.filter((lever) => lever.classification[0] === item.title)
                  .map((lever) => (
                    <>
                      <TableRow>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              height: '64px',
                              maxWidth: '260px',
                            }}
                          >
                            <KeyboardArrowRightIcon sx={{ mr: 1 }} />
                            <Typography
                              fontSize={16}
                              fontWeight={600}
                              color={theme.palette.zesty.zestyZambezi}
                            >
                              {lever.title}
                            </Typography>
                          </Box>
                        </TableCell>
                        <BodyCell
                          data={lever.free_value}
                          tier={tiers[0].title}
                          selectedTier={selectedTier}
                        />
                        <BodyCell
                          data={lever.growth_value}
                          tier={tiers[1].title}
                          selectedTier={selectedTier}
                        />
                        <BodyCell
                          data={lever.enterprise_value}
                          tier={tiers[2].title}
                          selectedTier={selectedTier}
                        />
                      </TableRow>
                    </>
                  ))}
                <TableRow>
                  <TableCell />
                  {tiers.map((tier) => (
                    <EmptyCell tier={tier.title} selectedTier={selectedTier} />
                  ))}
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PricingTable;
