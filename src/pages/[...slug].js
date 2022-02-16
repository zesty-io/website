import * as Zesty from '../components/zesty-models'
import { useRouter } from 'next/router'

const ZestyLoader = (content) => {
  const router = useRouter()
  const slug = router.query.slug || []
  const Model = Zesty['Homepage']
 
  return (<>
          <h1>Slug: {slug.join('/')}</h1>
          <Model content={content}></Model>
          </>);
}

export default ZestyLoader

// This gets called on every request
export async function getServerSideProps(context,req,res) {

    let url = context.resolvedUrl
    // url is missing ending forward slash, add it (zesty expect one)
    if(url.substr(-1) !== '/') {
        url = url + '/'
    }

    // Fetch data from Zesty.io toJSON API
    const resp = await fetch(`https://www.zesty.io${url}?toJSON`)
    const data = await resp.json()
  
    // Pass data to the page via props
    return { props:  data  }
  }
  