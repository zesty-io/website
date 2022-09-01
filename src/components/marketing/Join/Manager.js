import * as React from 'react';
import {
  Typography,
  Grid,
  List,
  ListItemText,
  ListItemIcon,
  Chip,
  ListItemButton,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArticleIcon from '@mui/icons-material/Article';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Manager = ({ DiscordCard, YoutubeCard }) => {
  return (
    <Grid spacing={2} container>
      <Grid xs={8} item>
        <ManagerDocumentation />
      </Grid>
      <Grid xs={4} item>
        <DiscordCard />
        <YoutubeCard />
      </Grid>
    </Grid>
  );
};

export default Manager;

const ManagerDocumentation = () => (
  <Card sx={{}}>
    <CardContent style={{ marginBottom: 0, paddingBottom: 0 }}>
      <Typography gutterBottom variant="h6">
        Getting Started
      </Typography>
      <Typography variant="body1">
        Zesty.io is a structured cloud CMS geared for web.
      </Typography>
    </CardContent>

    <List dense={false}>
      <ListItemButton
        onClick={(event) =>
          handleClick(
            'https://zesty.org/tools/next.js-integration/zesty-content-object',
          )
        }
      >
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText
          primary="Working with the Zesty {content} Object"
          secondary={
            'Learn about the Zesty content object fed to next.js components'
          }
        />
      </ListItemButton>
      <ListItemButton
        onClick={(event) =>
          handleClick(
            'https://zesty.org/tools/next.js-integration/custom-integrations',
          )
        }
      >
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText
          primary="Custom Zesty/Next.js Integrations"
          secondary={
            'Understand how Zesty inegrates to Next.js to implement it ot existing projects.'
          }
        />
      </ListItemButton>
    </List>

    <Typography variant="h6" style={{ margin: '10px 20px' }}>
      FAQs for Marketers
    </Typography>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          Does <Chip label="npm run sync" /> need to for new content?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          No. <Chip label="npm run sync" /> only needs to run after new content
          models are created. New content items of existing content models will
          dynamically load and render. In fact, The only time sync needs to run
          it is when a new content model is created and the code base is not
          aware of it (no matching file in <Chip label="views/zesty/" />
          ). If the code base already knows about a content model and has an
          associated view file with it any new content will automatically
          resolve on the server or your local.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          How is published (production) verse draft (stage) content loaded?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          Each Zesty Instance lanches with two domains, one for published
          content, and another for stage or draft content. You can find these
          domains once you create an instance.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Card>
);
