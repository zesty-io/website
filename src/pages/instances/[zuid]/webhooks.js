import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Webhooks } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import * as helpers from 'utils';

export default function WebhooksPage() {
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [webhooks, setWebhooks] = React.useState([]);
  const [resourcesOption, setResourcesOption] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);

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
    const options = res?.data?.map((e) => {
      const label = e.meta.ZUID;
      const value = e.meta.ZUID;
      const id = e.meta.ZUID;

      return { label, value, id };
    });
    setResourcesOption(options);
  };

  const handleSearchItemsError = (res) => {
    console.log(res.error);
  };

  const handleGetInstanceUserWithRolesSucc = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleGetInstanceUserWithRolesErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleDeleteWebhookSuccess = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Webhook Successfully Deleted' });
  };
  const handleDeleteWebhookError = (res) => {
    ErrorMsg({ text: res.error });
  };
  const getWebhooks = async () => {
    const res = await ZestyAPI.retrieveWebhookForInstance(zuid);
    !res.error && handleGetWebhooksSuccess(res);
    res.error && handleGetWebhooksError(res);
  };

  const createWebhook = async (data) => {
    const payload = { ...data, scopedResource: zuid };
    const res = await ZestyAPI.createWebhook(payload);
    !res.error && handleCreateWebhooksSuccess(res);
    res.error && handleCreateWebhooksError(res);
    await getWebhooks();
  };

  const searhcItems = async () => {
    // const params = `?q=models&limit=1000`;
    const params = ``;
    const res = await ZestyAPI.searchItems(params);
    !res.error && handleSearchItemsSuccess(res);
    res.error && handleSearchItemsError(res);
  };

  const getInstanceUserWithRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetInstanceUserWithRolesSucc(res);
    res.error && handleGetInstanceUserWithRolesErr(res);
  };

  const deleteWebhook = async (webhookZuid) => {
    const res = await ZestyAPI.deleteWebhook(webhookZuid);
    !res.error && handleDeleteWebhookSuccess(res);
    res.error && handleDeleteWebhookError(res);
    await getWebhooks();
  };

  const testWebhook = async (data) => {
    let { URL, method, contentType, body } = data;

    let options = {};
    if (method != 'GET') options.body = body;

    options.method = method;
    options.headers = {
      'Content-Type': contentType,
    };
    try {
      await fetch(URL, options)
        .then(async (response) => {
          const res = await response.json();
          SuccessMsg({
            html: `<Box><Box></Box>Status:${response.status}</Box> </br> <Box>Response: ${res}</Box><Box>`,
          });
        })
        .catch((error) => {
          ErrorMsg({
            title: 'Error 400',
            text: error,
          });
        });
    } catch (error) {
      ErrorMsg({
        title: 'Error 400',
        text: error,
      });
    }
  };

  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );

  React.useEffect(() => {
    if (router.isReady) {
      getWebhooks();
      searhcItems();
      getInstanceUserWithRoles();
    }
  }, [router.isReady]);

  return (
    <InstanceContainer>
      <Webhooks
        webhooks={webhooks}
        createWebhook={createWebhook}
        deleteWebhook={deleteWebhook}
        testWebhook={testWebhook}
        isInstanceOwner={isInstanceOwner}
      />
    </InstanceContainer>
  );
}
