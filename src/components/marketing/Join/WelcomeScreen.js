/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
export const WelcomeScreen = ({
  firstname,
  lastname,
  email,
  role,
  projectType,
  userZUID = false,
  dateCreated,
  children,
}) => {
  useEffect(() => {
    console.log('Attempting to register user for Onboarding');
    if (window.pendo && userZUID != false) {
      let visitor = {
        id: userZUID,
        email: email,
        firstName: firstname,
        lastName: lastname,
        full_name: `${firstname} ${lastname}`,
        personajoin: role,
        projecttype: projectType,
        // You can add any additional visitor level key-values here,
        // as long as it's not one of the above reserved names.
        staff: 0,
        creationdate: dateCreated,
      };

      console.log('Registering User for Onboarding:', visitor);
      pendo.initialize({
        visitor: visitor,
      });
    }
    //Check if pendo is running correctly open browser console and run pendo.validateInstall()
  }, [userZUID]);

  return <Box sx={{ height: '400px' }}>{children}</Box>;
};
