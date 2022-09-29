import { Timeline } from '@mui/lab';
import {
  Alert,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import ZInstanceItem from './ui/ZInstanceItem';
import ZMyCard from './ui/ZMyCard';
import ZTimelineItem from './ui/ZTimelineItem';
import * as helpers from 'utils';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';
import EditIcon from '@mui/icons-material/Edit';
import StorageIcon from '@mui/icons-material/Storage';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const INSTANCE_LIMIT = 3;

const MainContent = ({
  instances,
  isInstancesLoading,
  toggleFavorites,
  instancesFavorites,
  marketingCards,
  isTogglingFavorites,
}) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const { ZestyAPI } = useZestyStore((state) => state);
  const [instanceAudit, setInstanceAudit] = useState([]);
  const [isInstanceAuditLoading, setIsInstanceAuditLoading] = useState(false);

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
      uri.includes('stylesheets')
    ) {
      return <CodeIcon color="primary" />;
    } else if (uri.includes('models')) {
      return <StorageIcon color="primary" />;
    } else {
      return <BorderColorIcon color="primary" />;
    }
  };

  const setResponseToAuditState = async (zuid, limit = 10) => {
    const response = await ZestyAPI.getInstanceAuditInitZUID(limit, zuid);

    if (!response?.error) {
      const instanceAuditData = await Promise.all(
        [...response?.data].map(async (audit) => {
          let newMessage = '';
          let auditMessage = audit?.meta?.message;
          if (
            auditMessage.includes('Modified Item') &&
            auditMessage.includes('ContentModel')
          ) {
            const itemZUIDName = await ZestyAPI.appendURI(
              audit?.meta?.uri,
              audit?.entityZUID,
            );

            const contentZUIDName = await ZestyAPI.appendURI(
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

            const itemZUIDName = await ZestyAPI.appendURI(
              audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items') + 7) +
                `/${itemZUID}`,
              audit?.entityZUID,
            );

            const contentZUIDName = await ZestyAPI.appendURI(
              audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items')),
              audit?.entityZUID,
            );

            newMessage = auditMessage
              .replace(
                itemZUID,
                itemZUIDName?.data?.web?.metaTitle ||
                  itemZUIDName?.data?.data?.title,
              )
              .replace(contentZUID, contentZUIDName?.data?.label);
          } else if (auditMessage.includes('Modified EnvSetting')) {
            const response = await ZestyAPI.appendURI(
              audit?.meta?.uri,
              audit?.entityZUID,
            );

            const message = auditMessage.split('`');
            const envZUID = message[1];
            newMessage = auditMessage.replace(
              envZUID,
              response?.data?.keyFriendly,
            );
          } else if (auditMessage.includes('Published Item')) {
            const response = await ZestyAPI.appendURI(
              audit?.meta?.uri.substr(0, audit.meta.uri.indexOf('/items')),
              audit?.entityZUID,
            );

            const message = auditMessage.split('`');
            const envZUID = message[1];
            newMessage = auditMessage.replace(envZUID, response?.data?.label);
          }

          return {
            ...audit,
            entityName: instances?.find((i) => i.ZUID === audit.entityZUID)
              ?.name,
            screenshotURL: instances?.find((i) => i.ZUID === audit.entityZUID)
              ?.screenshotURL,
            newMessage,
          };
        }),
      );

      setInstanceAudit((prev) =>
        [...prev, ...instanceAuditData].sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
        ),
      );
    }
  };

  const getAudit = async () => {
    if (typeof ZestyAPI?.getInstanceAuditInitZUID === 'function') {
      setIsInstanceAuditLoading(true);
      setInstanceAudit([]);

      if (instances?.length <= INSTANCE_LIMIT) {
        for (let instance of instances) {
          await setResponseToAuditState(instance.ZUID);
        }
      } else if (
        instances?.length > INSTANCE_LIMIT &&
        instancesFavorites?.length > 0
      ) {
        for (let instance of instances?.filter((ins) =>
          instancesFavorites?.find((iFav) => iFav === ins.ZUID),
        )) {
          await setResponseToAuditState(instance.ZUID);
        }
      }

      setIsInstanceAuditLoading(false);
    }
  };

  useEffect(() => {
    // this for initial getting of audit
    getAudit();
  }, [instances]);

  useEffect(() => {
    // this is for triggering getting of audit when user togglesFavorites and instances length > 3
    if (instances?.length > INSTANCE_LIMIT) getAudit();
  }, [instancesFavorites]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <Stack sx={{ maxWidth: 1400, ml: 'auto' }}>
            <Typography variant="h6" my={2}>
              Activity Stream
            </Typography>
            <Grid container spacing={{ xs: 2, xl: 4 }}>
              {isInstancesLoading
                ? [...new Array(3)].map((i) => (
                    <Grid key={i} item xs={12} md={4}>
                      <ZInstanceItem isLoading={isInstancesLoading} />
                    </Grid>
                  ))
                : instances?.slice(0, 3)?.map((instance, index) => (
                    <Grid key={index} item xs={12} md={4}>
                      <ZInstanceItem
                        isTogglingFavorites={isTogglingFavorites}
                        isLoading={isInstancesLoading}
                        image={instance?.screenshotURL}
                        title={instance?.name}
                        zuidLink={`/instances/${instance.ZUID}`}
                        previewLink={`https://${instance?.randomHashID}-dev${
                          helpers?.isProd
                            ? '.webengine.zesty.io'
                            : '.preview.dev.zesty.io'
                        }`}
                        isFavorite={instancesFavorites?.find(
                          (c) => c === instance.ZUID,
                        )}
                        toggleFavorites={() => toggleFavorites(instance.ZUID)}
                      />
                    </Grid>
                  ))}
            </Grid>

            <Divider sx={{ my: 2 }} />

            {instancesFavorites?.length === 0 &&
            instances?.length > INSTANCE_LIMIT ? (
              <Alert severity="warning" variant="filled">
                Want to see more relevant activity, mark an instance as a
                favorite to see details from that stream.
              </Alert>
            ) : (
              <Timeline sx={{ p: 0 }}>
                {isInstanceAuditLoading
                  ? [...new Array(5)].map((i) => (
                      <ZTimelineItem
                        sx={{
                          '::before': {
                            content: 'none',
                          },
                          mt: 1,
                        }}
                        key={i}
                        isLoading={isInstanceAuditLoading}
                      />
                    ))
                  : instanceAudit?.map((audit, index) => (
                      <ZTimelineItem
                        sx={{
                          '::before': {
                            content: 'none',
                          },
                          mt: 1,
                        }}
                        key={index}
                        title={`${helpers.getTimeAgo(audit?.updatedAt)}`}
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
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Stack>{getIcon(audit?.meta?.uri)}</Stack>
                            <Stack>
                              {audit.meta.uri}
                              <Typography>{`${audit?.entityName} by ${audit?.firstName} ${audit?.lastName}`}</Typography>
                              <Typography
                                variant="body2"
                                sx={{ wordBreak: 'break-word' }}
                              >
                                {audit?.newMessage || audit?.meta?.message}
                              </Typography>
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
                            <Button
                              onClick={async () => {
                                const response = await ZestyAPI.appendURI(
                                  audit.meta.uri,
                                  audit.entityZUID,
                                );
                              }}
                            >
                              content
                            </Button>

                            <Button
                              onClick={async () => {
                                const response = await ZestyAPI.appendURI(
                                  audit.meta.uri.substr(
                                    0,
                                    audit.meta.uri.indexOf('/items') + 7,
                                  ) + '/7-a28a9af0b9-z6w7k6',
                                  audit.entityZUID,
                                );
                              }}
                            >
                              contentsss
                            </Button>

                            <Button
                              onClick={async () => {
                                const response = await ZestyAPI.appendURI(
                                  audit.meta.uri.substr(
                                    0,
                                    audit.meta.uri.indexOf('/items'),
                                  ),
                                  audit.entityZUID,
                                );
                              }}
                            >
                              model
                            </Button>
                          </Stack>
                        </Stack>
                      </ZTimelineItem>
                    ))}
              </Timeline>
            )}
          </Stack>
        </Grid>

        {isLG && (
          <Grid item lg={3}>
            <Stack sx={{ maxWidth: 350, ml: 'auto', mt: 3 }}>
              {marketingCards?.map((card, index) => (
                <ZMyCard
                  key={index}
                  title={card[1].title}
                  description={card[1].description}
                  sx={{
                    border: `1px solid ${grey[400]}`,
                    p: 2,
                  }}
                  component={Paper}
                  spacing={2}
                  mb={4}
                >
                  <Stack
                    direction="row"
                    justifyContent={card[1].read_all_url && 'space-between'}
                    alignSelf={!card[1].read_all_url && 'center'}
                  >
                    <Button
                      href={card[1].url}
                      variant="contained"
                      color="primary"
                    >
                      {card[0] === 'marketing'
                        ? 'Marketer Button Content'
                        : 'Read Article'}
                    </Button>
                    {card[1].read_all_url && (
                      <Button
                        href={card[1].read_all_url}
                        variant="outlined"
                        color="primary"
                      >
                        Read All
                      </Button>
                    )}
                  </Stack>
                </ZMyCard>
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default MainContent;
