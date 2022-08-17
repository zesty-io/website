import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Webhooks } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export default function WebhooksPage() {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [webhooks, setWebhooks] = React.useState([]);
  const [scopeResources, setscopeResources] = React.useState([]);

  const router = useRouter();

  const { zuid } = router.query;

  const handleGetWebhooksSuccess = (res) => {
    setWebhooks(res.data);
  };

  const handleGetWebhooksError = (res) => {
    console.log(res.error);
  };
  const handleCreateWebhooksSuccess = (res) => {
    console.log(res.data);
    SuccessMsg({ title: 'Webhook Created Succesfully' });
  };

  const handleCreateWebhooksError = (res) => {
    console.log(res.error);
    ErrorMsg({ text: res.error });
  };
  const handleSearchItemsSuccess = (res) => {
    const arr = res?.data?.map((e) => {
      const label = e.meta.ZUID;
      const value = e.meta.ZUID;
      const id = e.meta.ZUID;

      return { label, value, id };
    });
    setscopeResources(arr);
  };

  const handleSearchItemsError = (res) => {
    console.log(res.error);
  };
  const getWebhooks = async () => {
    const res = await ZestyAPI.retrieveWebhookForInstance(zuid);
    !res.error && handleGetWebhooksSuccess(res);
    res.error && handleGetWebhooksError(res);
  };

  const createWebhook = async (data) => {
    const {
      scopedResource,
      parentResourceZUID,
      resource,
      eventAction,
      method,
      URL,
      contentType,
      text,
    } = data;
    const res = await ZestyAPI.createWebhook(
      scopedResource,
      parentResourceZUID,
      resource,
      eventAction,
      method,
      URL,
      contentType,
      text,
    );
    !res.error && handleCreateWebhooksSuccess(res);
    res.error && handleCreateWebhooksError(res);
  };

  const searhcItems = async () => {
    const res = await ZestyAPI.searchItems();
    !res.error && handleSearchItemsSuccess(res);
    res.error && handleSearchItemsError(res);
  };
  React.useEffect(() => {
    getWebhooks();
    searhcItems();
  }, []);

  return (
    <InstanceContainer>
      <Webhooks
        webhooks={webhooks}
        createWebhook={createWebhook}
        scopedResourcesOptions={scopeResources}
      />
    </InstanceContainer>
  );
}
