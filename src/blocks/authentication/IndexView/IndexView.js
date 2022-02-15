/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Fluid from 'layouts/Fluid';
import Container from 'components/Container';
import ResizableFrame from 'components/ResizableFrame';

const IndexView = () => {
  return (
    <Fluid>
      <Box bgcolor={'alternate.main'}>
        <Container maxWidth={1500} paddingBottom={'16px !important'}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/blocks">
              Components
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/blocks#js--blocks__index-section--application-ui"
            >
              Application UI
            </Link>
            <Typography color="text.primary">Authentication</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Authentication
            </Typography>
            <Typography>
              Auth forms used to register and sign users with email-password and
              OAuth solutions.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/authentication/simple-sign-in-form'}
          title={'Simple sign in form'}
          path={
            './src/blocks/authentication/SimpleSignInForm/SimpleSignInForm.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/authentication/sign-in-form-with-cover-image'}
          title={'Sign in form with cover image'}
          path={
            './src/blocks/authentication/SignInFormWithCoverImage/SignInFormWithCoverImage.js|ts'
          }
          iframeStyles={{ minHeight: 800 }}
        />
        <ResizableFrame
          src={'/blocks/authentication/simple-sign-up-form'}
          title={'Simple sign up form'}
          path={
            './src/blocks/authentication/SimpleSignUpForm/SimpleSignUpForm.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/authentication/sign-up-form-with-cover-image'}
          title={'Sign up form with cover image'}
          path={
            './src/blocks/authentication/SignUpFormWithCoverImage/SignUpFormWithCoverImage.js|ts'
          }
          iframeStyles={{ minHeight: 800 }}
        />
        <ResizableFrame
          src={'/blocks/authentication/auth-form-with-dark-bg'}
          title={'Auth form with dark background'}
          path={
            './src/blocks/authentication/AuthFormWithDarkBg/AuthFormWithDarkBg.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/authentication/reset-password-simple-form'}
          title={'Reset password simple form'}
          path={
            './src/blocks/authentication/ResetPasswordSimpleForm/ResetPasswordSimpleForm.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
