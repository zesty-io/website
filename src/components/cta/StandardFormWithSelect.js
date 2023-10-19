/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Box from '@mui/material/Box';

import { Form, Formik } from 'formik';

import TransitionsModal from './TransitionModal';
import { getCookie } from 'cookies-next';
import { SingleFieldForm } from 'revamp/ui/GetDemoSection/SingleFieldForm';
import { Stack } from '@mui/material';
import { validationSchema } from 'revamp/utils/validation';
import getLastVisitedPathAndUrl from 'revamp/utils/getLastVisitedPathAndUrl';

/**
 * Possible field option in ZOHO https://crm.zoho.com/crm/org749642405/settings/api/modules/Leads?step=FieldsList
 * Note, if a custom field need to be added speak to todd.sabo@zesty.io
 * For testing new changes, please work with katie.moser@zesty.io
 */

/* validation for form component */

const getLeadObjectZOHO = (
  obj,
  select,
  leadDetail,
  businessType,
  leadSource = 'Website',
  lastVisitedPath,
  lastVisitedURL,
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
    LinkedIn_Profile: obj.linkedIn,
    Last_Visited_Path: lastVisitedPath,
    Last_Visited_URL: lastVisitedURL,
    Entry_Path: getCookie('entry_path') ? getCookie('entry_path') : '',
  };
};

const postToZOHO = async (payloadJSON) => {
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
const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const subscribeToZoho = async (payload) => {
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
      acSENT = true;
    });
};

function StandardFormWithSelect({
  leadDetail = 'Contact Us',
  leadSource = 'Website',
  businessType = 'Direct',
  modalTitle = 'Thank you',
  modalMessage = 'Have a great day.',
  downloadLink = '',
  capterraTracking = null,
  cmsModel,
}) {
  const [open, setOpen] = useState(false);

  const { lastVisitedPath, lastVisitedURL } = getLastVisitedPathAndUrl();
  let inquiryReasons = [
    'General',
    'Agency Sign Up',
    'Request a Demo',
    'Support',
    'Billing',
    'Press Relations',
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    company: '',
    jobTitle: '',
    businessEmail: '',
    linkedIn: '',
    phoneNumber: '',
    newsletter_signup: false,
  };

  const onSubmit = async (values) => {
    if (values.firstName === '') {
      values.firstName = 'Unknown';
    }
    if (values.lastName === '') {
      values.lastName = 'N/A in Zoominfo';
    }

    let payload = await getLeadObjectZOHO(
      values,
      '',
      'Get a free consultation',
      '',
      'website', // leadsource
      lastVisitedPath,
      lastVisitedURL,
    );

    // post to leads section
    await postToZOHO(payload);

    //post to email marketing signup
    if (payload.newsletter_signup) {
      await subscribeToZoho(payload);
    }

    cmsModel === 'Gated Content Page'
      ? setOpen(true)
      : (window.location = '/meet/');

    return values;
  };

  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await onSubmit(values);
        }}
      >
        {({
          handleSubmit,
          getFieldProps,
          errors,
          touched,
          initialValues,
          isSubmitting,
          setFieldValue,
          values,
        }) => (
          <Form id="site-form" onSubmit={handleSubmit}>
            <Stack sx={{ mt: 4 }}>
              <SingleFieldForm
                buttonColor="secondary"
                {...{
                  handleSubmit,
                  getFieldProps,
                  errors,
                  touched,
                  initialValues,
                  isSubmitting,
                  setFieldValue,
                  values,
                  inquiryReasons,
                }}
              />
            </Stack>
          </Form>
        )}
      </Formik>
      <TransitionsModal
        title={modalTitle}
        message={modalMessage}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
}

export default StandardFormWithSelect;
