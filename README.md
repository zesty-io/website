<img src="https://brand.zesty.io/zesty-io-logo.svg" width="150">

# Zesty.io NextJS Marketing Website

Marketing Website using NextJS and Zesty.io Headless CMS

## Getting Started

Node and NPM need to be installed. From your command line.

Create a file at the root `.env.local` with `PRODUCTION=false` as the file contents

```bash
git clone git@github.com:zesty-io/nextjs-website.git

cd nextjs-website

npm install

npm run dev

## open browser to http://localhost:3000/

```

## Syncing Zesty.io Models to Next JS

From the command line at the root of the project run:

```jsx
node scripts/zesty-nextjs.js
```

This will create new files where needed, but will not overwrite existing files.

## AutoDeploy

Any push or merge to the `stage` branch will kickoff an auto build script which will update the stage preview in Zesty.io manager and WebEngine preview.

stage: https://zesty-website-m3rbwjxm5q-uc.a.run.app/
prod: https://zesty-website-production-m3rbwjxm5q-uc.a.run.app/

## Contribution

1. Create a branch
2. Make change locally commit
3. Test your changes with `npm run build`
4. If build succeeds, create pull request against `stage` (our stage)

## Deployment to Production

After a successfull deploy to `stage` create PR from `stage` to `production`, upon merge a production build will trigger.

## CTA Components and Forms

Please use these core CTA components through your views. These forms already have validation setup and connect to our remote services.

### Try Button

A button that trigger a dropdown guiding both a developer and marketers option

`<TryFreeButton>` [View Try Free Button Component](src/components/cta/TryFreeButton.js)

### Standard Form

A Form that posts to our CRM and has many option to controls inputs

`<StandardFormWithSelect>` [View Standard Form Component](src/components/cta/StandardFormWithSelect.js)

### Subscribe Form

A simple form that asks for user email

`<SubscribeCTA>` [View Subscribe Component](src/components/cta/SubscribeCTA.js)

### Developer Codeblock Starter

A one-line code block that shows developer how to start from the command line

`<CodeBlock>` [View Code Block Component](src/components/cta/CodeBlock.js)

## Lead Capture

All lead capture funnels from the above components into one of two cloud functions which connect to ZOHO CRM.

1. Marketing Subscribe: [GCP Link](https://console.cloud.google.com/functions/details/us-central1/zohoEmailSubscribe?env=gen1&project=zesty-dev) [Github Link](https://github.com/zesty-io/gcp-cf/blob/940b2d71144feb66dffe3b405137c334c595f869/zoho/index.js#L65) [Trigger](https://us-central1-zesty-dev.cloudfunctions.net/zohoEmailSubscribe) Both Gisele and Randy have access to deploy this.
2. Lead Capture: [GCP Link](https://console.cloud.google.com/functions/details/us-central1/zoho?env=gen1&project=zesty-prod) [Github Link](https://github.com/zesty-io/gcp-cf/blob/master/zoho/index.js) [Trigger](https://us-central1-zesty-prod.cloudfunctions.net/zoho) Only Randy or the egneinerr team has access to deploy this.

## Marketing URL Parameters

Marketers may collect campaign data through the website by using `UTM` values as outlined [in this document](https://support.google.com/analytics/answer/1033863?hl=en#zippy=%2Cin-this-article)

**URL Query Parameter Options**

Append to the end of a URL after a `?` like `?utm_campaign=promocodeX`

- `utm_campaign` (explicit name of the campaign e.g. NextJSWordpress, promocodeX)
- `utm_medium` (e.g. cpc, banner, email newsletter)
- `utm_source` (e.g. google, newsletter17, billboard)
- `utm_term` (keywords used in paid search)
- `persona` (e.g. Developer, Marketer)

**Usage**

Not parameters must be all lowercase, one or more or none can be used. `persona` will always default to "marketer"

- https://www.zesty.io/?utm_campaign=NextJSWordpress&persona=developer&utm_source=nextjswebsite&utm_medium=paid%20advertising
- https://www.zesty.io/?utm_campaign=NextJSWordpress&persona=developer&utm_source=adwords&utm_medium=ppc&utm_term=nextjs
- https://www.zesty.io/?persona=developer
- https://www.zesty.io/?utm_term=jquery&persona=developer

## Material Icons

### Using Icons in the WYSIWYG

The icons set we use is Google Material Icons https://fonts.google.com/icons

To use the icons in a WHYSIWYG editor, type in plain text `ICON_icon_name` e.g `ICON_check` use the link to the icons font aboe to learn icon names.

### Using icons in React

**For static icons main in the design**

```jsx
import LoginIcon from '@mui/icons-material/Login';

<LoginIcon>
```

Replace Login with the icon name.

**For dynamic icons that come from the content editor**

```jsx
import Icon from '@mui/material/Icon';

<Icon>{icon_name}</Icon>;
```

**For SEO renaming of component**

```jsx
variant = 'h4'; // Inherit Styles component = 'h2'; // DOM Element
```

# Production VS Stage Logic

The `content` object has access to `content.zestyProductionMode`, a boolean value, true for prod, false for stage/dev.

## Examples

### Determining our bases domain for fetch

```jsx
let zestyURL = content.zestyProductionMode
  ? process.env.zesty.production
  : process.env.zesty.stage;
```

### Using our zesty custom useFetch command

```jsx
const { data: latestArticles, isPending: latestPending } = useFetch(
  '/-/all-articles-hydrated.json?limit=5',
  content.zestyProductionMode,
);
```

### Making template level decision (to show things like GTM or scripts)

```jsx
{
  props.content.zestyProduction !== false && (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSPH3C8');`,
      }}
    />
  );
}
```

# Working with Content from Zesty

## Defaulting missing to content

See this example for loading dyanmic content and not breaking
https://github.com/zesty-io/nextjs-website/blob/869acdd08836c74fd9f6a602eddd01a9073dcc11/src/views/zesty/About.js#L51

# Using theme colors for custom styles

## Example usage

```jsx
import { useTheme } from '@mui/material';

