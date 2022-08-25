import React, { useEffect } from 'react';
import { Box } from '@mui/material';
export const WelcomeScreen = ({
  firstname,
  lastname,
  email,
  role,
  project,
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
        personaJoin: role,
        projectType: project,
        // You can add any additional visitor level key-values here,
        // as long as it's not one of the above reserved names.
        staff: 0,
        creationDate: dateCreated,
      };

      console.log('Registering Pendo Users', visitor);
      window.pendo.initialize({
        visitor: visitor,
      });
    }
    //Check if pendo is running correctly open browser console and run pendo.validateInstall()
  });

  return <Box sx={{ height: '400px' }}>{children}</Box>;
};
