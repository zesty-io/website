import { Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

function RichText(props) {
    return <MuiMarkdown options={{overrides:{
        h1: {
            component: Typography,
            props: {
              component: 'h1',
            },
            style:{...props?.data?.styles}
        },
        p: {
            component: Typography,
            props: {
              component: 'p',
            },
            sx:{...props?.data?.styles}
        }
    }}}>{props.data.content}</MuiMarkdown>
}

export default RichText