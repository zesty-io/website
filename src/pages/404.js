import React from 'react';
import dynamic from 'next/dynamic';

const NotFoundCover = dynamic(() => import('views/NotFoundCover'));

const FourOFourPage = () => {
  return <NotFoundCover />;
};

export default FourOFourPage;
