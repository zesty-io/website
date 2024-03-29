import * as React from 'react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { Stack, Typography } from '@mui/material';

import dynamic from 'next/dynamic';

const DataGrid = dynamic(() =>
  import('@mui/x-data-grid').then((e) => e.DataGrid),
);

const GridToolbar = dynamic(() =>
  import('@mui/x-data-grid').then((e) => e.GridToolbar),
);
// const NoResultsOverlay = () => {
//   return (
//     <Stack height="100%" alignItems="center" justifyContent="center">
//       <Typography variant="h5">No results</Typography>
//     </Stack>
//   );
// };

const NoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="h5">No results</Typography>
    </Stack>
  );
};

const Index = ({
  rows,
  columns,
  pageSize = 5,
  loading,
  hideFooter = true,
  autoHeight = true,
  rowHeight = 70,
  NoData = NoRowsOverlay,
  showTable = true,
  hasGridToolbar = false,
}) => {
  return (
    <Box
      display={showTable ? 'block' : 'none'}
      sx={{
        height: autoHeight ? 'auto' : 600,
        width: '100%',
        border: `1px solid ${grey[200]}`,
        borderRadius: '5px',
      }}
    >
      <DataGrid
        autoHeight={autoHeight}
        sx={(theme) => ({
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: theme.palette.mode === 'dark' ? 'transparent' : grey[50],
          },
          '.MuiDataGrid-columnSeparator': {
            display: true ? 'none' : '',
          },
          '&.MuiDataGrid-root': {
            border: true ? 'none' : '',
          },
          '&.MuiDataGrid-root  .MuiDataGrid-cell   ,&.MuiDataGrid-root .MuiDataGrid-columnHeader,':
            {
              outline: 'none',
            },
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },

          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
            background: grey[300],
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
            backgroundColor: grey[500],
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
            background: grey[500],
          },
        })}
        rowHeight={rowHeight}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 30, 50]}
        // checkboxSelection
        pagination={<></>}
        loading={loading}
        disableSelectionOnClick
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
        hideFooter={hideFooter}
        disableColumnSelector
        disableDensitySelector
        components={{
          NoRowsOverlay: NoData,
          Toolbar: hasGridToolbar && GridToolbar,
        }}
        // sortModel={sortModel}
        componentsProps={{
          toolbar: {
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
      />
    </Box>
  );
};

export const AccountsTable = React.memo(Index);
