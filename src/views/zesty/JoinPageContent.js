/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Join page content 
 * Name: join_page_content 
 * Model ZUID: 6-cac1a5bbed-7prhlq
 * File Created On: Fri Dec 16 2022 13:25:58 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title_and_description (wysiwyg_basic)
 * review (one_to_one)
 * title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-cac1a5bbed-7prhlq
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Avatar,
  Grid,
  Box,
  Container,
  Stack,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
// import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';
import { useFormik } from 'formik';
import {
  accountsValidations,
  ErrorMsg,
  FormInput,
  SuccessMsg,
} from 'components/accounts';
import LockIcon from '@mui/icons-material/Lock';
import { EmailOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';
import { setCookie } from 'cookies-next';
import { isProd } from 'utils';

function JoinPageContent({ content }) {
  const theme = useTheme();
  const { ZestyAPI } = useZestyStore();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleSignUp = async (e) => {
    const { firstName, lastName, email, password } = e;
    await createZestyUser(firstName, lastName, email, password);
  };

  const handleLoginSuccess = async (sysID) => {
    setCookie('isAuthenticated', true);
    setCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', sysID, {
      domain: '.zesty.io',
    });
    SuccessMsg({ title: 'Success' });
    window.location.replace('/');
  };
  const handleLoginError = async (res) => {
    ErrorMsg({ title: 'Login Failed', text: res?.message });
    window.location.reload();
  };
  const handleSignUpSucess = async (res, email, password) => {
    if (res?.data?.ZUID) {
      const loginResponse = await ZestyAPI.login(email, password);
      loginResponse.code === 200 &&
        handleLoginSuccess(loginResponse?.data?.data);
      loginResponse.code !== 200 && handleLoginError(loginResponse);
    }
  };
  const handleSignUpError = (res) => {
    ErrorMsg({ title: 'Sign up failed', text: res?.error });
    window.location.reload();
  };
  const createZestyUser = async (firstName, lastName, email, password) => {
    // create the user
    const signUpResponse = await ZestyAPI.createUser(
      firstName,
      lastName,
      email,
      password,
    );

    signUpResponse?.data?.ZUID &&
      handleSignUpSucess(signUpResponse, email, password);
    !signUpResponse?.data?.ZUID && handleSignUpError(signUpResponse);
  };

  return (
    <Container sx={{ sm: 1, md: 1236 }}>
      <Stack
        my={4}
        width={1}
        sx={{
          justifyItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://brand.zesty.io/zesty-io-logo.svg"
          alt="Zesty.io Logo"
          height={200}
          width={200}
        />
      </Stack>
      <Grid container>
        <Grid
          sx={{
            px: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Box>
              <MuiMarkdown
                options={{
                  overrides: {
                    h1: {
                      component: Typography,
                      props: {
                        variant: 'h3',
                        fontWeight: 'bold',
                        component: 'h1',
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'h6',
                        component: 'p',
                        lineHeight: 1.2,
                        mt: 2,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                }}
              >
                {content?.demo_description || FillerContent.description}
              </MuiMarkdown>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: 2,
                mt: 4,
              }}
            >
              {content?.g2_badges?.data.map((item, index) => (
                <Box key={index}>
                  <ZestyImage
                    width={100}
                    height={120}
                    style={{ width: 'auto', height: 'auto' }}
                    src={item?.badge_image?.data[0].url || FillerContent.href}
                  />
                </Box>
              ))}
            </Box>

            <Box sx={{ my: 4 }}>
              {content?.testimonial?.data.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      lineHeight: 1.2,
                      fontStyle: 'italic',
                      color: theme.palette.zestyZambezi,
                    }}
                  >
                    {item?.review || FillerContent.description}
                  </Typography>

                  <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Avatar
                      src={
                        item?.reviewer_headshot?.data[0]?.url ||
                        FillerContent.photos[0].src
                      }
                      alt={item?.reviewer_name || ''}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{
                          lineHeight: 1.2,
                          color: theme.palette.zestyZambezi,
                        }}
                      >
                        {item?.reviewer_name || FillerContent.description}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={{
                          lineHeight: 1.2,
                          color: theme.palette.zestyZambezi,
                          fontWeight: 'bold',
                        }}
                      >
                        {item?.reviewer_title || FillerContent.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid sx={{ mt: isMobile ? 4 : 0 }} item xs={12} md={6}>
          <Box boxShadow={1} px={6} py={5}>
            <CustomForm onSubmit={handleSignUp} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 10 }}>
        <SimpleCardLogo
          variant="outlined"
          heading_text={content?.logos_h2}
          logoItems={content?.logos?.data}
        />

        {/* <DarkBlueCta
          sx={{ mt: 15, py: 10 }}
          cta_text={content?.cta_button}
          cta_secondary_link={
            content?.cta_button_secondary_link?.data[0].meta.web.uri
          }
          cta_secondary_text={content?.cta_button_secondary}
          header_content={content?.bottom_cta}
        /> */}
      </Box>
    </Container>
  );
}

export default JoinPageContent;

const CustomForm = ({ onSubmit = () => {} }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    validationSchema: accountsValidations.signUp,
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    },
    onSubmit: async (data) => {
      await onSubmit(data);
      formik.resetForm();
    },
  });
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Typography
        variant="h4"
        color="GrayText"
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Create your free account
      </Typography>
      <Box pt={4} pb={2} gap={4} display="flex" width={1} sx={{}}>
        <Box width={1}>
          <FormInput
            customLabelVariant="body1"
            color="secondary"
            name={'firstName'}
            customLabel="First Name"
            formik={formik}
          />
        </Box>
        <Box width={1}>
          <FormInput
            customLabelVariant="body1"
            color="secondary"
            name={'lastName'}
            customLabel="Last Name"
            formik={formik}
          />
        </Box>
      </Box>
      <Box pb={2}>
        <FormInput
          customLabelVariant="body1"
          color="secondary"
          name="email"
          customLabel="Email Address"
          formik={formik}
          placeholder="e.g john@zesty.io"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Stack>
        <FormInput
          customLabelVariant="body1"
          color="secondary"
          name="password"
          type={showPassword ? 'text' : 'password'}
          customLabel="Password"
          formik={formik}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems={'center'}>
        <Stack my={3}>
          <Typography variant="body2" color="GrayText">
            Already a customer?{' '}
            <Link href="/login/" variant="body2" color={'#5B667D'}>
              Sign in
            </Link>
          </Typography>
        </Stack>
        <Stack width={'10rem'}>
          <LoadingButton
            type="submit"
            variant="contained"
            color="secondary"
            loading={formik.isSubmitting}
          >
            <Typography variant="body1">Sign Up</Typography>
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  );
};
