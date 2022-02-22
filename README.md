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

## AutoDeploy

Any push or merge to the `main` branch will kickoff an auto build script whcih will update the stage preview in Zesty.io manager and WebEngine preview. 

## Quick Create Script

Use a script to read the zesty instance headless map to create page files that map up to model setup in zesty (js files and the server side rendering script to preload the props).