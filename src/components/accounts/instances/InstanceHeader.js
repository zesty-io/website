import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { grey } from '@mui/material/colors';
import FillerContent from 'components/globals/FillerContent';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as helpers from 'utils';

dayjs.extend(relativeTime);

const Media = ({ loading = false, instance = {} }) => {
  if (loading && !instance.screenshotURL) {
    return (
      <Skeleton
        variant="rectangular"
        height={160}
        sx={{ borderRadius: '8px' }}
      />
    );
  } else if (!loading && instance.screenshotURL) {
    return (
      <CardMedia
        component="img"
        height="160px"
        width={1}
        image={instance?.screenshotURL}
        alt="screenshot"
        sx={{ borderRadius: '8px', border: `1px solid ${grey[200]}` }}
      />
    );
  } else {
    return (
      <CardMedia
        component="img"
        height="160px"
        image={FillerContent.image}
        alt="screenshot"
        sx={{ borderRadius: '8px', border: `1px solid ${grey[200]}` }}
      />
    );
  }
};

export default function InstanceHeader({ ZestyAPI, instance, loading }) {
  const [instanceName, setInstanceName] = useState(instance?.name);
  const [showEdit, setShowEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const webengineUrl = `https://${instance?.randomHashID}-dev.webengine.zesty.io`;
  const managerURl = `https://${instance?.ZUID}.manager${
    helpers?.isProd ? '' : '.dev'
  }.zesty.io/`;

  useEffect(() => {
    setInstanceName(instance?.name);
  }, [instance?.name]);

  return (
    <Card
      sx={{
        maxWidth: '100%',
        borderRadius: 0,
        boxShadow: 'none',
      }}
    >
      <Stack pt={1} pl={2} pr={2}>
        <Media instance={instance} loading={loading} />
      </Stack>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '16px',
        }}
      >
        {!loading ? (
          isEditing ? (
            <Stack spacing={1} direction="column" alignItems="center">
              <TextField
                value={instanceName}
                onChange={(e) => setInstanceName(e.target.value)}
              />
              <Stack direction="row">
                <IconButton
                  onClick={async () => {
                    const name = instanceName.trim();
                    await ZestyAPI.updateInstance(instance?.ZUID, {
                      name,
                    });
                    setIsEditing(false);
                    setShowEdit(false);
                    setInstanceName(name);
                  }}
                >
                  <CheckCircleIcon color="success" />
                </IconButton>
                <IconButton
                  onClick={async () => {
                    const response = await ZestyAPI.getInstance(instance?.ZUID);
                    setIsEditing(false);
                    setShowEdit(false);
                    setInstanceName(response?.data?.name);
                  }}
                >
                  <CancelIcon color="error" />
                </IconButton>
              </Stack>
            </Stack>
          ) : (
            <Typography
              variant="h5"
              color="text.primary"
              onMouseOver={() => setShowEdit(true)}
              onMouseLeave={() => setShowEdit(false)}
            >
              {instanceName}
              <IconButton
                sx={{ visibility: showEdit ? 'visible' : 'hidden' }}
                onClick={() => setIsEditing(true)}
              >
                <EditIcon />
              </IconButton>
            </Typography>
          )
        ) : (
          <Skeleton variant="rectangular" height={40} />
        )}
        {!loading ? (
          <Typography variant="body2" color="text.secondary">
            Last updated {dayjs(instance.updatedAt).fromNow()}
          </Typography>
        ) : (
          <Skeleton variant="text" height={30} />
        )}

        <Stack
          width={1}
          direction={'row'}
          sx={{
            pt: 1,
            pb: 2,
            borderBottom: `1px solid ${grey[200]}`,
          }}
        >
          <Stack direction={'row'} gap="8px">
            <Button
              color="primary"
              target="_blank"
              size="small"
              fullWidth
              variant="contained"
              title={managerURl}
              href={managerURl}
              startIcon={<CreateIcon sx={{ fontSize: '20px' }} />}
              sx={{
                whiteSpace: {
                  md: 'nowrap',
                },
              }}
            >
              Open Manager
            </Button>
            <Button
              size="small"
              variant="outlined"
              target="_blank"
              color="inherit"
              title={webengineUrl}
              href={webengineUrl}
              sx={{
                backgroundColor: '#fff',
                borderColor: grey[300],
                color: grey[500],
                minWidth: 38,
              }}
            >
              <VisibilityIcon />
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
