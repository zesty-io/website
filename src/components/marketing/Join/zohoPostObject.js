import { getCookie } from 'cookies-next';

/*** 
 *  object options
 * 
 *  firstName (require)
 *  lastName (require)
 *  email (require)
 *  phoneNumber (option)
 *  message (option)
 *  newsletter_signup (option)
 *  jobTitle (option)
 *  company (option)
 * 
 */

export const zohoPostObject = (
    obj,
    select='Unknown',
    leadDetail,
    businessType,
    leadSource = 'Website',
    role = 'Marketer'
  ) => {
    return {
      First_Name: obj.firstName,
      Last_Name: obj.lastName,
      Email: obj.email,
      Phone: obj?.phoneNumber ? obj?.phoneNumber : '',
      Inquiry_Reason: select,
      Description: obj?.message ? obj.message : '',
      newsletter_signup: obj?.newsletter_signup ? obj.newsletter_signup : 'unknown',
      Lead_Source: getCookie('utm_source')
      ? getCookie('utm_source')
      : leadSource,
      Role: getCookie('persona') ? getCookie('persona') : role,
      Captured_URL:
        window.location.href.match(/localhost/gi) == null
          ? window.location.href
          : 'https://www.testcapurl.com',
      UTM_Campaign: getCookie('utm_campaign')
        ? getCookie('utm_campaign')
        : 'unknown',
      UTM_Source: getCookie('utm_source') ? getCookie('utm_source') : 'unknown',
      UTM_Term: getCookie('utm_term') ? getCookie('utm_term') : 'unknown',
      UTM_Medium: getCookie('utm_medium') ? getCookie('utm_medium') : 'unknown',
      $gclid: getCookie('gclid') ? getCookie('gclid') : '',
      Lead_Source_Detail: getCookie('utm_medium')
        ? getCookie('utm_medium')
        : leadDetail,
      Lead_Source_Topic: getCookie('utm_campaign')
        ? getCookie('utm_campaign')
        : 'none',
      Business_Type: businessType,
      Lead_Status: 'Not Contacted',
      Designation: obj?.jobTitle ? obj.jobTitle : '',
      Company: obj?.company ? obj.company : '',
    };
  };
  