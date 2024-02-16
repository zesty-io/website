import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react'
import EastIcon from '@mui/icons-material/East';

const UseCase = () => {
  return (
        <Stack
      direction="column"
      sx={(theme) => ({
        [theme.breakpoints.up('xl')]: {
          maxWidth: theme.maxWidth,
          mx: 'auto',
        },
      })}
    >
            <Stack alignItems='center' justifyContent='center' mb={{ xs: 8, lg: 10 }}>
        <Typography
          variant="h1"
            fontWeight={800}
              color="text.primary"
              textAlign='center'
        >
          [Use Cases Section Title Here]
        </Typography>
        <Typography mt={1}
                      component='p'
                      variant='h6'
                      whiteSpace='pre-line'
                      color='text.secondary'
                      fontSize='18px'
                      lineHeight='28px'
                      textAlign='center'
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit Fugiat ipsa impedit nostrum

        </Typography>
      </Stack>
       <Stack direction={{ xs: 'column', lg: 'row' }}>
              <Stack
          sx={(theme) => ({
            [theme.breakpoints.up('xs')]: {
              // pt: 4,
              px: 2,
              mb: 3,
            },
            [theme.breakpoints.up('tablet')]: {
              // pt: 6,
              px: 4,
              mb: 6,
            },
            [theme.breakpoints.up('lg')]: {
              width: '60%',
              // py: 9,
              px: 14,
              mb: 0,
            },
            [theme.breakpoints.up('desktopWide')]: {
              // py: '106px',
              px: 14,
            },
          })}
          alignItems='start'
        >


                <Box mb={4}>
          <Typography component="p" variant="h6" fontWeight="bold" color="text.primary"   fontSize="18px"
              lineHeight="28px">
          Own your data
        </Typography>
         <Typography component="p" variant="body1"  color="text.secondary"   fontSize="18px"
              lineHeight="28px">
         Zesty is a unique cloud-native SaaS platform that allows you to own and control your own data while still benefiting from the speed and agility that SaaS platforms offer.
        </Typography>
                <Button href='#' size="large" sx={{mt: 1, ml: -1,  fontWeight: 'bold'}}>Check out DAM</Button>
        </Box>

               <Box mb={4}>
          <Typography component="p" variant="h6" fontWeight="bold" color="text.primary"   fontSize="18px"
              lineHeight="28px">
         Customize workflows for any team
        </Typography>
         <Typography component="p" variant="body1"  color="text.secondary"   fontSize="18px"
              lineHeight="28px">
        Whether you need content edits or legal approval, Zesty provides customizable user governance and workflows to match your business needs.

        </Typography>
                <Button href='#' size="large" sx={{mt: 1, ml: -1,  fontWeight: 'bold'}}>Learn More about Workflows</Button>
        </Box>

                <Box mb={4}>
          <Typography component="p" variant="h6" fontWeight="bold" color="text.primary"   fontSize="18px"
              lineHeight="28px">
          Achieve compliance and security standards
        </Typography>
         <Typography component="p" variant="body1"  color="text.secondary"   fontSize="18px"
              lineHeight="28px">
         Make sure your customer data is secure with a platform that can support your needs. Zesty.io follows SOC II security protocols as well as CCPA, GDPR, and other compliance standards. 

        </Typography>
                <Button href='#' size="large" sx={{mt: 1, ml: -1,  fontWeight: 'bold'}}>Secure CMS Trial</Button>
        </Box>

                 <Box mb={4}>
          <Typography component="p" variant="h6" fontWeight="bold" color="text.primary"   fontSize="18px"
              lineHeight="28px"> 
          Accelerate Your Path to Digital Transformation

        </Typography>
         <Typography component="p" variant="body1"  color="text.secondary"   fontSize="18px"
              lineHeight="28px">
         Unlock new revenue streams through digital channels with our headless CMS, designed to grow with your insurance business, while enjoying the lowest TCO

        </Typography>
        <Button  href='#' size="large" sx={{mt: 1, ml: -1,  fontWeight: 'bold'}}>Custom Pricing | Custom Demo
</Button>
        </Box>
        
       </Stack>
       <Stack width={{ lg: '40%' }}>
          <Box
            component="img"
            src="https://kfg6bckb.media.zestyio.com/Create-Edit-Publish.svg?width=500"
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                objectFit: 'contain',
                maxWidth: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('tablet')]: {
                maxWidth: '100%',
                height: '745px',
              },
              [theme.breakpoints.up('lg')]: {
                maxWidth: '480px',
                height: '100%',
              },
              [theme.breakpoints.between(1201, 1439)]: {
                maxWidth: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('desktopWide')]: {
                maxWidth: '580px',
                height: '100%',
                paddingRight: 3
              },
            })}
          />
        </Stack>
      </Stack>
      </Stack>
  )
}

export default UseCase;