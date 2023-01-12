/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Join page content 
 * Name: join_page_content 
 * Model ZUID: 6-cac1a5bbed-7prhlq
 * File Created On: Wed Dec 14 2022 21:32:49 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title_and_description (wysiwyg_basic)
 * review (one_to_one)
 * title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-cac1a5bbed-7prhlq
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function JoinPageContent({ content }) {
  const theme = useTheme();
  const { ZestyAPI } = useZestyStore();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleSignUp = async (e) => {
    const { firstName, lastName, email, password } = e;
    await createZestyUser(firstName, lastName, email, password);
  };

  const handleLoginSuccess = async (sysID) => {
    setCookie('isAuthenticated', true);
    setCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', sysID, {
      domain: '.zesty.io',
    });
    SuccessMsg({ title: 'Success' });
    window.location.replace('/');
  };
  const handleLoginError = async (res) => {
    ErrorMsg({ title: 'Login Failed', text: res?.message });
    window.location.reload();
  };
  const handleSignUpSucess = async (res, email, password) => {
    if (res?.data?.ZUID) {
      const loginResponse = await ZestyAPI.login(email, password);
      loginResponse.code === 200 &&
        handleLoginSuccess(loginResponse?.data?.data);
      loginResponse.code !== 200 && handleLoginError(loginResponse);
    }
  };
  const handleSignUpError = (res) => {
    ErrorMsg({ title: 'Sign up failed', text: res?.error });
    window.location.reload();
  };
  const createZestyUser = async (firstName, lastName, email, password) => {
    // create the user
    const signUpResponse = await ZestyAPI.createUser(
      firstName,
      lastName,
      email,
      password,
    );

    signUpResponse?.data?.ZUID &&
      handleSignUpSucess(signUpResponse, email, password);
    !signUpResponse?.data?.ZUID && handleSignUpError(signUpResponse);
  };
  return (
    <>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
      {/* End of Zesty.io output example */}
    </>
  );
}

export default JoinPageContent;
