import React from 'react';
import styles from './DancingLogo.module.css';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export const DancingLogo = ({animation='hello'}) => {

    // ANI?! https://memegenerator.net/img/instances/58837555.jpg
    const ani = () => undefined !== styles[animation] ? styles[animation] : styles.still;
    
    // import zesty theme
    const theme = useTheme();
    return (
    <Box sx={{position: 'relative', height: '200px',width: '100%'}}>
        <img className={ani(animation)} src="https://brand.zesty.io/zesty-io-logo.svg" alt="Zesty.io Logo" />
    </Box>
  )
}
