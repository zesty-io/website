import { Box, Button, Link, Typography } from '@mui/material';
import {
  accountsValidations,
  BaseRolesTable,
  CollapseTable,
  DeleteBtn,
  DeleteMsg,
  FormSelect,
  SubmitBtn,
} from 'components/accounts';
import { ComboBox } from 'components/globals/ComboBox';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const COLUMNS = [
  {
    id: 'btn',
    label: '',
  },
  {
    id: 'name',
    label: 'Team Name',
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

const CustomTable = ({
  loading,
  data,
  handleDeleteTeamModal,
  isInstanceOwner,
  instanceUserWithRoles,
}) => {
  const ROWS = data?.map((e) => {
    return {
      name: e.name || '-',
      description: e.description || '-',
      zuid: e.ZUID,
      action: isInstanceOwner ? (
        <Box display={'flex'}>
          <DeleteBtn onClick={() => handleDeleteTeamModal(e)}>Delete</DeleteBtn>
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
      <CollapseTable
        instanceUserWithRoles={instanceUserWithRoles}
        loading={loading}
        rows={ROWS}
        columns={COLUMNS}
      />
    </Box>
  );
};

const CustomForm = ({ onSubmit, options = [], allTeams = [] }) => {
  const [teamZUID, setteamZUID] = React.useState('');
  const formik = useFormik({
    validationSchema: accountsValidations.teams,
    initialValues: {
      roleZUID: '',
    },
    onSubmit: async (values) => {
      const newVal = { ...values, teamZUID };
      await onSubmit(newVal);
      formik.resetForm();
    },
  });

  const newOptions = options?.map((e) => {
    return { ...e, value: e.ZUID };
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Box paddingBottom={1}>
          <ComboBox
            initialLabel={'Select Teams'}
            width={1}
            instances={allTeams}
            setCookies={setteamZUID}
            instanceZUID={''}
            size="medium"
          />
        </Box>
        <FormSelect
          label="Role ZUID"
          name={'roleZUID'}
          formik={formik}
          options={newOptions}
        />
        <SubmitBtn
          loading={formik.isSubmitting}
          disabled={!teamZUID || formik.isSubmitting}
        >
          Submit
        </SubmitBtn>
      </form>
    </Box>
  );
};

const Main = ({
  teams,
  getAllInstancesTeams,
  deleteTeamToInstance,
  isInstanceOwner,
  addTeamToInstance,
  instanceRoles,
  loading,
  allTeams,
  instanceUserWithRoles,
}) => {
  const handleAddTeamToInstance = async (data) => {
    await addTeamToInstance(data);
    await getAllInstancesTeams();
  };

  const handleDeleteTeamModal = async ({ ZUID }) => {
    const action = async () => {
      await deleteTeamToInstance(ZUID);
    };
    DeleteMsg({ title: 'Delete this team?', action });
    await getAllInstancesTeams();
  };

  const handleAddTeamModal = () => {
    MySwal.fire({
      title: 'Add Team to Instance',
      html: (
        <CustomForm
          onSubmit={handleAddTeamToInstance}
          options={instanceRoles}
          allTeams={allTeams}
        />
      ),
      showConfirmButton: false,
    });
  };

  return (
    <Box>
      <Typography variant="p" fontSize={'medium'}>
        By providing a team access you can allow an external group of users
        access to manage your instance. For example: this can be used to provide
        an agency with access to manage your website.{' '}
        <Link href="/teams">Learn more about teams</Link>
      </Typography>
      <Box paddingY={2} display={'flex'} justifyContent={'space-between'}>
        {isInstanceOwner && (
          <Button
            color="secondary"
            variant="contained"
            onClick={handleAddTeamModal}
          >
            Add Team to Instance
          </Button>
        )}
      </Box>
      <CustomTable
        instanceUserWithRoles={instanceUserWithRoles}
        loading={loading}
        data={teams}
        handleDeleteTeamModal={handleDeleteTeamModal}
        isInstanceOwner={isInstanceOwner}
      />
      <BaseRolesTable />
    </Box>
  );
};

export const Teams = React.memo(Main);
