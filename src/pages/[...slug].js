import * as Zesty from '../components/zesty-models'
import { useRouter } from 'next/router'
import NotFoundCover from 'views/NotFoundCover';

const ZestyLoader = (content) => {
    const router = useRouter()
    const slug = router.query.slug || []
    
    // check for a 404 page, this response triggers if zesty failed to hydrate
    if(content.hasOwnProperty('error') && content.error){
        return (<NotFoundCover/>)
    }

    // get model name
    const modelName = prepareModelName(content.meta.model_name)

    // dynamically set the model
    const Model = Zesty[modelName]

    // default render output dynamically resolves the model component from components/models
    return (<>
          <h1>Slug: {slug.join('/')} <br/>Model: {modelName}</h1>
          <Model content={content}></Model>
        </>);
    
}

export default ZestyLoader

// converts a model's name to match Zesty GQL name conversion
function prepareModelName(name) {

    if(name.substring(-3,3) == 'ies') {
        name = name.substring(0,-3) + 'y';
    }
    name = name.replace('_',' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.replace(' ','');
    return name.replace(/s$/,''); // removes plural
}


// This gets called on every request
export async function getServerSideProps(context) {

    let url = context.resolvedUrl
    // url is missing ending forward slash, add it (zesty expects one)
    if(url.substr(-1) !== '/') {
        url = url + '/'
    }
    // remove first forward slash
    url = url.replace(/^\//, '');

    // build relative zesty toJSON url to fetch JSON 
    const zestyURL = `https://www.zesty.io/${url}?toJSON`
    console.log('here',zestyURL)

    // Fetch data from Zesty.io toJSON API
    const res = await fetch(zestyURL)

    // set error to 404 page as default
    let data = {error: true} 

    // otherwise set response to data
    if(res.status == 200){
        data = await res.json()
    } 

    // Pass data to the page via props
    return { props: data }
    
    
  }
  