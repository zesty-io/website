<img src="https://brand.zesty.io/zesty-io-logo.svg" width="150">

# Zesty.io NextJS Marketing Website 

Marketing Website using NextJS and Zesty.io Headless CMS

## Getting Started

Node and NPM need to be installed. From your command line.

Create a file at the root `.env.local` with `PRODUCTION=false` as the file contents

```
git clone git@github.com:zesty-io/nextjs-website.git

cd nextjs-website

npm install

npm run dev

## open browser to http://localhost:3000/

```

## Syncing Zesty.io Models to Next JS

From the command line at the root of the project run:

```
node scripts/zesty-nextjs.js
```

This will create new files where needed, but will not overwrite existing files.

## AutoDeploy

Any push or merge to the `main` branch will kickoff an auto build script which will update the stage preview in Zesty.io manager and WebEngine preview.

stage: https://zesty-website-m3rbwjxm5q-uc.a.run.app/
prod: https://zesty-website-production-m3rbwjxm5q-uc.a.run.app/

## Contribution

1. Create a branch
2. Make change locally commit
3. Test your changes with `npm run build`
4. If build succeeds, create pull request against `main` (our stage)

## Deployment to Production

After a successfull deploy to `main` create PR from `main` to `production`, upon merge a production build will trigger.


## CTA Components and Forms

Please use these core CTA components through your views. These forms already have validation setup and connect to our remote services.

###  Try Button

A button that trigger a dropdown guiding both a developer and marketers option

`<TryFreeButton>` [View Try Free Button Component](src/components/cta/TryFreeButton.js)

###  Standard Form

A Form that posts to our CRM and has many option to controls inputs

`<StandardFormWithSelect>` [View Standard Form Component](src/components/cta/StandardFormWithSelect.js)

###  Subscribe Form

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

* `utm_campaign` (explicit name of the campaign e.g. NextJSWordpress, promocodeX)
* `utm_medium` (e.g.  cpc, banner, email newsletter)
* `utm_source` (e.g. google, newsletter17, billboard)
* `utm_term` (keywords used in paid search)
* `persona` (e.g. Developer, Marketer)

**Usage**

Not parameters must be all lowercase, one or more or none can be used. `persona` will always default to "marketer"

* https://www.zesty.io/?utm_campaign=NextJSWordpress&persona=developer&utm_source=nextjswebsite&utm_medium=paid%20advertising
* https://www.zesty.io/?utm_campaign=NextJSWordpress&persona=developer&utm_source=adwords&utm_medium=ppc&utm_term=nextjs
* https://www.zesty.io/?persona=developer
* https://www.zesty.io/?utm_term=jquery&persona=developer

## Material Icons

### Using Icons in the WYSIWYG

The icons set we use is Google Material Icons https://fonts.google.com/icons

To use the icons in a WHYSIWYG editor, type in plain text `ICON_icon_name` e.g `ICON_check` use the link to the icons font aboe to learn icon names.

### Using icons in React

**For static icons main in the design**

```
import LoginIcon from '@mui/icons-material/Login';

<LoginIcon>
```

Replace Login with the icon name.

**For dynamic icons that come from the content editor**

```
import Icon from '@mui/material/Icon';

<Icon>{icon_name}</Icon>
```
**For SEO renaming of component**

```
variant="h4" // Inherit Styles
component="h2" // DOM Element
```

## Production VS Stage Logic

The `content` object has access to `content.zestyProductionMode`, a boolean value, true for prod, false for stage/dev.

### Examples

Determining our bases domain for fetch 

```
  let zestyURL = content.zestyProductionMode
  ? process.env.zesty.production
  : process.env.zesty.stage;
``` 

Using our zesty custom useFetch command

```  
const { data: latestArticles, isPending: latestPending } = useFetch(
    '/-/all-articles-hydrated.json?limit=5', content.zestyProductionMode
);
```

Making template level decision (to show things like GTM or scripts)

```
 {props.content.zestyProduction !== false &&
      <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSPH3C8');`}}/>}
```
