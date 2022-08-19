import React, {useEffect} from 'react'
import {Box} from '@mui/material'
export const WelcomeScreen = ({firstname, lastname, email,role, userZUID=false, dateCreated, children}) => {

  useEffect(() => {
    if (
      window.pendo && userZUID != false
    ) {
      pendo.initialize({
        visitor: {
          id: userZUID,
          email: email,
          firstName: firstname,
          lastName: lastname,
          full_name: `${firstname} ${lastname}`,
          persona: role,

          // You can add any additional visitor level key-values here,
          // as long as it's not one of the above reserved names.
          staff: 0,
          creationDate: dateCreated,
        },
      });
    }
    //Check if pendo is running correctly open browser console and run pendo.validateInstall()
  }, []);

  return (
    <Box sx={{height: '400px'}}>
         
        {children}
    </Box>
  )
}
