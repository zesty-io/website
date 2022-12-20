import React from 'react';
import {
  Container,
  Stack,
  Box,
  Grid,
  Typography,
  InputAdornment,
  useMediaQuery,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import PropTypes from 'prop-types';
import ZestyImage from 'blocks/Image/ZestyImage';
import ZohoFormEmbed from 'components/cta/ZohoFormEmbed';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import msLogo from '../../../../public/assets/images/microsoft/microsoft_logo.svg';
const googleLogo =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=';

const googleUrl = 'https://auth.api.zesty.io/google/login';

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
import axios from 'axios';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SlideMessage = ({
  message = 'What team are you from?',
  demo = false,
}) => {
  const theme = useTheme();
  const { ZestyAPI } = useZestyStore();
  const [logos, setlogos] = React.useState([]);
  const [reviews, setreviews] = React.useState([]);

  // check for query param of "demo" and set to 1
  const startingtab = demo ? 1 : 0;
  const [tabValue, setTabValue] = React.useState(startingtab);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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

  const getLogos = async () => {
    await axios.get('https://www.zesty.io/-/logos.json').then((e) => {
      setlogos(e.data);
    });
  };
  const getReviews = async () => {
    await axios.get('https://www.zesty.io/-/reviews.json').then((e) => {
      setreviews(e.data);
    });
  };
  React.useEffect(() => {
    getLogos();
    getReviews();
  }, []);

  return (
    <Container>
      <Grid
        container
        direction="row"
        sx={{ background: '#fff', borderRadius: '5px' }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={12} md={12} xs={12}>
          <Grid container>
            {/* left side with custom text */}
            <Grid
              item
              lg={7}
              md={7}
              xs={12}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Custom message */}
              <Container sx={{ py: 1, flex: 3 }}>{message}</Container>

              {/* Review */}
              <Container sx={{ flex: 1 }}>
                <Typography
                  sx={{ fontStyle: 'italic', fontSize: '12px', mb: 1 }}
                >
                  {reviews.length > 0 && reviews[0].review.review}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                  &mdash;
                  {reviews.length > 0 && reviews[0].review.reviewer_title}
                </Typography>
              </Container>
            </Grid>
            {/* right sign with signons */}
            <Grid
              item
              lg={5}
              md={5}
              xs={12}
              sx={{
                background: theme.palette.zesty.zestyWhite,
                borderRadius: '0px 5px 5px 0px',
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="options to start zesty"
                >
                  <Tab label="Self Onboarding" {...a11yProps(0)} />
                  <Tab label="Guided Demo" {...a11yProps(1)} />
                </Tabs>
              </Box>

              <Container sx={{ py: 4 }}>
                <TabPanel value={tabValue} index={0}>
                  <Typography
                    variant="h5"
                    color="black"
                    textAlign={'center'}
                    fontWeight={'bold'}
                    sx={{ mb: 3 }}
                  >
                    Start with Single Sign-on
                    {/* Create your free account */}
                  </Typography>
                  <Stack
                    direction={{ xs: 'column', xl: 'row' }}
                    alignItems={'center'}
                    justifyContent="space-evenly"
                    gap={2}
                    sx={{ m: 3 }}
                  >
                    <LinkComponent
                      image={googleLogo}
                      title="Login with Google"
                      href={googleUrl}
                    />

                    <LinkComponent
                      image={msLogo.src}
                      title="Login with Microsoft"
                      href={`https://auth.api.zesty.io/azure/login`}
                    />
                  </Stack>

                  <CustomForm onSubmit={handleSignUp} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <ZohoFormEmbed />
                </TabPanel>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5, pl: 5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            pb: 20,
          }}
        >
          {logos?.map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', flex: 1, alignItems: 'center' }}
            >
              <ZestyImage
                loading="lazy"
                style={{
                  width: 'auto',
                  maxWidth: '120px',
                  maxHeight: '50px',
                  filter: 'grayscale(1)',
                }}
                alt={item?.customer_name || ''}
                src={item.customer_logo?.data[0]?.url}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

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
        variant="h5"
        color="black"
        textAlign={'center'}
        fontWeight={'bold'}
        sx={{ mb: 2, pt: 1 }}
      >
        Or, start with a new account
        {/* Create your free account */}
      </Typography>
      <Box pb={2} gap={4} display="flex" width={1}>
        <Box width={1} sx={{ pb: 0 }}>
          <FormInput
            customLabelVariant="body1"
            color="secondary"
            name={'firstName'}
            size="small"
            customLabel="First Name"
            formik={formik}
            style={{ background: '#fff' }}
          />
        </Box>
        <Box width={1}>
          <FormInput
            customLabelVariant="body1"
            color="secondary"
            name={'lastName'}
            size="small"
            customLabel="Last Name"
            formik={formik}
            style={{ background: '#fff' }}
          />
        </Box>
      </Box>
      <Box pb={0}>
        <FormInput
          customLabelVariant="body1"
          color="secondary"
          name="email"
          size="small"
          customLabel="Email Address"
          formik={formik}
          placeholder="e.g john@zesty.io"
          style={{ background: '#fff' }}
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
          size="small"
          style={{ background: '#fff' }}
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
        <Stack width={'10rem'}>
          <LoadingButton
            type="submit"
            variant="contained"
            color="secondary"
            loading={formik.isSubmitting}
          >
            <Typography variant="body1">Create Account</Typography>
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  );
};

const LinkComponent = ({
  image = googleLogo,
  title = 'Join with Google',
  href,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <Stack
      onClick={handleClick}
      direction={'row'}
      gap={1}
      alignItems="center"
      sx={{
        border: `1px solid ${grey[500]}`,
        borderRadius: '5px',
        cursor: 'pointer',
        background: '#fff',
      }}
      py={1}
      px={2}
    >
      <Stack>
        <img src={image} alt={title} height={'20px'} width="20px" />
      </Stack>
      <Stack
        sx={{
          '&:hover': {
            opacity: 0.7,
          },
        }}
      >
        <Typography fontWeight={'500'} color={grey[700]} whiteSpace={'nowrap'}>
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};
