import slackNotify from 'components/marketing/Start/slackNotify';
import React from 'react';
import { ErrorPage } from 'views/error';

const Error = ({ statusCode }) => {
  const page = window.location.pathname;
  const host = window.location.host;
  const errormsg = `You have error in ${host} on page ${page}`;

  React.useEffect(() => {
    slackNotify(errormsg);
  }, []);

  return <ErrorPage errorCode={statusCode} />;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
