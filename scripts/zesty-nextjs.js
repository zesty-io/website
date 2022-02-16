// reach out to zesty's url map
// create file structure that maps over the zesty instance
// in each file, create the script to load props into the file

// pseudo code

// BUILDING COMPONENTS
// map through each content model: use /-/instant/
// get content model that matches the model of above item requested
// create the file for the content model 


// DYNAMICALLY LOAD COMPONENTS INTO PAGE
// map through the uri requested
// request the ?toJSON endpoint of the current request path part
// get the content model zuid: meta > model > zuid 
// load the content model component into the page

// COMPONENT FILE
// pass a full content obj of item from ?toJSON response
// component file will now have passed object to call data within its file
// 

// 0a
// these env var values can be extracted from an initial login, but for now we will 
// prepopulate to get started faster

// set domain, consider that domains have password protection

let zestyConfig = {
    "domain_stage" : `https://kfg6bckb-dev.webengine.zesty.io`,
    "domain_published" : `https://www.zesty.io`,
    "password" : `12345`,
    "auth" : ``, // this can set APP_SID as cookie to get access, or a user login
    "src_dir" : `src` // leave blank for src/ as default
}
// 0b include needed packages
const fs = require("fs") // need to check folder and write files

// 1
// spot check variables and 

function checkVariables(zestyConfig){
    // verify https is or isnt there
    // verify the src_dir exists and is a folder
    // return true or err with message
    console.log(`Working Project Directory: ${process.cwd()}`);
    const workingDir = process.cwd();
    const srcDir = workingDir + zestyConfig.src_dir
}

checkVariables(zestyConfig)

// 2
// make network request to ensure the headless or hybrid mode is turned on, return errors or docs otherwise
// note at this point, the CLI can verify, ask for sign in, and make the setting change via the api

// once connection is verified

// 3
// hit gql end point ${domain_stage}/-/gql/ to access the models to create the base components and index.js list
// mkdir ${src_dir}/components
// iterate through each { models: [] } and create a file with the gqlModelName
// use a javascript started template to start it
// use the models fields maplist in a premade comment to help the developer
// File Example Homepage.js
    // a. comment saying this is a zesty component, link to docs, show fields and model info, also other info on relationships
    // b. File, loop through 
    /**
     function Homepage({content}) {
        return (
            <>
            <h2 dangerouslySetInnerHTML={{__html:content.title}}></h2>
            <div dangerouslySetInnerHTML={{__html:content.content}}></div>
            </>
        );
        };

        export default Homepage;
     */

// 4 create components/index.js 
// this file imports all the files we created, which is used a single import on the page files
        /** File Example
         *  index.js
            
            import Homepage from './Homepage'
            
            export {
                Homepage
            }
         */

// 5 create the catch all dynamic route
// [[...slug]].js
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
 /** File Example
  * 
  import { useRouter } from 'next/router'
  import * as Zesty from '../components/zesty-models'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Header />
      <h1>Slug: {slug.join('/')}</h1>
    </>
  )
}

export default Comment
  * 
  */


// 6 Create ZestyBrowser component which shows in dev instances the model and fields and lets you browse through other model/fields
// this overlay exists on page
