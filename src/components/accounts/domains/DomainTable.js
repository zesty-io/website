import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Link from '@mui/material/Link';

export default function DomainTable({ rows, caption, deleteDomain }) {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
      <Table sx={{ minWidth: 450 }} aria-label="caption table">
        <caption sx={{ borderTop: 1 }}>{caption}</caption>
        <TableHead>
          <TableRow>
            <TableCell>Domain</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={`${row.ZUID}-domain`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link
                  variant="body2"
                  href={`https://${row.domain}`}
                  underline="hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  {row.domain}
                </Link>
              </TableCell>
              <TableCell align="right" pr={2}>
                {row.branch === 'webengine' ? (
                  <Typography variant="caption">{row.branch}</Typography>
                ) : (
                  row.branch
                )}
              </TableCell>
              <TableCell align="right">
                {row.createdAt === 'default' ? (
                  <Typography variant="caption">{row.createdAt}</Typography>
                ) : (
                  new Date(row.createdAt).toLocaleDateString()
                )}
              </TableCell>
              <TableCell align="right">
                {row.branch !== 'webengine' && (
                  <IconButton
                    variant="text"
                    color="error"
                    onClick={() => deleteDomain(row.ZUID)}
                    value={row.ZUID}
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
