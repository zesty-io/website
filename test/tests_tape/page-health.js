/**
 * Page Health
 * 
 * Checks for pages loading in stage or production
 * 
 */

const env = 'prod';
const prodURL = 'https://www.zesty.io';
const stageURL = 'https://kfg6bckb-dev.webengine.zesty.io';
const routingPath = '/-/headless/routing.json'



 const test = require("tape-async");
 const fetch = require("node-fetch");
 const sleep = (milliseconds) => {
     return new Promise(resolve => setTimeout(resolve, milliseconds))
 }
 
 
  
  //testArray = [testArray[0]]

async function getTestingRoutes(){
    let routingEndpoints = env == 'prod' ? prodURL + routingPath : stageURL + routingPath;

    const res = await fetch(routingEndpoints)
    const json = await res.json()
    
    return json;

}

async function runTests(){
    // get routes once
    let routes = await getTestingRoutes();
    routes = routes.filter(r => !r.uri.includes('mindshare'));
    let origin = env == 'prod' ? prodURL : stageURL;
  

    for(let i = 0; routes.length > i; i++){
            await test(`${routes[i].title}: ${routes[i].url}`, async function (t) {
            
                    // sleep to take 
                    await sleep(1000) 
                    let ts = new Date().getTime();
                    // use for getting a non catch version
                    let path = `${routes[i].uri}?${ts}&gclid=2345904509725489709`

                    const response = await fetch(origin+path,{
                        method: 'GET',
                        redirect: 'manual',
                        follow: 0
                    })

                    await response.text().then(function(text) {
                        
                        let pass = false
                        // check for 200
                        if (response.status == 200) {
                            t.pass(`${origin}${path} Is rendering a 200.`);
                            pass = true
                        }
                        // check for 404
                        if (response.status == 404) {
                            t.pass(`${origin}${path} Is is not published`);
                            pass = true
                        }

                        if (text.includes('error occurred on')) {
                            t.fail(`${origin}${path} page is not rendering correctly.`);
                            pass = false
                        }

                        if(pass != true) {
                            t.fail(response.status + ' Response.');
                            
                        }
                });

                
            })
   

    }

   
}


runTests();