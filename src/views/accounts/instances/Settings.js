import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { LoadingButton } from '@mui/lab';

import {
  AccountSelect,
  AccountsHeader,
  AccountsInput,
  AccountsTable,
  AccountsTableHead,
  AccountsTextArea,
  AccountTextfield,
  ColorToggleButton,
  SettingsSelect,
} from 'components/accounts';
import * as helper from 'utils';
import SaveIcon from '@mui/icons-material/Save';

const OPTIONS = (options, separator) => {
  const res = options?.split(separator).map((e) => {
    return { value: e, label: e };
  });
  return res;
};

const ActionSwitcher = React.memo(({ data, setarrToSubmit, arrToSubmit }) => {
  const { dataType, options, value } = data;

  const handleAdd = React.useCallback(
    (value) => {
      data['value'] = value;
      setarrToSubmit([...arrToSubmit, data]);
    },
    [data, value, arrToSubmit],
  );

  const selectOptions = OPTIONS(options, ';')?.map((e) => {
    const value = e.value.split(':')[0];
    const label = e.label.split(':')[1];
    return { value, label };
  });

  switch (dataType) {
    case 'checkbox':
      return (
        <ColorToggleButton
          value={value}
          options={OPTIONS(options, ',')}
          handleAdd={handleAdd}
        />
      );
    case 'text':
      return (
        <AccountTextfield
          name={data?.keyFriendly}
          value={value}
          handleAdd={handleAdd}
        />
      );
    case 'dropdown':
      return (
        <SettingsSelect
          value={value}
          name={data?.keyFriendly}
          options={selectOptions}
          handleAdd={handleAdd}
        />
      );
    case 'textarea':
      return (
        <AccountsTextArea
          name={data?.keyFriendly}
          value={value}
          handleAdd={handleAdd}
        />
      );

    default:
      return (
        <SettingsSelect options={OPTIONS(options, ',')} handleAdd={handleAdd} />
      );
  }
});

const CustomTable = ({
  data,
  arrToSubmit,
  setarrToSubmit,
  loading,
  singleSettingsUpdate,
}) => {
  const handleClick = (data) => {
    const res = arrToSubmit.findLast((e) => e.ZUID === data.ZUID);
    singleSettingsUpdate(res);
    setarrToSubmit(arrToSubmit.filter((e) => e.ZUID !== data.ZUID));
  };

  const ROWS = data?.map((e) => {
    return {
      ...e,
      id: e.ID,
    };
  });

  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 400,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.keyFriendly,
      renderHeader: () => <AccountsTableHead>Name</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography title={params.row.keyFriendly} variant="body2">
            {params.row.keyFriendly}
          </Typography>
        );
      },
    },
    {
      field: 'category',
      headerName: 'Category',
      minWidth: 150,
      editable: false,
      sortable: true,
      valueGetter: (params) => params.row.category,
      renderHeader: () => <AccountsTableHead>Category</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography
            title={params.row.category}
            variant="body2"
            textTransform={'capitalize'}
          >
            {params?.row?.category?.replace('-', ' ').replace('_', ' ')}
          </Typography>
        );
      },
    },
    {
      field: 'tips',
      headerName: 'Description',
      minWidth: 400,
      editable: false,
      sortable: false,
      flex: 1,
      renderHeader: () => <AccountsTableHead>Description</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant="body2"
            textTransform={'capitalize'}
            title={params.row.tips}
          >
            {params?.row?.tips || '-'}
          </Typography>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      minWidth: 350,
      editable: false,
      sortable: false,
      renderHeader: () => <AccountsTableHead>Action</AccountsTableHead>,
      renderCell: (params) => {
        const e = params.row;

        const isDataChange = helper
          .removeDupsInArrObj(arrToSubmit, 'keyFriendly')
          .find((x) => x.ZUID === e.ZUID);

        return (
          <Stack gap={2} direction="row" alignItems={'center'}>
            <ActionSwitcher
              data={e}
              arrToSubmit={arrToSubmit}
              setarrToSubmit={setarrToSubmit}
            />

            <Stack>
              <Button
                onClick={() => handleClick(e)}
                variant="contained"
                color="primary"
                size="small"
                sx={{ visibility: isDataChange ? 'visible' : 'hidden' }}
              >
                <SaveIcon fontSize="small" sx={{ marginRight: '.3rem' }} />
                <Typography variant="body2">Save</Typography>
              </Button>
            </Stack>
          </Stack>
        );
      },
    },
  ];

  const rows = React.useMemo(() => ROWS, [data, loading]);
  const columns = React.useMemo(() => COLUMNS, [data, loading]);

  return (
    <Stack p={4}>
      <AccountsTable
        loading={loading}
        rows={rows}
        columns={columns}
        pageSize={100}
        autoHeight={false}
      />
    </Stack>
  );
};

export const Settings = ({
  settings = [],
  singleSettingsUpdate,
  loading,
  downloadTemplate,
  instance_zuid,
  token,
}) => {
  const [loadingDL, setloadingDL] = React.useState(false);
  const [arrToSubmit, setarrToSubmit] = React.useState([]);
  const [search, setsearch] = React.useState('');
  const [categories, setcategories] = React.useState('');

  const data = settings?.filter((e) => {
    if (!categories && search) {
      return e.keyFriendly.toLowerCase().includes(search.toLowerCase());
    } else if (search || categories) {
      return (
        e.keyFriendly.toLowerCase().includes(search.toLowerCase()) &&
        e.category === categories
      );
    } else {
      return settings;
    }
  });

  const dropdownList = helper.generateUniqDropdown({
    data: settings,
    property: 'category',
  });

  const handleOnchange = (data) => {
    setcategories(data.value);
  };
  const headerProps = {
    title: 'Settings',
    description: `Manage your Settings`,
  };

  return (
    <Grid container>
      <AccountsHeader {...headerProps}>
        <Stack>
          <AccountsInput
            search={search}
            setsearch={setsearch}
            placeholder=" Search settings"
          />
        </Stack>

        <Stack>
          <AccountSelect
            options={dropdownList}
            onChange={handleOnchange}
            value={categories}
            width={200}
          />
        </Stack>

        <LoadingButton
          loading={loadingDL}
          color="primary"
          variant="contained"
          onClick={() => downloadTemplate(instance_zuid, token, setloadingDL)}
          startIcon={<DownloadIcon />}
        >
          Export as Template
        </LoadingButton>
      </AccountsHeader>
      <Grid item xs={12}>
        <CustomTable
          loading={loading}
          data={data}
          arrToSubmit={arrToSubmit}
          setarrToSubmit={setarrToSubmit}
          singleSettingsUpdate={singleSettingsUpdate}
        />
      </Grid>
    </Grid>
  );
};
