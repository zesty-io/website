import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { LoadingSpinner } from '../loading';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { AccountsTableHead } from './AccountsTableHead';

const Index = ({
  rows,
  columns,
  pagination = true,
  perPage = 10,
  loading = false,
  title,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(perPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  React.useEffect(() => {
    setPage(0);
  }, [rows]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (rows.length < 10) {
    pagination = false;
  }

  const showTable = rows.length === 0 ? false : true;

  return (
    <Box paddingY={2} display={showTable ? 'block' : 'none'}>
      <Box paddingY={1}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box sx={{ border: `1px solid ${grey[200]}`, borderRadius: '5px' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((e) => {
                  return (
                    <TableCell
                      width={350}
                      align="left"
                      sx={{ backgroundColor: grey[200], borderTop: '50px' }}
                    >
                      <AccountsTableHead>{e.label}</AccountsTableHead>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => {
                  return (
                    <TableRow hover>
                      {columns?.map((column) => {
                        const value = row[column.id];

                        // Check if JSX ELEMENT ex Buttons etc
                        if (React.isValidElement(value)) {
                          return <TableCell>{value}</TableCell>;
                        }
                        // Check if object for preventing Errors
                        if (typeof value === 'object') {
                          return (
                            <TableCell>
                              {JSON.stringify(value, null, 4)}
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell>
                            <Typography
                              variant="body2"
                              textTransform={'capitalize'}
                            >
                              {value.replace('_', ' ').replace('-', ' ')}
                            </Typography>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {pagination && (
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Box>
    </Box>
  );
};

export const StickyTable = React.memo(Index);

Index.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
