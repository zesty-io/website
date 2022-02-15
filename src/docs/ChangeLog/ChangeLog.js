import React from 'react';
import PropsTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';

const BlockItem = ({ versionTitle, date, list }) => (
  <Box>
    <Typography variant="h4" component="h4" sx={{ fontWeight: 700 }}>
      {versionTitle}
    </Typography>
    <Typography
      variant="body2"
      component="p"
      color="text.secondary"
      sx={{
        marginTop: 1,
        marginBottom: 2,
        fontWeight: 700,
      }}
    >
      {date}
    </Typography>
    <ul>
      {list.map((item, i) => (
        <Box component={'li'} key={i} marginY={1 / 2} marginX={0}>
          <Typography variant="body1" component="p">
            {item}
          </Typography>
        </Box>
      ))}
    </ul>
  </Box>
);

BlockItem.propTypes = {
  versionTitle: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
  list: PropsTypes.array.isRequired,
};

const ChangeLog = () => {
  return (
    <FixedLayout>
      <Container>
        <BlockItem
          versionTitle="v4.6.0"
          date="December 17, 2021"
          list={[
            'Update npm dependencies to the latest versions',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v4.5.0"
          date="December 11, 2021"
          list={[
            'Add new complete e-commerce demo',
            'Add new e-commerce product detail building block',
            'Improve the visual design of the e-commerce building block components',
            'Clean-up /src/layouts components',
            'Move ThemeModeToggler into the /src/components/ folder',
            'Create a new TopNav re-usable component inside the /src/components folder',
            'Improve the documentation',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v4.4.0"
          date="November 27, 2021"
          list={['Add new 23 e-commerce components (MUI building blocks)']}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v4.3.0"
          date="November 4, 2021"
          list={[
            'Add new 135 components (MUI building blocks)',
            'Code base structure improvements',
            'Code style fixes',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v4.2.0"
          date="October 7, 2021"
          list={[
            'Add 4 new pages',
            'Redesign header and sidebar navigation',
            'Fix vulnerability warnings of NPM dependencies',
            'Code clean up.',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v4.1.0"
          date="September 30, 2021"
          list={[
            'MUI version update',
            'Remove `node-sass` from the package dependencies',
            'Remove `react-images` from the package dependencies',
            'Add `react-image-lightbox` into the package dependencies',
            'Remove `/src/scss` folder and its usages from the code as they are no longer needed',
            'Improved the module import order',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v4.0.0"
          date="September 11, 2021"
          list={[
            'Complete migration from MUI v4 to MUI v5',
            'Update versions of npm dependencies including react, next.js, gatsby.js and related libraries',
            'Code architectural changes - removing atomic components and compositions and using pure MUI components',
            'Remove the Leaflet and react-leaflet libraries and their dependencies',
            'Foundation improvements (color palette, shadows, typography)',
            'Introducing new illustrations',
            'Remove the Font Awesome library and its dependencies (using only MUI icons and Hero Icons - https://heroicons.com/)',
            'AOS - section animation library optimization',
            'Replacing SwiperJS with React Slick',
            'Added form validation using Formik and YUP',
            'Removing the "WithLayout.js" HOC and introducing "Page" component as an alternative',
            'Added Container component as a common reusable component to manage the page sections (padding, margins, width, max-width, etc.)',
            'Added new layouts (Fluid and Fixed with right sidebar)',
            'Code clean-up & optimization',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v3.2.2"
          date="Feb 18, 2021"
          list={['Bug fix: Server side rendering']}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v3.2.1"
          date="Jan 16, 2021"
          list={[
            'Added new atomic component DarkModeToggler',
            'Replacing the MUI form toggler with the custom created DarkModeToggler component',
            'Handling theme mode changes with React state instead of reloading the website',
            'The "./src/utils.js" file is removed',
            'Added "WithLayout" HOC in "./src" folder to handle the layout changes',
            'The "RouteWithLayout" component is deleted',
            'The "ContactForm" component is moved from "common" folder into the "organisms"',
            '"common" folder is deleted from "./src" folder',
            'NextJS\'s "_app.js" file is cleaned-up',
            'GatsbyJS\'s "TopLayout.js" file in "./plugins" folder is cleaned-up',
            'Added a new page in documentation to keep the changelog internally in the website',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v3.1.1"
          date="Jan 6, 2021"
          list={[
            'Replace react-styleguidist with custom documentation that can be extended by developers',
            'Improve the selling product pages, redesign the overview page, fix dark mode screenshots, host images in a dedicated server',
            'Code clean-up & optimization',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v3.0.1"
          date="Dec 16, 2020"
          list={[
            'Layout fixes in mobile and tablet screen sizes',
            'Code cleanup',
            'Removing unnecessary code dependencies',
            'npm scripts naming changes',
            'Initial support for TypeScript under the "Standard Plus" and "Extended" license',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v3.0.0"
          date="Nov 23, 2020"
          list={['Add GatsbyJS support']}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v2.1.0"
          date="Nov 17, 2020"
          list={['Add dark mode support']}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v2.0.0"
          date="Nov 8, 2020"
          list={[
            'Consolidate the support of CRA & Next.js under the same version',
            'Upgrade dependencies to the latest version, e.g. Next.js',
            'Bug Fixes',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v1.0.3"
          date="July 29, 2020"
          list={[
            'Adapt Accordion component with MUI new naming convention changes',
            'Fix img display block issues',
            'Fix npm installed packages vulnerability issues',
          ]}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v1.0.2"
          date="July 24, 2020"
          list={['View components cleanup']}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v1.0.1"
          date="July 22, 2020"
          list={['Fix cross-platform support for npm scripts and commands']}
        />
      </Container>
      <Container paddingTop={'0 !important'}>
        <BlockItem
          versionTitle="v1.0.0"
          date="July 18, 2020"
          list={['Initial release']}
        />
      </Container>
    </FixedLayout>
  );
};

export default ChangeLog;
