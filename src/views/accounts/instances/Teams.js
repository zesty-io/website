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

const CustomTable = ({ data, handleDeleteTeam, handleUpdataTeam }) => {
  const ROWS = data?.map((e) => {
    return {
      name: e.name || '-',
      description: e.description || '-',
      zuid: e.ZUID,
      action: (
        <Box display={'flex'}>
          <Button
            onClick={() => handleUpdataTeam(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteTeam(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Delete
          </Button>
        </Box>
      ),
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

const CustomForm = ({ onSubmit, data = {} }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.teams,
    initialValues: {
      name: data?.name,
    },
    onSubmit: async (values) => {
      const val = { ...values, ZUID: data.ZUID };
      await onSubmit(val);
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

const Main = ({
  updateTeam,
  setsearch,
  teams,
  createTeam,
  getAllTeams,
  deleteTeam,
}) => {
  const handleCreateTeam = async ({ name }) => {
    await createTeam(name);
    await getAllTeams();
  };

  const handleDeleteTeam = async ({ ZUID }) => {
    await deleteTeam(ZUID);
    await getAllTeams();
  };
  const handleEditTeam = async (data) => {
    await updateTeam(data);
    await getAllTeams();
  };

  const handleAddTeam = () => {
    MySwal.fire({
      title: 'Add Team',
      html: <CustomForm onSubmit={handleCreateTeam} />,
      showConfirmButton: false,
    });
  };
  const handleUpdataTeam = (data) => {
    MySwal.fire({
      title: 'Edit Team',
      html: <CustomForm onSubmit={handleEditTeam} data={data} />,
      showConfirmButton: false,
    });
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        onChange={(e) => setsearch(e.target.value)}
      />

      <Button color="primary" variant="contained" onClick={handleAddTeam}>
        Add Team
      </Button>
      <CustomTable
        data={teams}
        handleDeleteTeam={handleDeleteTeam}
        handleUpdataTeam={handleUpdataTeam}
      />
    </Box>
  );
};

export const Teams = React.memo(Main);
