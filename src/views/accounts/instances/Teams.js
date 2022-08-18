import { Box, Button, TextField } from '@mui/material';
import {
  accountsValidations,
  DeleteMsg,
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
    id: 'invite',
    label: 'Invite Team Member',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const CustomTable = ({
  data,
  handleDeleteTeamModal,
  handleUpdataTeamModal,
  handleCreateTeamInviteModal,
  isInstanceOwner,
}) => {
  const ROWS = data?.map((e) => {
    return {
      name: e.name || '-',
      description: e.description || '-',
      zuid: e.ZUID,
      invite: isInstanceOwner ? (
        <Box>
          <Button
            onClick={() => handleCreateTeamInviteModal(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="button"
          >
            Invite
          </Button>
        </Box>
      ) : (
        '-'
      ),
      action: isInstanceOwner ? (
        <Box display={'flex'}>
          <Button
            onClick={() => handleUpdataTeamModal(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteTeamModal(e)}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Delete
          </Button>
        </Box>
      ) : (
        '-'
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

const InviteForm = ({ onSubmit, data }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.invite,
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      const val = {
        inviteeEmail: values.email,
        admin: false,
        teamZUID: data.ZUID,
      };
      console.log(val);
      await onSubmit(val);
      formik.resetForm();
    },
  });

  return (
    <Box>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'email'} formik={formik} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

const CustomForm = ({ onSubmit, data = {} }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.teams,
    initialValues: {
      name: data?.name,
      description: data?.description,
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
        <FormInput name={'description'} formik={formik} />
        <Button
          disabled={formik.isSubmitting}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
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
  createTeamInvite,
  isInstanceOwner,
}) => {
  const handleCreateTeam = async (data) => {
    await createTeam(data);
    await getAllTeams();
  };

  const handleDeleteTeamModal = async ({ ZUID }) => {
    const action = async () => {
      await deleteTeam(ZUID);
    };
    DeleteMsg({ action });
    await getAllTeams();
  };
  const handleEditTeam = async (data) => {
    await updateTeam(data);
    await getAllTeams();
  };

  const handlerCreateTeamInvite = async (data) => {
    await createTeamInvite(data);
    await getAllTeams();
  };
  const handleAddTeamModal = () => {
    MySwal.fire({
      title: 'Add Team',
      html: <CustomForm onSubmit={handleCreateTeam} />,
      showConfirmButton: false,
    });
  };
  const handleUpdataTeamModal = (data) => {
    MySwal.fire({
      title: 'Edit Team',
      html: <CustomForm onSubmit={handleEditTeam} data={data} />,
      showConfirmButton: false,
    });
  };
  const handleCreateTeamInviteModal = (data) => {
    MySwal.fire({
      title: 'Invite Team',
      html: <InviteForm onSubmit={handlerCreateTeamInvite} data={data} />,
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

      {isInstanceOwner && (
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddTeamModal}
        >
          Add Team
        </Button>
      )}
      <CustomTable
        data={teams}
        handleDeleteTeamModal={handleDeleteTeamModal}
        handleUpdataTeamModal={handleUpdataTeamModal}
        handleCreateTeamInviteModal={handleCreateTeamInviteModal}
        isInstanceOwner={isInstanceOwner}
      />
    </Box>
  );
};

export const Teams = React.memo(Main);
