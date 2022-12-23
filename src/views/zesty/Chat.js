/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Heros 
 * Name: heros 
 * Model ZUID: 6-b0949ed3b2-p8nsm5
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * name (text)
 * rich_content_block (wysiwyg_basic)
 * quick_content_block (textarea)
 * eyebrow_content (text)
 * single_hero_image (images)
 * short_name (text)
 * sort_order (sort)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b0949ed3b2-p8nsm5
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
} from '@mui/material';
import React from 'react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

function Chat({ content }) {
  const [email, setEmail] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const invite = async () => {
    var raw = JSON.stringify({
      email: email,
    });

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
    };
    fetch(
      'https://us-central1-zesty-prod.cloudfunctions.net/getSlackInvite',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    setSent(true);
  };
  React.useEffect(() => {
    if (validateEmail(email)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email]);

  return (
    <Box>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <Container sx={{ mt: 5 }}>
        <Grid container>
          <Grid item>
            <Typography component="h1" variant="h3">
              {content.title}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: content.content }} />

            <Paper>
              <Box padding={5}>
                <Typography sx={{ mb: 4 }}>
                  Enter your email and we will send an invite to your inbox.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                  }}
                >
                  <TextField
                    label="Email"
                    type="text"
                    InputProps={{
                      onChange: (e) => setEmail(e.target.value),
                      value: email,
                      placeholder: 'your@email.com',
                      readonly: sent ? true : false,
                    }}
                  />
                  <Button
                    sx={{ ml: 4 }}
                    size="large"
                    variant="contained"
                    onClick={() => invite()}
                    disabled={sent || valid == false ? true : false}
                  >
                    Submit
                  </Button>
                </Box>
                {sent && (
                  <Typography
                    sx={{ mt: 4, color: 'green', fontWeight: 'bold' }}
                  >
                    Email sent. Please check your inbox to accept and join chat.
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/* End of Zesty.io output example */}
    </Box>
  );
}

export default Chat;
