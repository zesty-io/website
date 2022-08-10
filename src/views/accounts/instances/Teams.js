import { Box, Button, TextField } from '@mui/material';
import {
  accountsValidations,
  FormInput,
  StickyTable,
} from 'components/accounts';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const COLUMNS = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'zuid',
    label: 'Zuid',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const CustomTable = ({ data }) => {
  const ROWS = data?.map((e) => {
    return {
      name: e.name || '-',
      description: e.description || '-',
      zuid: e.ZUID,
      action: '-',
    };
  });

  // const memoizeRows = React.useMemo(() => ROWS, [data]);
  // const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <StickyTable rows={ROWS} columns={COLUMNS} />
    </Box>
  );
};

const CustomForm = ({ handleCreateTeam }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.teams,
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      await handleCreateTeam(values);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'name'} formik={formik} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

const Index = ({ setsearch, teams, createTeam, getAllTeams }) => {
  const handleCreateTeam = async ({ name }) => {
    await createTeam(name);
    await getAllTeams();
  };

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        onChange={(e) => setsearch(e.target.value)}
      />

      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          MySwal.fire({
            title: 'Add Team',
            html: <CustomForm handleCreateTeam={handleCreateTeam} />,
            showConfirmButton: false,
          });
        }}
      >
        Add Team
      </Button>
      <CustomTable data={teams} />
    </Box>
  );
};

export const Teams = React.memo(Index);
