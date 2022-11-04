import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Webhooks } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import * as helpers from 'utils';
import axios from 'axios';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function WebhooksPage() {
  const [loading, setloading] = React.useState(false);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [webhooks, setWebhooks] = React.useState([]);
  const [, setResourcesOption] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);

  const router = useRouter();

  const { zuid } = router.query;

  const handleGetWebhooksSuccess = (res) => {
    const data = res.data.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
    );
    setWebhooks(data);
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
    const payload = {
      ...data,
      scopedResource: zuid,
    };

    if (helpers.isJsonString(data.text)) {
      payload.text = JSON.parse(data?.text);
    }

    const res = await ZestyAPI.createWebhook(payload);
    !res.error && handleCreateWebhooksSuccess(res);
    res.error && handleCreateWebhooksError(res);
    await getPageData();
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
    await getPageData();
  };

  const testWebhook = async (data) => {
    let { URL, method, contentType, body } = data;

    let options = {};
    if (method != 'GET') options.body = JSON.stringify(body);

    options.method = method;
    options.headers = {
      'Content-Type': contentType,
    };

    if (method === 'GET') {
      try {
        await axios
          .get(URL, options)
          .then(function (response) {
            SuccessMsg({
              html: `<Box><Box></Box>Status:${
                response.status
              }</Box> </br> <Box> <b>Response</b>: ${JSON.stringify(
                response.data,
              )}</Box><Box>`,
            });
          })
          .catch(function (error) {
            ErrorMsg({
              title: error.code,
              text: error.message,
            });
          });
      } catch (error) {
        ErrorMsg({
          title: error.code,
          text: error.message,
        });
      }
    }
    if (method === 'POST') {
      try {
        await axios
          .post(URL, options)
          .then(function (response) {
            SuccessMsg({
              html: `<Box><Box></Box>Status:${
                response.status
              }</Box> </br> <Box> <b>Response</b>: ${JSON.stringify(
                response.data,
              )}</Box><Box>`,
            });
          })
          .catch(function (error) {
            ErrorMsg({
              title: error.code,
              text: error.message,
            });
          });
      } catch (error) {
        ErrorMsg({
          title: error.code,
          text: error.message,
        });
      }
    }
  };

  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );
  const getPageData = async () => {
    await setloading(true);
    await Promise.all([
      getWebhooks(),
      searhcItems(),
      getInstanceUserWithRoles(),
    ]);
    await setloading(false);
  };

  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  const webhooksProps = {
    webhooks,
    createWebhook,
    deleteWebhook,
    testWebhook,
    isInstanceOwner,
    loading,
  };
  return (
    <>
      <Webhooks {...webhooksProps} />
    </>
  );
}

WebhooksPage.data = {
  container: 'InstanceContainer',
};
