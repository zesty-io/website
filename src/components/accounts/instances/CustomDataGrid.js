import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { lighten, Skeleton } from '@mui/material';
import { useTheme } from '@emotion/react';

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
  headerBGColor = `${lighten(useTheme().palette.secondary.light, 0.9)}`,
  headerTextColor = 'secondary.main',
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
