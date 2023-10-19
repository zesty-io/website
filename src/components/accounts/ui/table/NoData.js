import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

export const NoData = ({ columns = [], header = 'No Data', cta = <></> }) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: '1rem 0' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns?.map((e) => {
                return (
                  <TableCell
                    width={'10rem'}
                    align="left"
                    sx={{
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                      fontSize: '14px',
                    }}
                  >
                    {e.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody sx={{ height: '30vh', position: 'relative' }}>
            <Box
              gap={2}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                display: 'flex',
                justifyItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <Typography variant="h5">{header}</Typography>

              <Box>{cta}</Box>
            </Box>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
