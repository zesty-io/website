import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Skeleton } from '@mui/material';

const LoadingSkeleton = () => (
  <Box
    sx={{
      height: 'max-content',
    }}
  >
    {[...Array(5)].map((_) => (
      <Skeleton variant="rectangular" sx={{ my: 2, mx: 1, height: '2rem' }} />
    ))}
  </Box>
);

export default function CustomDataGrid({
  columns,
  rows,
  isLoading,
  pageSize,
  headerBGColor = `white`,
  headerTextColor = 'text.primary',
  striped = true,
  hideSeparator = true,
}) {
  return (
    <Box sx={{ height: pageSize * 75, width: '100%' }}>
      <DataGrid
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: hideSeparator ? 'none' : '',
          },
          '&.MuiDataGrid-root': {
            border: hideSeparator ? 'none' : '',
          },
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: headerBGColor,
            color: headerTextColor,
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bolder',
            },
          },
          ' .MuiDataGrid-row:nth-child(even)': {
            bgcolor: striped ? 'grey.100' : '',
          },
        }}
        autoHeight={isLoading ? false : true}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: false }}
        components={{
          LoadingOverlay: LoadingSkeleton,
        }}
        loading={isLoading}
        disableColumnMenu
      />
    </Box>
  );
}
