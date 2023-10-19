import axios from 'axios';
import { getCookie } from 'cookies-next';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { ErrorPage } from 'views/error';
import * as helper from 'utils';

const slackErrorUrl =
  'https://hooks.slack.com/services/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';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

const slackError = async ({
  url,
  page,
  time,
  user = 'NA',
  email = 'NA',
  userZUID = 'NA',
  userAgent,
}) => {
  const payload = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '❌❌❌ Error in website ❌❌❌',
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Domain:*\n<${url}|${url}>`,
          },
          {
            type: 'mrkdwn',
            text: `*Page*\n${page}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Created By:*\n${user}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n${email}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*UserAgent:*\n${userAgent}`,
          },
          {
            type: 'mrkdwn',
            text: `*User ZUID:*\n${userZUID}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Created on:*\n${time}`,
          },
        ],
      },
    ],
  };

  await axios.post(slackErrorUrl, payload, { headers });
};

const Error = ({ statusCode }) => {
  const [pathname, setPathname] = useState('');
  const [url, setUrl] = useState('');
  const [navigator, setNavigator] = useState('');
  const page = pathname;
  const user = `${getCookie('APP_USER_FIRST_NAME') || 'NA'} ${getCookie(
    'APP_USER_LAST_NAME',
  )}`;

  const userAgent = navigator.userAgent || '-';
  const email = getCookie('APP_USER_EMAIL') || 'NA';
  const userZUID = getCookie('APP_USER_ZUID') || 'NA';
  const time = dayjs().format('MMM DD, YYYY @HH:mm:ss');

  useEffect(() => {
    setPathname(window.location.pathname);
    setUrl(window.location.host);
    setNavigator(window.navigator);
  }, []);

  useEffect(() => {
    helper.isProd &&
      slackError({
        url,
        page,
        time,
        user,
        email,
        userZUID,
        userAgent,
      });
  }, []);

  return <ErrorPage errorCode={statusCode} />;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
