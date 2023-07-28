import { getCookie } from 'cookies-next';

export const subscribeToZoho = async (payload) => {
  const { Email, First_Name, Last_Name } = payload;
  await fetch(
    `https://us-central1-zesty-dev.cloudfunctions.net/zohoEmailSubscribe?email=${Email}&name=${First_Name}_${Last_Name}`,
    {
      method: 'GET',
    },
  )
    .then((res) => res.json())
    .then(() => {
      dataLayer.push({ event: 'emailSubscribeSubmitted', value: '1' });
      // acSENT = true;
    });
};

export const postToZOHO = async (payloadJSON) => {
  fetch('https://us-central1-zesty-prod.cloudfunctions.net/zoho', {
    method: 'POST',
    body: JSON.stringify(payloadJSON),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(() => {
      // google data
      dataLayer.push({ event: 'formCaptureSuccess', value: '1' });
    })
    .catch((error) => {
      throw new Error(`HTTP error: ${error}`);
    });
};

export const getLeadObjectZOHO = (
  obj,
  select = '',
  leadDetail = '',
  businessType = '',
  leadSource = 'Website',
) => {
  // let acLeadtype = 'Marketing Website';
  let acRole = 'Marketer';
  // possible values
  // "Phone": '+'+country.value + ' ' + document.querySelector('#ac-phone input').value,
  // "Current_CMS": acCMS,
  // "How_Using_Zesty_io": acHow,
  // "Website": document.querySelector('#ac-url').value,
  // 'Project_Timeline' : document.querySelector('#ac-timeline').value,
  // zoho and google click id https://help.zoho.com/portal/en/kb/crm/integrations/google/google-ads/articles/configure-google-ads-crm-integration#Step_2_Add_hidden_element_in_your_web_forms
  return {
    First_Name: obj.firstName,
    Last_Name: obj.lastName,
    Email: obj.businessEmail || obj.email,
    Phone: obj.phoneNumber,
    Mobile: obj.mobile,
    Company_Phone: obj.hqPhone,
    Inquiry_Reason: select,
    Description: obj.message,
    Zesty_User_Account: obj?.user && obj.user ? true : false,
    newsletter_signup: obj.newsletter_signup,
    Lead_Source: getCookie('utm_source') ? getCookie('utm_source') : leadSource,
    Role: getCookie('persona') ? getCookie('persona') : acRole,
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
    Designation: obj.jobTitle,
    Company: obj.company,
    LinkedIn_url: obj.linkedIn,
  };
};
