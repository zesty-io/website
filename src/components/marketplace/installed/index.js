import React from 'react';
import { getCookie } from 'cookies-next';
import BasicTable from './table';
import { Box, CircularProgress, Typography } from '@mui/material';
import TransitionsModal from 'components/modal/modal';

const customContainer = {
  display: 'flex',
  width: '100%',
  margin: '0 auto',
  justifyItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minHeight: '50vh',
};
const index = () => {
  const [modal, setmodal] = React.useState(false);
  const [error, seterror] = React.useState('');
  const [success, setsucces] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const [installedApps, setinstalledApps] = React.useState([]);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getCookie('APP_SID');

  const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);
  const getInstalledAppSuccess = (res) => {
    setloading(false);
    setinstalledApps(res);
  };
  const getInstalledAppError = (error) => {
    setloading(false);
  };

  const deleteAppSucc = (data) => {
    setloading(false);
    setmodal(true);
    setsucces('App Successfully Deleted');
  };
  const deleteAppErorr = (error) => {
    setloading(false);
    setmodal(true);
    seterror(error);
  };

  const getAllInstalledApps = async () => {
    setloading(true);
    const res = await ZestyAPI.getAllInstalledApps(instanceZUID);
    !res.message && getInstalledAppSuccess(res.data);
    res.message && getInstalledAppError(res);
  };

  const clear = () => {
    seterror('');
    // setloading(false);
    setsucces('');
  };

  React.useEffect(() => {
    if (instanceZUID) {
      getAllInstalledApps(instanceZUID);
    }
  }, [instanceZUID]);

  const handleDelete = async (data) => {
    setloading(true);
    const res = await ZestyAPI.deleteInstalledApp(data.instanceZUID, data.ZUID);
    !res.message && deleteAppSucc(res.data);
    res.message && deleteAppErorr(res.message);
  };
  if (loading) {
    return (
      <Box sx={customContainer}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  if (!instanceZUID) {
    return (
      <Box sx={customContainer}>
        <Typography sx={{ fontSize: '2rem' }}>
          Please Select an Instance to Continue
        </Typography>
      </Box>
    );
  }
  if (installedApps.length === 0) {
    return (
      <Box sx={customContainer}>
        <Typography sx={{ fontSize: '2rem' }}>No Data</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Box sx={customContainer}>
        <BasicTable data={installedApps} deleteData={handleDelete} />
      </Box>

      <TransitionsModal
        title={success ? 'Success' : 'Error'}
        message={success || error}
        open={modal}
        setOpen={setmodal}
        clear={clear}
        handleOk={getAllInstalledApps}
      />
    </Box>
  );
};

export default index;
