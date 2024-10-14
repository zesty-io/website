import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Checkbox } from '@mui/material';

import { ResourceSelector } from './ResourceSelector';
import { GranularRole } from 'store/types';
import { GridRenderCellParams } from '@mui/x-data-grid';

const DataGrid = dynamic(() =>
  import('@mui/x-data-grid').then((e) => e.DataGrid),
);

type TableProps = {
  granularRoles: GranularRole[];
};
export const Table = ({ granularRoles }: TableProps) => {
  const COLUMNS = useMemo(
    () => [
      {
        field: 'resourceZUID',
        headerName: 'Resource Name',
        width: 380,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <ResourceSelector
            initialValue={params.value}
            onChange={(zuid) =>
              // updateRuleData({
              //   resourceZUID: zuid,
              // })
              console.log(zuid)
            }
          />
        ),
      },
      {
        field: 'create',
        headerName: 'Create',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            checked={!!params.value}
            // onChange={(evt) => updateRuleData({ create: evt.target.checked })}
          />
        ),
      },
      {
        field: 'read',
        headerName: 'Read',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            checked={!!params.value}
            // onChange={(evt) => updateRuleData({ read: evt.target.checked })}
          />
        ),
      },
      {
        field: 'update',
        headerName: 'Update',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            checked={!!params.value}
            // onChange={(evt) => updateRuleData({ update: evt.target.checked })}
          />
        ),
      },
      {
        field: 'delete',
        headerName: 'Delete',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            checked={!!params.value}
            // onChange={(evt) => updateRuleData({ delete: evt.target.checked })}
          />
        ),
      },
      {
        field: 'publish',
        headerName: 'Publish',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            checked={!!params.value}
            // onChange={(evt) => updateRuleData({ publish: evt.target.checked })}
          />
        ),
      },
    ],
    [],
  );
  const rows = useMemo(() => {
    return granularRoles?.map((role, index) => {
      return {
        id: index,
        resourceZUID: role.resourceZUID,
        create: role.create,
        read: role.read,
        update: role.update,
        delete: role.delete,
        publish: role.publish,
      };
    });
  }, [granularRoles]);

  return (
    <DataGrid
      columns={COLUMNS}
      rows={rows}
      disableColumnMenu
      disableRowSelectionOnClick
      hideFooter
      sx={{
        '& .MuiDataGrid-columnHeaders': {
          borderBottom: 0,

          '&:hover .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
        },

        '& .MuiDataGrid-cell': {
          borderBottom: 0,

          '&:focus-within': {
            outline: 'none',
          },
        },

        '& .MuiDataGrid-columnHeader:focus-within': {
          outline: 'none',
        },
      }}
    />
  );
};
