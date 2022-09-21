import React from 'react';

const Error = ({ statusCode }) => {
  return (
    <>
      {statusCode
        ? `An ${statusCode} error occurred on server`
        : 'An error occurred on client'}
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
