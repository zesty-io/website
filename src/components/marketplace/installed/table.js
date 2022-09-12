import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function BasicTable({ data = [], deleteData }) {
  const customStyle = {
    fontWeight: 'bold',
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={customStyle}>ZUID</TableCell>
            <TableCell sx={customStyle} align="center">
              Instance ZUID
            </TableCell>
            <TableCell sx={customStyle} align="center">
              App ZUID
            </TableCell>
            <TableCell sx={customStyle} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ZUID}
              </TableCell>
              <TableCell align="center">{row.instanceZUID}</TableCell>
              <TableCell align="center">{row.appZUID}</TableCell>
              <TableCell align="center">
                <Button
                  sx={{ height: 30, width: 10 }}
                  variant="contained"
                  color="secondary"
                  className="contactButton"
                  size="medium"
                  type="button"
                  onClick={() => deleteData(row)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
