import { Container,  Stack } from "@mui/material"

function Columns(props) {

    if(props.data.name === 'container') {
        return (
            <Container sx={...props?.data?.styles}>
                {props.children}
            </Container>
        )
    }
    else {
        return (
            <Stack direction={{
                xs:'column',
                sm:'row'
            }} 
            spacing={2}
            sx={...props?.data?.styles} container>
                    {props.children}
            </Stack>
        )
    }

}


export default Columns