import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Settings } from 'views/accounts/instances';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { downloadTemplate } from 'utils/LaunchApp';
import DownloadIcon from '@mui/icons-material/Download';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

const DownloadCard = ({ token, instance_zuid }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Export as template
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => downloadTemplate(instance_zuid, token)}
        >
          <DownloadIcon fontSize="small" sx={{ mr: 1 }} /> Download
        </Button>
      </CardActions>
    </Card>
  );
};
export default function SettingsPage() {
  const [loading, setloading] = React.useState(false);
  const [settings, setsettings] = React.useState([]);
  const { ZestyAPI, userAppSID } = useZestyStore((state) => state);
  const router = useRouter();
  const { zuid } = router.query;

  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    console.log(res);
  };

  const handleGetSettingSuccess = (res) => {
    setsettings(res.data);
  };
  const handleGetSettingError = (err) => {
    console.log(err);
  };
  const handleSingleSettingUpdateSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Settings Updated' });
  };
  const handleSingleSettingUpdateError = (err) => {
    console.log(err);
    ErrorMsg({ title: err.error });
  };
  const getSettings = async () => {
    const res = await ZestyAPI.getSettings();
    !res.error && handleGetSettingSuccess(res);
    res.error && handleGetSettingError(res);
  };
  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    console.log(res);
  };

  const singleSettingsUpdate = async (e) => {
    const res = await ZestyAPI.updateSetting(e.ZUID, e);
    !res.error && handleSingleSettingUpdateSuccess(res);
    res.error && handleSingleSettingUpdateError(res);
  };

  const getPageData = async () => {
    await setloading(true);
    await Promise.all([getUsers(), getInstanceUserRoles(), getSettings()]);
    await setloading(false);
  };
  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return (
    <>
      <Settings
        loading={loading}
        settings={settings}
        singleSettingsUpdate={singleSettingsUpdate}
      />
      {settings.length !== 0 && (
        <DownloadCard token={userAppSID} instance_zuid={zuid} />
      )}
    </>
  );
}

SettingsPage.data = {
  container: 'InstanceContainer',
};
