import * as React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Developer from './Developer';
// import Marketer from './Marketer';
// import Manager from './Manager';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { LoadingButton } from '@mui/lab';

export const Onboarding = ({ instanceUrl = '', loading = false }) => {
  const handleClick = (url) => {
    window.open(url, '_blank');
    window.location.reload();
  };
  // const cards = {
  //   DiscordCard,
  //   YoutubeCard,
  //   DeveloperGuideCard,
  //   CaseStudiesCard,
  //   TrainingVideoCard,
  // };

  return (
    <>
      <Container>
        <Box paddingY={3}>
          {loading ? (
            <Stack my={1}>
              <Typography variant="h5" color="primary">
                YouR instance is being created.{' '}
              </Typography>
              <Typography variant="h6" color={'primary'}>
                This process may take up to 60 seconds.
              </Typography>
            </Stack>
          ) : (
            <Stack my={1}>
              <Typography variant="h2" color="primary">
                Success
              </Typography>
            </Stack>
          )}
          <LoadingButton
            loading={loading}
            variant="contained"
            color={'primary'}
            onClick={() => handleClick(instanceUrl)}
            startIcon={<RocketLaunchIcon />}
          >
            Go to your Instance
          </LoadingButton>
        </Box>
        {/* <Box paddingY={3}>
          <Divider>
            <Chip label="More Resources" />
          </Divider>
        </Box> */}
        {/* {role == 'Marketer' && <Marketer {...cards} />}
        {role == 'Developer' && <Developer {...cards} />}
        {role == 'Manager' && <Manager {...cards} />} */}
      </Container>
    </>
  );
};

// const ScheduleOnboardingSpecialist = ({
//   link = 'https://www.zesty.io/meet/',
//   handleClick,
// }) => (
//   <Card sx={{ marginBottom: '16px' }}>
//     <CardActionArea onClick={() => handleClick(link)}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/assets/images/onboarding/discord.png"
//         alt="discord header"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Community Chat
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Intereact with the community and Zesty.io developers. Ask questions,
//           share ideas and projects. Click here to be invited.
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
// );

// const DiscordCard = ({ handleClick }) => (
//   <Card sx={{ marginBottom: '16px' }}>
//     <CardActionArea
//       onClick={() => handleClick('https://discord.gg/KYYDy8qYBY')}
//     >
//       <CardMedia
//         component="img"
//         height="90"
//         image="/assets/images/onboarding/discord.png"
//         alt="discord header"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Community Chat
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Intereact with the community and Zesty.io developers. Ask questions,
//           share ideas and projects. Click here to be invited.
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
// );

// const YoutubeCard = ({ handleClick }) => {
//   const theme = useTheme();
//   return (
//     <Card sx={{}}>
//       <CardActionArea
//         onClick={() =>
//           handleClick('https://www.youtube.com/watch?v=Y2cux28b9q0')
//         }
//       >
//         <CardMedia
//           component="img"
//           height="90"
//           image="/assets/images/onboarding/next-js-zesty-docs-header.png"
//           alt="youtube header"
//         />
//         <CardContent>
//           <Typography
//             variant="h6"
//             sx={{ color: theme.palette.zesty.zestyDarkText }}
//             component="p"
//           >
//             Start with Next.js in 10 minutes
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: theme.palette.zesty.zestyZambezi }}
//           >
//             Watch this quick tutorial to see how to leverage the command line
//             with Zesty and Next.js
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// const CaseStudiesCard = ({ developer, marketer, handleClick }) => {
//   const theme = useTheme();
//   return (
//     <Card sx={{}}>
//       <CardActionArea
//         onClick={() => handleClick('https://www.zesty.io/clients/')}
//       >
//         {marketer && (
//           <CardMedia
//             component="img"
//             height="140"
//             image="/assets/images/join/casestudies.png"
//             alt="youtube header"
//           />
//         )}

//         <CardContent>
//           <Typography
//             variant="h6"
//             sx={{ color: theme.palette.zesty.zestyDarkText }}
//             component="p"
//           >
//             Case studies
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: theme.palette.zesty.zestyZambezi }}
//           >
//             See what others have created with Zesty
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// const DeveloperGuideCard = ({ handleClick }) => {
//   const theme = useTheme();
//   return (
//     <Card sx={{}}>
//       <CardActionArea onClick={() => handleClick('https://www.zesty.org')}>
//         <CardContent>
//           <Typography
//             variant="h6"
//             sx={{ color: theme.palette.zesty.zestyDarkText }}
//             component="p"
//           >
//             Developer guides
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: theme.palette.zesty.zestyZambezi }}
//           >
//             Access the quick start guide, plus in-depth guides to the Zesty
//             platform
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };
// const TrainingVideoCard = ({ handleClick }) => {
//   const theme = useTheme();
//   return (
//     <Card sx={{}}>
//       <CardActionArea
//         onClick={() =>
//           handleClick(
//             'https://www.youtube.com/playlist?list=PLExwmKy69_tBEDIzllYm81ELok4YGEshr',
//           )
//         }
//       >
//         <CardContent>
//           <Typography
//             variant="h6"
//             sx={{ color: theme.palette.zesty.zestyDarkText }}
//             component="p"
//           >
//             Training Videos
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: theme.palette.zesty.zestyZambezi }}
//           >
//             escription would be: Watch our series of training videos to get
//             started on Zesty
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };
