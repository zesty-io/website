<img src="https://user-images.githubusercontent.com/729972/155242158-157ca88c-9047-4671-bd09-2bbef7035022.png" width="130">

# Zesty.io NextJS Marketing Website 

Marketing Website using NextJS and Zesty.io Headless CMS

## Getting Started

Node and NPM need to be installed. From your command line.

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

## Contribution

1. Create a branch
2. Make change locally commit
3. Test your changes with `npm run build`
4. If build succeeds, create pull request against `main` (our stage)

## Deploymen to Production

After a successfull deploy to `main` create PR from `main` to `production`, upon merge a production build will trigger.

## Icons in the WYSIWYG

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
