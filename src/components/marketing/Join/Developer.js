import { Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CodeBlock from 'components/cta/CodeBlock';
import { useTheme } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import StartOutlinedIcon from '@mui/icons-material/StartOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import Youtube from '../../../../public/assets/images/join/youtube.svg';
import Discord from '../../../../public/assets/images/join/discord.svg';
import Twitter from '../../../../public/assets/images/join/twitter.svg';
import Github from '../../../../public/assets/images/join/github.svg';

const Developer = ({
  DiscordCard,
  YoutubeCard,
  DeveloperGuideCard,
  CaseStudiesCard,
}) => {
  const theme = useTheme();
  return (
    <Grid spacing={2} container>
      <Grid xs={12} md={8} item>
        <Card
          variant="outlined"
          sx={{
            minHeight: 600,
            borderRadius: 2,
            pt: 2,
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyDarkText,
            }}
            variant="h6"
          >
            Steps to get started
          </Typography>
          <Typography
            sx={{ mt: 1, color: theme.palette.zesty.zestyZambezi }}
            variant="caption1"
          >
            Starting with Zesty only requires 4 steps:
          </Typography>

          <Timeline
            sx={{
              ml: -7,
              '& .MuiTimelineItem-root:before': {
                flex: 0,
              },
            }}
            position="right"
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <StartOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyDarkText,
                  }}
                  variant="h6"
                  component="span"
                >
                  Start your instance
                </Typography>
                <Typography sx={{ color: theme.palette.zesty.zestyZambezi }}>
                  An instance is your space to store all your content for a
                  particular project
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <CodeOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyDarkText,
                  }}
                  variant="h6"
                  component="span"
                >
                  Leverage the command line
                </Typography>
                <Typography sx={{ color: theme.palette.zesty.zestyZambezi }}>
                  Copy the following code into your command line to leverage
                  Next.js with Zesty
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <CodeBlock
                    bgcolor={'#F7F8F9'}
                    color={theme.palette.zesty.zestyDarkText}
                  />
                </Box>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <SchemaOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyDarkText,
                  }}
                  variant="h6"
                  component="span"
                >
                  Define your schema
                </Typography>
                <Typography sx={{ color: theme.palette.zesty.zestyZambezi }}>
                  Determine what content you want displayed on your page or
                  headless model
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <TextFieldsOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 2, px: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.zesty.zestyDarkText,
                  }}
                  variant="h6"
                  component="span"
                >
                  Create your content
                </Typography>
                <Typography sx={{ color: theme.palette.zesty.zestyZambezi }}>
                  Add content and publish directly from Zesty
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Card>
      </Grid>

      <Grid xs={12} md={4} item>
        <Card
          variant="outlined"
          sx={{
            minHeight: 600,
            borderRadius: 2,
            py: 2,
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyDarkText,
            }}
            variant="h6"
            mb={2}
          >
            Get Involved
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
            <Box
              target="_blank"
              component="a"
              href="https://discord.com/invite/KYYDy8qYBY"
            >
              <Box
                sx={{ width: 40, height: 40 }}
                component="img"
                src={Discord.src}
                alt="discord icon"
              />
            </Box>
            <Box
              target="_blank"
              component="a"
              href="https://www.youtube.com/zesty-io"
            >
              <Box
                sx={{ width: 40, height: 40 }}
                component="img"
                src={Youtube.src}
                alt="youtube icon"
              />
            </Box>
            <Box
              target="_blank"
              component="a"
              href="https://twitter.com/zestyio"
            >
              <Box
                sx={{ width: 40, height: 40 }}
                component="img"
                src={Twitter.src}
                alt="twitter icon"
              />
            </Box>
            <Box
              target="_blank"
              component="a"
              href="https://github.com/zesty-io"
            >
              <Box
                sx={{ width: 40, height: 40 }}
                component="img"
                src={Github.src}
                alt="github icon"
              />
            </Box>
          </Box>
          {/* <DiscordCard /> */}
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <YoutubeCard />
            <DeveloperGuideCard />
            <CaseStudiesCard developer />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Developer;

// const DeveloperDocumentation = () => (
//   <Card sx={{}}>
//     <CardMedia
//       component="img"
//       height="140"
//       image="/assets/images/onboarding/next-js-zesty-docs-header.png"
//       alt="next js and zesty docs"
//     />
//     <CardContent style={{ marginBottom: 0, paddingBottom: 0 }}>
//       <Typography gutterBottom variant="h6">
//         Getting Started
//       </Typography>
//       <Typography variant="body1">
//         Zesty.io is a structured cloud CMS geared for web. When integrated to
//         Next.js, Zesty will dynamically load content to components with writing
//         a fetch request or calling additional functions. It does this by mapping
//         zesty content model names <i>(you create)</i> to components in the
//         project directory <Chip label="/views/zesty/" />
//       </Typography>
//       <Typography gutterBottom variant="body1">
//         This starter project installs with a <Chip label="Homepage" /> content
//         model, edit that component from{' '}
//         <Chip label="/views/zesty/Homepage.js" />
//       </Typography>
//       <Typography style={{ marginBottom: 0, paddingBottom: 0 }} variant="h6">
//         Further Documentation
//       </Typography>
//     </CardContent>

//     <List dense={false}>
//       <ListItemButton
//         onClick={(event) =>
//           handleClick(
//             'https://zesty.org/tools/next.js-integration/zesty-content-object',
//           )
//         }
//       >
//         <ListItemIcon>
//           <ArticleIcon />
//         </ListItemIcon>
//         <ListItemText
//           primary="Working with the Zesty {content} Object"
//           secondary={
//             'Learn about the Zesty content object fed to next.js components'
//           }
//         />
//       </ListItemButton>
//       <ListItemButton
//         onClick={(event) =>
//           handleClick(
//             'https://zesty.org/tools/next.js-integration/custom-integrations',
//           )
//         }
//       >
//         <ListItemIcon>
//           <ArticleIcon />
//         </ListItemIcon>
//         <ListItemText
//           primary="Custom Zesty/Next.js Integrations"
//           secondary={
//             'Understand how Zesty inegrates to Next.js to implement it ot existing projects.'
//           }
//         />
//       </ListItemButton>
//       <ListItemButton
//         onClick={(event) =>
//           handleClick(
//             'https://zesty.org/tools/next.js-integration/manager-redirects-in-next.js',
//           )
//         }
//       >
//         <ListItemIcon>
//           <ArticleIcon />
//         </ListItemIcon>
//         <ListItemText
//           primary="Working with Redirects"
//           secondary={
//             'How redirects connect from the Zesty manager to your Next.js project.'
//           }
//         />
//       </ListItemButton>
//     </List>

//     <Typography variant="h6" style={{ margin: '10px 20px' }}>
//       Zesty/Next.js Integration FAQs
//     </Typography>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Typography>
//           Does <Chip label="npm run sync" /> need to for new content?
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography variant="body2">
//           No. <Chip label="npm run sync" /> only needs to run after new content
//           models are created. New content items of existing content models will
//           dynamically load and render. In fact, The only time sync needs to run
//           it is when a new content model is created and the code base is not
//           aware of it (no matching file in <Chip label="views/zesty/" />
//           ). If the code base already knows about a content model and has an
//           associated view file with it any new content will automatically
//           resolve on the server or your local.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Typography>
//           How is published (production) verse draft (stage) content loaded?
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography variant="body2">
//           Each Zesty Instance lanches with two domains, one for published
//           content, and another for stage or draft content. You can find these
//           domains once you create an instance.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//   </Card>
// );
