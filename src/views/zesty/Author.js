/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Authors 
 * Name: authors 
 * Model ZUID: 6-76ccb8-d3dq4j
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * name (text)
 * company (text)
 * title (text)
 * description (textarea)
 * twitter_handle (text)
 * headshot (images)
 * hero_image (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-76ccb8-d3dq4j
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import UserCard from '../../blocks/userCards/UserCardWithBackground/UserCardWithBackground';
import VerticalMinimalDesignedBlogCards from '../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards';
import FillerContent from 'components/FillerContent';

const getCardData = async (authorZuid, setcardData) => {
  const uri = `https://kfg6bckb-dev.webengine.zesty.io/author.json/?author=${authorZuid}`;
  const res = await fetch(uri).then((response) => response.json());
  res && (await setcardData(res));
};

function Author({ content }) {
  const [cardData, setcardData] = React.useState();

  const author = {
    name: content.name || '',
    avatar: (content.headshot?.data && content.headshot?.data[0]?.url) || '',
  };
  const UserCardProps = {
    title: content.title || 'title: ' + FillerContent.header,
    avatar: (content.headshot?.data && content.headshot?.data[0]?.url) || '',
    name: content.name || '',
    description: content.description || '',
    twitter: content.twitter_handle,
    isVerified: true,
    website: 'www.example.com',
    email: 'clara.bertoletti@example.com',
  };

  // Get card data based on author guid  on page load
  React.useEffect(() => {
    getCardData(content.meta.zuid, setcardData);
  }, []);

  return (
    <>
      <UserCard {...UserCardProps} />
      <VerticalMinimalDesignedBlogCards
        hideLoadMore={true}
        list={cardData || []}
        author={author}
      />
    </>
  );
}

export default Author;
