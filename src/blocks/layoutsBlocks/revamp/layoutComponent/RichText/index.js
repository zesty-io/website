import { Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

function RichText(props) {
    return <MuiMarkdown options={{overrides:{
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