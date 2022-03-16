import React  from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const FeatureItem = ({text}) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} >
        <Box 
            sx={{pt:1, alignItems: 'flex-start'}}
            component={ListItem}
            disableGutters
            width={'auto'}
            padding={0}
        >
            <Box
            component={ListItemAvatar}
            minWidth={'auto !important'}
            marginRight={2}
            >
            <Box
                component={Avatar}
                bgcolor={theme.palette.primary.main}
                width={20}
                height={20}
                
            >
                <svg
                width={12}
                height={12}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
                </svg>
            </Box>
            </Box>
            <Typography
            variant="p"
            dangerouslySetInnerHTML={{__html:text}}
          >
          </Typography>
        </Box>
    </Grid>

    );
};

export default FeatureItem;