import React from 'react';
import { generateAlt } from 'utils';

const EnterpriseImage = ({ img = '' }) => {
  const str = img?.split('?')[0];
  return (
    <picture>
      <source srcSet={img} media="(min-width: 1200px)" />
      <source srcSet={str + '?width=400'} media="(min-width: 400px)" />
      <img
        height={400}
        width={600}
        src={img}
        alt={generateAlt('Zesty image')}
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      />
    </picture>
  );
};

export default EnterpriseImage;
