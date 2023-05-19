import { Timeline } from '@mui/lab';
import { Alert, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import ZInstanceTimelineItemContainer from './ZInstanceTimelineItemContainer';
import ZTimelineItem from './ZTimelineItem';

const INSTANCE_LIMIT = 3;

const ZActivityStream = ({ instancesFavorites, instances, initialRender }) => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [instanceAudit, setInstanceAudit] = useState([]);
  const [isInstanceAuditLoading, setIsInstanceAuditLoading] = useState(false);
  const uniqueIds = new Set();

  const unique = (arr) => {
    return arr.filter((element) => {
      const isDuplicate = uniqueIds.has(
        element.affectedZUID + element.meta.message,
      );

      uniqueIds.add(element.affectedZUID + element.meta.message);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });
  };

  const setResponseToAuditState = async (zuid, limit = 20) => {
    const url = `https://${zuid}.api.zesty.io/v1/env/audits?limit=20`;
    const response = await ZestyAPI.getInstanceAuditInitZUID(limit, zuid, url);
    if (!response?.error && response?.data && instances) {
      const instanceAuditData = [...response?.data]?.map((audit) => {
        return {
          ...audit,
          entityName: instances?.find((i) => i.ZUID === audit.entityZUID)?.name,
          totalActions: response?.data?.filter(
            (c) =>
              c.meta.message === audit.meta.message &&
              c.affectedZUID === audit.affectedZUID,
          )?.length,
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
        let count = 0;
        for (let instance of instances?.filter((ins) =>
          instancesFavorites.includes(ins.ZUID),
        )) {
          if (count >= 3) break;

          await setResponseToAuditState(instance.ZUID);
          count++;
        }
      }

      setInstanceAudit((prev) => unique(prev));
      setIsInstanceAuditLoading(false);
    }
  };

  useEffect(() => {
    getAudit();
    // this for initial getting of audit
    // if (initialRender) getAudit();
  }, [initialRender]);

  useEffect(() => {
    // this is for triggering getting of audit when user togglesFavorites and instances length > 3
    if (instances?.length > INSTANCE_LIMIT) getAudit();
  }, [instancesFavorites]);

  return (
    <>
      <Typography variant="h6" color="text.secondary">
        Latest Activity From Your Favorite Instances
      </Typography>
      {instancesFavorites?.length === 0 &&
      instances?.length > INSTANCE_LIMIT ? (
        <Alert severity="warning" variant="filled">
          Want to see more relevant activity, mark an instance as a favorite to
          see details from that stream.
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
    </>
  );
};

export default ZActivityStream;
