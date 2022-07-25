import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

// zesty red #FF2A08

export default function DomainPaper({data}) {
        
  return (
    <Paper elevation={5} key={`${data.ZUID}-domain`} pr={0}>
        <Grid container justifyContent='space-between' alignItems="center" pr={0}>
            <Grid item xs={6} pl={3}>
                <Link variant='body2' href={data.domain} underline="hover" target="_blank" rel="noreferrer">
                    {data.domain}
                </Link>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='body2'>{data.branch}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='body2'>{new Date(data.createdAt).toLocaleDateString()}</Typography>
            </Grid>
            <Grid item xs={1} >
                <Button variant='text' color='error' ><DeleteRoundedIcon /></Button>
            </Grid>
        </Grid>
    </Paper>
  );
}
