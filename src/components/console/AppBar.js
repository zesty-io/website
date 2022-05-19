import React from 'react';
import Container from '@mui/material/Container'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function AppBar({url=''}){

    const theme = useTheme();
    const instanceZUID = '8-xyzxyz-xyz'
    const userAppSID = 'xxxxxxxxxx'
    let splitURL = url.split('/')
    let ZestyAPI = new Zesty.FetchWrapper(instanceZUID,userAppSID)

    console.log(ZestyAPI.getModels())
    function generateURLFromSplit(depth,urlSplit){
        let url = `/`
        for (i=0;i<=depth;i++){
            url = url + `${urlSplit[i]}/`
        }
        return url
    }
    return (
        <Box sx={{backgroundColor: theme.palette.background.level2, padding: '12px 0', marginTop: '10px'}}>
                <Container>
                    <Breadcrumbs aria-label="breadcrumb">
                        {splitURL.map((url,index) =>
                         <Link 
                            underline="hover" 
                            color="inherit" 
                            href="/docs/">
                            Docs
                        </Link>
                        )}
                       
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                            >
                            Core
                        </Link>
                        <Link
                            underline="hover"
                            color="text.primary"
                            href="/material-ui/react-breadcrumbs/"
                            aria-current="page"
                            >
                            Breadcrumbs
                        </Link>
                    </Breadcrumbs>

                </Container>
            </Box>
    )
}