const App = () => {
  const theme = useTheme();

  return <div style={{ color: theme.palette.primary.main }}>Hello World</div>;
};
```

using Styled Components or Emotion js

```jsx
import styled from '@emotion/styled';
import { useTheme } from '@mui/material';

const CustomButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.palette.zesty.zestyOrange};
`;

const App = () => {
  const theme = useTheme();

  return <CustomButton theme={theme}>Hello World</CustomButton>;
};
```

For more details you can browse to `src/theme` directory for complete list of themes.

```
???????     ????????? PhoneSkeleton.js
????????? theme
??????? ????????? index.js
??????? ????????? palette.js
??????? ????????? shadows.js
????????? utils
??????? ????????? index.js

```

# Marketplace

To auto set the instance zuid, you can pass the query param `?instanceZUID=8-xyz-xyz` to any page in the zesty.io website. This will auto set `ZESTY_WORKING_INSTANCE` and overwrite.

_Available cookies_ 
 
- ZESTY_WORKING_INSTANCE - instance zuid for checking support, marketplace, docs, etc. 
- APP_SID - auth token

# Github Data Fetching For Roadmap 

## Requirements

Must create `.env` file and add `NEXT_PUBLIC_GITHUB_AUTH`

```
NEXT_PUBLIC_GITHUB_AUTH="Personal Auth Token"
```

Github `Personal Auth Token` can be generated from https://github.com/settings/tokens

- Make sure to set token to no expiration
- Set Token scope to `public_repo` `read:org` `read:discussion`

### Settings

settings can be found on `pages/[...slug]`

```jsx
const settings = {
  organization: `"Zesty-io"`,
  projectNumber: data.project_number,
  columns: data.max_column,
  cards: data.max_card,
  discussions: data.max_discussion,
};
```

- `organization`: Organization where the data should be pulled
- `ProjectNumber`: Github Project ID
- `columns`: Number of columns that can be shown to the page
- `cards`: Number of cards that can be shown to the columns
- `discussion`: Number of discussion can be shown to the discussion columns

These data can be updated or set from the CMS `roadmap` model

# Updating Email Signature

To update the image and link of the email signature:

1. Update the image in this repository located at [public/assets/images/email-banner.png](https://github.com/zesty-io/nextjs-website/blob/main/public/assets/images/email-banner.png) and push that through main (stage) and production branches
2. Update the link in zesty manager under globals https://8-aaeffee09b-7w6v22.manager.zesty.io/content/6-984410-xnfd99/7-d60cd0-64nw39 there is a field named `Email Announcement URL link: email_announcement_url` save and publish the change

How it works is the image in the signature is pointed to a static image url reference which on zesty.io next site, which is https://www.zesty.io/assets/images/email-banner.png and the URL in the points to a custom parsley file that setups up a 301 redirect to the link edited in globals, this is the file https://8-aaeffee09b-7w6v22.manager.zesty.io/code/file/views/11-f49eb1abdb-h0nt9b https://www.zesty.io/email/annoucement-link.html

# Using the ZestyAPI or fetchwrapper

[ZestyAPI](https://github.com/zesty-io/fetch-wrapper) is global and can be access using the example below

```jsx
import { useZestyStore } from 'store';

const ZestyAPI = useZestyStore((state) => state.ZestyAPI);

console.log(ZestyAPI.verify(token));
```

ZestyAPI has two modes (development and production) which can be access using the .env file

Example for dev

```jsx
PRODUCTION = false;
```

# Working in this repo

## Folder and file structure

- Components should live in their specifics application folders
- Shared or common component should live in the blocks folders
- All images should be uploaded to the CDN with the exception of `image-banner.png`. SVG's may be committed to the repository, but it's suggested to upload them into CDN

## Branch Deployment Flow

- Any merge to `main` will auto deploy to stage (webengine)
- Any merge to `production` will deploy to `production` (zesty.io)
- Only the `main` branch when approved should be merge to `production`

### Tests

Tests are located `test`, tests use the jest package. Tests are run like

```
npm run test
```

[Jest](https://github.com/facebook/jest) is recommended testing tool for unit / integration testing by facebook , support async out of the box , has snapshot testing / coverage report , detect file with `*.test.js`/ `*.spec.js` and great community. Jest is implemented by installing the npm packages jest and react testing library then Jest has two file configuration which are `jest.config.js` and `jest.setup.js`. To begin testing with jest just run `npm run test` and it will find all files inside this directory that has filename matching this `*.test.js`/ `*.spec.js` and it will start the tests and after each test it will provide a summary in the console log whether the test is passed or failed.

## Auto Deployment

- Build time takes about 5 minutes
- Auto deployment run through cloud run and cloud build integration with github
- This occurs in the zesty-dev google cloud project
