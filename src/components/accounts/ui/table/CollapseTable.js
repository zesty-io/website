import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useZestyStore } from 'store';
import { ErrorMsg } from '../dialogs';
import { TablePagination, Typography } from '@mui/material';
import { LoadingSpinner } from '../loading';

const NoData = () => {
  return (
    <Typography
      variant="h4"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      No Data
    </Typography>
  );
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { ZestyAPI } = useZestyStore((state) => state);
  const [teamMembers, setteamMembers] = React.useState([]);

  const handleGetTeamMemberSuccess = (res) => {
    setteamMembers(res.data);
  };
  const handleGetTeamMemberError = (res) => {
    ErrorMsg({ text: res.error });
  };
  const handleClick = async (e) => {
    if (!open) {
      setOpen(true);
      const res = await ZestyAPI.getTeamMembers(e.zuid);
      !res.error && handleGetTeamMemberSuccess(res);
      res.error && handleGetTeamMemberError(res);
    } else {
      setOpen(false);
    }
  };
  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleClick(row)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="left">{row.zuid}</TableCell>
        <TableCell align="right">{row.action}</TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell style={{ padding: '1.5rem 4rem' }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Typography variant="h6">Team Members</Typography>
              {teamMembers?.map((e) => (
                <Typography variant="p">- {e.email}</Typography>
              ))}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
}

export const CollapseTable = ({
  rows,
  columns,
  pagination = true,
  perPage = 10,
  loading = false,
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

  return (
    <Paper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <TableContainer>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                {columns?.map((e) => {
                  return (
                    <TableCell
                      width={'3rem'}
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
              {rows.length === 0 ? (
                <NoData />
              ) : (
                rows.map((row) => <Row key={row.name} row={row} />)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
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
    </Paper>
  );
};
