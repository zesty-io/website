/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Login 
 * Name: login 
 * Model ZUID: 6-ccb9ca9fc1-06fhhc
 * File Created On: Fri Aug 26 2022 15:52:03 GMT+0800 (Taipei Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * description (textarea)
 * video_link (link)
 * docs_link (link)
 * image (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ccb9ca9fc1-06fhhc
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import React, { useEffect } from 'react';
import CustomLogin from 'components/console/Login';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
function Login({ content }) {
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    const header = document.querySelector('header'),
      topNavBox = document.querySelector('#topNavBox'),
      footer = document.querySelector('footer');
    if (header && topNavBox && footer) {
      header.style.display = 'none';
      topNavBox.style.display = 'none';
      footer.style.display = 'none';
    }
  }, []);

  if (isLoggedIn) {
    window.location.replace('/instances');
  }

  return <CustomLogin />;
}

export default Login;
