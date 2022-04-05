import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }
    if(col.match(/F/ig) !== null && col.match(/F/ig).length > 2){
        return '#C3CDDF';
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
export default function ColorBlock({hex="#000000",name="Black"}) {
    const [showCopy, setShowCopy] = React.useState(false);
    const [icon, setIcon] = React.useState('content_copy');

    const theme = useTheme('light');  
    return (
            <Box sx={{
                width: '100%',
                paddingTop: '100%',
                backgroundColor: 'grey',
                position: 'relative'}}>
                <Paper 
                    onMouseOver={() => setShowCopy(true)}
                    onMouseOut={() => {
                        setShowCopy(false)
                        setIcon('content_copy')
                    }}
                    onClick={() => {
                        navigator.clipboard.writeText(hex);
                        setIcon('check_circle')
                    }}
                    
                    sx={{
                    textAlign: 'center',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    elevation: 2,
                    bgcolor: hex,
                    borderRadius: 0,
                    cursor: 'pointer',
                    color: theme.palette.zesty.zestyWhite
                    }}>
                    <Typography variant="p" sx={{position: 'absolute', color: LightenDarkenColor(hex,100), bottom: '10px', right: '10px'}} textAlign="right">{name}</Typography> 
                    <Typography variant="p" sx={{color: LightenDarkenColor(hex,100), position: 'absolute', top: '5px', left: '15px'}}>{hex}</Typography>    
                    
                    
                    {showCopy && 
                        <Box sx={{
                            position: 'absolute',
                            
                            padding: '0',
                            borderRadius: '5px',
                            top: '5px',
                            right: '5px',
                            zIndex: '10',
                            display: 'flex',
                            alignItems: 'center',
                            overflow: 'hidden',
                            color: LightenDarkenColor(hex,100)
                            }} 
                            color="info">
                            
                            <Icon>{icon}</Icon>
                    </Box>}
                </Paper>
            </Box>
    );
}