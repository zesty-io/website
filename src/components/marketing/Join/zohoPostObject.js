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
    select='Trial',
    leadDetail = false,
    businessType = 'Unknown',
    leadSource = 'Website',
    role = 'Marketer',
    userZUID='',
    trialStatus='Active'
  ) => {

    // logic to override lead source detail, or default to utm_medium, or empty if nothing
    if(leadDetail != false){
      leadDetail = leadDetail;
    } else if (getCookie('utm_medium')){
      leadDetail = getCookie('utm_medium');
    } else {
      leadDetail = '';
    }

    return {
      First_Name: obj.firstName,
      Last_Name: obj.lastName,
      Email: obj.email,
      Phone: obj?.phoneNumber ? obj?.phoneNumber : '',
      Inquiry_Reason: select,
      Zesty_User_Account: obj?.user && obj.user ? true : false,
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
      Lead_Source_Detail: leadDetail,
      Lead_Source_Topic: getCookie('utm_campaign')
        ? getCookie('utm_campaign')
        : 'none',
      User_ZUID : userZUID,
      Trial_Created_Date: (new Date()).toISOString().slice(0, 19),
      Business_Type: businessType,
      Trial_Status: trialStatus,
      Lead_Status: 'Not Contacted',
      Designation: obj?.jobTitle ? obj.jobTitle : '',
      Company: obj?.company ? obj.company : '',
    };
  };
  