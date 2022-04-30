import React from 'react';
import MuiMarkdown from 'mui-markdown';
import Main from 'layouts/Main';
import Container from '@mui/material/Container'

function replaceImages(mardown){
    // replace image urls with https://raw.githubusercontent.com/zesty-io/zesty-org/master/.gitbook/assets/00-special-headless-set-globals.png

    return markdown
}

export default function Docs(props) {
    console.log(props)
    return (
        <Main>
            <Container>
                <img src="https://raw.githubusercontent.com/zesty-io/zesty-org/master/.gitbook/assets/00-special-headless-set-globals.png" />
                <MuiMarkdown>{props.markdown}</MuiMarkdown>
            </Container>
        </Main>
    )

}

// This gets called on every request
export async function getServerSideProps(ctx) {
    let data = {}

    
    try {
        let url = 'https://raw.githubusercontent.com/zesty-io/zesty-org/master/getting-started/the-connection-between-schema-content-and-code.md'
        const res = await fetch(url)
        console.log(res)
        const text = await res.text();
        console.log()
        data.markdown = text;
    } catch(err){
        data.error = err
    }
    
    // generate a status 404 page
    if (data.error) return { notFound: true }
  
    // Pass data to the page via props
    return { props: data };
  }
  