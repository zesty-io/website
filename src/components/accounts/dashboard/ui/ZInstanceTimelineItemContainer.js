import React, { useState } from 'react';
import ZTimelineItem from './ZTimelineItem';
import { Button, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { useZestyStore } from 'store';
import { InView } from 'react-intersection-observer';
import { grey } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';
import EditIcon from '@mui/icons-material/Edit';
import StorageIcon from '@mui/icons-material/Storage';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import dayjs from 'dayjs';

const ZInstanceTimelineItemContainer = ({
  audit,
  isInstanceAuditLoading,
  showEditInstance = true,
}) => {
  const [isFetchingMsg, setIsFetchingMsg] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const { ZestyAPI } = useZestyStore((state) => state);

  const getResourceGroup = (uri) => {
    if (uri?.includes('publishings')) {
      return 'Publishings';
    } else if (uri?.includes('items')) {
      return 'Items';
    } else if (uri?.includes('fields')) {
      return 'Fields';
    } else if (uri?.includes('settings')) {
      return 'Settings';
    } else if (uri?.includes('models')) {
      return 'Models';
    }
    return '';
  };

  const getIcon = (uri) => {
    /* if the uri has 
        items = edit icon
        settings = cog icon
        views or scripts or stylesheets = code icon
        models = schema icon
    */

    if (uri === undefined) {
      return <BorderColorIcon color="primary" />;
    } else if (uri.includes('items')) {
      return <EditIcon color="primary" />;
    } else if (uri.includes('settings')) {
      return <SettingsIcon color="primary" />;
    } else if (
      uri.includes('views') ||
      uri.includes('scripts') ||
      uri.includes('stylesheets') ||
      uri.includes('web')
    ) {
      return <CodeIcon color="primary" />;
    } else if (uri.includes('models')) {
      return <StorageIcon color="primary" />;
    } else {
      return <BorderColorIcon color="primary" />;
    }
  };

  const getData = async (audit) => {
    setIsFetchingMsg(true);
    setNewMessage('');

    let newMessage = '';
    let auditMessage = audit?.meta?.message;
    if (
      auditMessage.includes('Modified Item') &&
      auditMessage.includes('ContentModel')
    ) {
      const itemZUIDName = await ZestyAPI.customInstancesGet(
        audit?.meta?.uri,
        audit?.entityZUID,
      );

      const contentZUIDName = await ZestyAPI.customInstancesGet(
        audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items')),
        audit?.entityZUID,
      );

      const message = auditMessage.split('`');
      const itemZUID = message[1];
      const contentZUID = message[3];
      newMessage = auditMessage
        .replace(itemZUID, itemZUIDName?.data?.web?.metaTitle)
        .replace(contentZUID, contentZUIDName?.data?.label);
    } else if (
      auditMessage.includes('Added Item') &&
      auditMessage.includes('ContentModel')
    ) {
      const message = auditMessage.split('`');
      const itemZUID = message[1];
      const contentZUID = message[3];

      const itemZUIDName = await ZestyAPI.customInstancesGet(
        audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items') + 7) +
          `/${itemZUID}`,
        audit?.entityZUID,
      );

      const contentZUIDName = await ZestyAPI.customInstancesGet(
        audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items')),
        audit?.entityZUID,
      );

      newMessage = auditMessage
        .replace(
          itemZUID,
          itemZUIDName?.data?.web?.metaTitle || itemZUIDName?.data?.data?.title,
        )
        .replace(contentZUID, contentZUIDName?.data?.label);
    } else if (auditMessage.includes('Modified EnvSetting')) {
      const response = await ZestyAPI.customInstancesGet(
        audit?.meta?.uri,
        audit?.entityZUID,
      );

      const message = auditMessage.split('`');
      const envZUID = message[1];
      newMessage = auditMessage.replace(envZUID, response?.data?.keyFriendly);
    } else if (auditMessage.includes('Published Item')) {
      const response = await ZestyAPI.customInstancesGet(
        audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items')),
        audit?.entityZUID,
      );

      const message = auditMessage.split('`');
      const envZUID = message[1];
      newMessage = auditMessage.replace(envZUID, response?.data?.label);
    } else {
      newMessage = auditMessage;
    }

    setIsFetchingMsg(false);

    setNewMessage(
      newMessage +
        `${audit.totalActions > 1 ? ` (Actions ${audit.totalActions})` : ''} `,
    );

    return newMessage;
  };

  return (
    <InView
      triggerOnce
      onChange={(inView, entry) => {
        if (inView) {
          getData(audit);
        }
      }}
    >
      {({ inView, ref, entry }) => (
        <Stack ref={ref}>
          <ZTimelineItem
            sx={{
              '::before': {
                content: 'none',
              },
              mt: 1,
            }}
            title={`${dayjs(audit?.updatedAt).fromNow()}`}
            timelineImage={audit?.screenshotURL}
            isLoading={isInstanceAuditLoading}
          >
            <Stack
              sx={{ border: `1px solid ${grey[400]}`, p: 2 }}
              component={Paper}
              elevation={0}
              direction={{ xs: 'column', lg: 'row' }}
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Stack>{getIcon(audit?.meta?.uri)}</Stack>
                <Stack>
                  <Typography>
                    <Typography component="span" color="primary">
                      {audit?.entityName}
                    </Typography>{' '}
                    {newMessage || audit?.meta?.message}
                  </Typography>

                  {isFetchingMsg ? (
                    <Skeleton width="100%" />
                  ) : (
                    <Stack sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="caption">
                        {getResourceGroup(audit?.meta?.uri)
                          ? `In ${getResourceGroup(audit?.meta?.uri)} by `
                          : 'by '}
                        <Typography
                          component="span"
                          variant="caption"
                          color="primary"
                        >{`${audit?.firstName} ${audit?.lastName}`}</Typography>
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                mt={{ xs: 1 }}
                ml={{ xs: 5, lg: 0 }}
              >
                {audit?.meta?.url && (
                  <Button
                    href={audit?.meta?.url}
                    target="_blank"
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{
                      whiteSpace: {
                        md: 'nowrap',
                      },
                    }}
                  >
                    Open Resource
                  </Button>
                )}

                {showEditInstance && (
                  <Button
                    href={`/instances/${audit?.entityZUID}`}
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{
                      whiteSpace: {
                        md: 'nowrap',
                      },
                    }}
                  >
                    Edit Instance
                  </Button>
                )}
              </Stack>
            </Stack>
          </ZTimelineItem>
        </Stack>
      )}
    </InView>
  );
};

export default ZInstanceTimelineItemContainer;
