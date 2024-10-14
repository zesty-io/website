import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Checkbox } from '@mui/material';

import { ResourceSelector } from './ResourceSelector';
import { GranularRole } from 'store/types';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { NewGranularRole } from './index';

const DataGrid = dynamic(() =>
  import('@mui/x-data-grid').then((e) => e.DataGrid),
);

type TableProps = {
  granularRoles: GranularRole[];
  onDataChange: (roleData: NewGranularRole) => void;
};
export const Table = ({ granularRoles, onDataChange }: TableProps) => {
  const COLUMNS = useMemo(
    () => [
      {
        field: 'resourceZUID',
        headerName: 'Resource Name',
        width: 380,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
          console.log(params);
          return (
            <ResourceSelector
              initialValue={params.value}
              onChange={(zuid) =>
                onDataChange({
                  ...params.row,
                  resourceZUID: zuid,
                })
              }
            />
          );
        },
      },
      {
        field: 'create',
        headerName: 'Create',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            defaultChecked={!!params.value}
            onChange={(evt) =>
              onDataChange({ ...params.row, create: evt.target.checked })
            }
          />
        ),
      },
      {
        field: 'read',
        headerName: 'Read',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            defaultChecked={!!params.value}
            onChange={(evt) =>
              onDataChange({ ...params.row, read: evt.target.checked })
            }
          />
        ),
      },
      {
        field: 'update',
        headerName: 'Update',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            defaultChecked={!!params.value}
            onChange={(evt) =>
              onDataChange({ ...params.row, update: evt.target.checked })
            }
          />
        ),
      },
      {
        field: 'delete',
        headerName: 'Delete',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            defaultChecked={!!params.value}
            onChange={(evt) =>
              onDataChange({ ...params.row, delete: evt.target.checked })
            }
          />
        ),
      },
      {
        field: 'publish',
        headerName: 'Publish',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            defaultChecked={!!params.value}
            onChange={(evt) =>
              onDataChange({ ...params.row, publish: evt.target.checked })
            }
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
