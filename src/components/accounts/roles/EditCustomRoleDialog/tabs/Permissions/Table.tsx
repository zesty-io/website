import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Checkbox, Typography, IconButton, Tooltip } from '@mui/material';
import { Database } from '@zesty-io/material';
import { EditRounded, InfoRounded, DeleteRounded } from '@mui/icons-material';

import { GranularRole } from 'store/types';
import { GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import { UpdateGranularRole } from './index';
import { useInstance } from 'store/instance';

const DataGrid = dynamic(() =>
  import('@mui/x-data-grid').then((e) => e.DataGrid),
);

type TableProps = {
  granularRoles: Partial<GranularRole>[];
  onDataChange: (roleData: UpdateGranularRole) => void;
  onDelete: (resourceZUID: string) => void;
};
export const Table = ({
  granularRoles,
  onDataChange,
  onDelete,
}: TableProps) => {
  const { instanceModels, instanceContentItems, languages } = useInstance(
    (state) => state,
  );

  const resolveResourceZUID = (zuid: string) => {
    if (zuid?.startsWith('6-')) {
      return (
        instanceModels?.find((model) => model.ZUID === zuid)?.label || zuid
      );
    } else if (zuid?.startsWith('7-')) {
      const contentItem = instanceContentItems?.find(
        (item) => item.meta.ZUID === zuid,
      );
      const name = contentItem?.web?.metaTitle || zuid;
      const langCode = languages?.find(
        (lang) => lang.ID === contentItem?.meta?.langID,
      )?.code;

      return langCode ? `(${langCode}) ${name}` : name;
    } else {
      return zuid;
    }
  };

  const COLUMNS = useMemo(
    () => [
      {
        field: 'resourceZUID',
        headerName: 'Resource Name',
        width: 300,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => (
          <>
            {params.value?.startsWith('6-') ? (
              <Database fontSize="small" color="action" />
            ) : (
              <EditRounded fontSize="small" color="action" />
            )}
            <Typography variant="body2" pl={1.5} fontWeight={600}>
              {resolveResourceZUID(params.value)}
            </Typography>
          </>
        ),
      },
      {
        field: 'create',
        headerName: 'Create',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <Checkbox
            defaultChecked={!!params.value}
            onChange={(evt) =>
              onDataChange({
                resourceZUID: params.row?.resourceZUID,
                create: evt.target.checked,
              })
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
              onDataChange({
                resourceZUID: params.row?.resourceZUID,
                read: evt.target.checked,
              })
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
              onDataChange({
                resourceZUID: params.row?.resourceZUID,
                update: evt.target.checked,
              })
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
              onDataChange({
                resourceZUID: params.row?.resourceZUID,
                delete: evt.target.checked,
              })
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
              onDataChange({
                resourceZUID: params.row?.resourceZUID,
                publish: evt.target.checked,
              })
            }
          />
        ),
      },
      {
        field: 'actions',
        headerName: '',
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
          const title = `Name: ${resolveResourceZUID(params.value)} \n ${
            params.value?.startsWith('6-')
              ? 'Model'
              : !!params.value?.startsWith('7-')
              ? 'Item'
              : ''
          } ZUID: ${params.value}`;

          return (
            <>
              <Tooltip
                placement="right"
                title={title}
                disableInteractive
                slotProps={{
                  tooltip: {
                    sx: {
                      whiteSpace: 'pre-line',
                    },
                  },
                }}
              >
                <InfoRounded color="action" fontSize="small" />
              </Tooltip>
              <IconButton
                size="small"
                sx={{ ml: 2 }}
                onClick={() => onDelete(params.value)}
              >
                <DeleteRounded fontSize="small" />
              </IconButton>
            </>
          );
        },
      },
    ],
    [instanceModels, instanceContentItems],
  );
  const rows = granularRoles?.map((role) => {
    return {
      id: role.resourceZUID,
      resourceZUID: role.resourceZUID,
      create: role.create,
      read: role.read,
      update: role.update,
      delete: role.delete,
      publish: role.publish,
      actions: role.resourceZUID,
    };
  });

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
          '&:focus-within': {
            outline: 'none',
          },
        },

        '& .MuiDataGrid-columnHeader:focus-within': {
          outline: 'none',
        },

        '& .MuiDataGrid-row': {
          bgcolor: 'background.paper',
        },
      }}
    />
  );
};
