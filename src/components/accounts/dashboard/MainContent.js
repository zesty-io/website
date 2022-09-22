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
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import ZInstanceItem from './ui/ZInstanceItem';
import ZMyCard from './ui/ZMyCard';
import ZTimelineItem from './ui/ZTimelineItem';
import * as helpers from 'utils';

const INSTANCE_LIMIT = 3;

const MainContent = ({ instances, isInstancesLoading }) => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instanceAudit, setInstanceAudit] = useState([]);
  const [isInstanceAuditLoading, setIsInstanceAuditLoading] = useState(false);
  const [instancesFavorites, setInstancesFavorites] = useState([]);
  const [marketingCards, setMarketingCards] = useState([]);

  const toggleFavorites = async (zuid) => {
    const isExisting = instancesFavorites?.find((e) => e === zuid);
    const favoritesSites = [...instancesFavorites, zuid];
    const filteredFavorites = instancesFavorites?.filter((e) => e !== zuid);
    const prefs = JSON.parse(userInfo.prefs);
    prefs.favorite_sites = !isExisting ? favoritesSites : filteredFavorites;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify(prefs),
    };
    const res = await ZestyAPI.updateUser(userInfo.ZUID, body, '');
    setInstancesFavorites(JSON.parse(res?.data?.prefs)?.favorite_sites);
  };

  const setResponseToAuditState = async (zuid, limit = 10) => {
    const response = await ZestyAPI.getInstanceAuditInitZUID(limit, zuid);

    if (!response?.error) {
      const instanceAuditData = [...response?.data].map((audit) => {
        return {
          ...audit,
          entityName: instances?.find((i) => i.ZUID === audit.entityZUID)?.name,
        };
      });
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

      if (instances?.length < INSTANCE_LIMIT) {
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

  useEffect(() => {
    const getMarketingCards = async () => {
      const response = await fetch(
        helpers.isProd
          ? 'https://www.zesty.io/-/accountsdashcards.json'
          : 'https://kfg6bckb-dev.webengine.zesty.io/-/accountsdashcards.json',
      );
      const data = await response.json();
      setMarketingCards(Object.entries(data[0]));
    };
    getMarketingCards();
  }, []);

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      setInstancesFavorites(
        JSON.parse(userInfo?.prefs)?.favorite_sites?.filter((c) => c !== null),
      );
    }
  }, [userInfo]);

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
                        title={`${dayjs().diff(
                          dayjs(audit?.updatedAt),
                          'day',
                        )} days ago`}
                        isLoading={isInstanceAuditLoading}
                      >
                        <Stack
                          sx={{ border: `1px solid ${grey[400]}`, p: 2 }}
                          component={Paper}
                          elevation={0}
                          direction={{ xs: 'column', lg: 'row' }}
                          justifyContent="space-between"
                        >
                          <Stack>
                            <Typography>{audit.entityName}</Typography>
                            <Typography
                              variant="body2"
                              sx={{ wordBreak: 'break-word' }}
                            >
                              {audit.meta.message}
                            </Typography>
                          </Stack>
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={2}
                            mt={{ xs: 1 }}
                          >
                            <Button
                              href={audit.meta.url}
                              size="small"
                              variant="contained"
                              color="primary"
                            >
                              Edit Item
                            </Button>
                            <Button
                              href={audit.meta.url}
                              size="small"
                              variant="outlined"
                              color="primary"
                            >
                              Edit Content
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
