/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Contact 
 * Name: contact 
 * Model ZUID: 6-e2bbe081f2-8lr9x8
 * File Created On: Fri Mar 04 2022 14:20:19 GMT+0100 (Central European Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e2bbe081f2-8lr9x8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// component imports 
import Container from 'components/Container';

// blocks
import { ContactFormWithSideBarMap } from 'blocks/formLayouts';
import { ContactDetails } from 'blocks/contentBlocks';

import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function Contact({ content }) {
  const theme = useTheme();
  return (
    <Box>
      <ContactFormWithSideBarMap />
      <ContactDetails />
    </Box>
  );
}




      </Container>
      <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container>
          {/*Begin Contact Component*/}
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant={'h4'}
                sx={{ fontWeight: 700 }}
                gutterBottom
                align={'center'}
              >
                Contact details
              </Typography>
              <Typography color="text.secondary" align={'center'}>
                Keep track of what's happening with your data, change
                permissions, and run reports against your data anywhere in the
                world. Keep track of what's happening with your data, change
                permissions.
              </Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent={'space-between'}
              marginBottom={4}
            >
              {mock.map((item, i) => (
                <Box
                  key={i}
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={2}
                  >
                    <Box
                      component={Avatar}
                      bgcolor={theme.palette.secondary.main}
                      width={40}
                      height={40}
                    >
                      {item.icon}
                    </Box>
                  </Box>
                  <ListItemText primary={item.label} secondary={item.value} />
                </Box>
              ))}
            </Box>
          </Box>
          {/*End Contact Component*/}
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/*
             <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px'}}>
                 <h2>Accessible Zesty.io JSON Object</h2>
                 <pre>{JSON.stringify(content, null, 2)}</pre>
             </div>
             {/* End of Zesty.io output example */}
    </>
  );
}

export default Contact;
