import { deleteCookie } from 'cookies-next';

/**
 *
 * @param {boolean} isProd - boolean current environment
 *
 */
export const resetCookies = (isProd) => {
  deleteCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', {
    domain: '.zesty.io',
    secure: true,
  });
  deleteCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', {
    domain: '.zesty.io',
  });
  deleteCookie('isAuthenticated');
  deleteCookie('ZESTY_WORKING_INSTANCE', {});
  deleteCookie('APP_USER_ZUID');
  deleteCookie('APP_USER_EMAIL');
  deleteCookie('APP_USER_FIRST_NAME');
  deleteCookie('APP_USER_LAST_NAME');
};
