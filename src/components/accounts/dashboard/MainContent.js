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

import ZInstanceTimelineItemContainer from './ui/ZInstanceTimelineItemContainer';

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

  const setResponseToAuditState = async (zuid, limit = 10) => {
    const response = await ZestyAPI.getInstanceAuditInitZUID(limit, zuid);

    if (!response?.error) {
      const instanceAuditData = [...response?.data].map((audit) => {
        return {
          ...audit,
          entityName: instances?.find((i) => i.ZUID === audit.entityZUID)?.name,
          screenshotURL: instances?.find((i) => i.ZUID === audit.entityZUID)
            ?.screenshotURL,
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
                      <ZInstanceTimelineItemContainer
                        key={index}
                        audit={audit}
                        isInstanceAuditLoading={isInstanceAuditLoading}
                      />
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
