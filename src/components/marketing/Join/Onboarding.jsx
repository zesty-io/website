import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  Container,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Developer from './Developer';
import Marketer from './Marketer';
import Manager from './Manager';

const handleClick = (url) => {
  window.open(url, '_blank');
};

export default function Onboarding({ role }) {
  const cards = {
    DiscordCard,
    YoutubeCard,
    DeveloperGuideCard,
    CaseStudiesCard,
    TrainingVideoCard,
  };
  return (
    <>
      <Container>
        <Box paddingY={3}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="center"
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleClick('https://www.zesty.io/meet/')}
            >
              Schedule onboarding
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              variant="outlined"
              color={'secondary'}
              onClick={() =>
                handleClick('https://accounts.zesty.io/instances/create')
              }
            >
              Start your project
            </Button>
          </Stack>
        </Box>
        <Box paddingY={3}>
          <Divider>
            <Chip label="More Resources" />
          </Divider>
        </Box>
        {role == 'Marketer' && <Marketer {...cards} />}
        {role == 'Developer' && <Developer {...cards} />}
        {role == 'Manager' && <Manager {...cards} />}
      </Container>
    </>
  );
}

const ScheduleOnboardingSpecialist = ({
  link = 'https://www.zesty.io/meet/',
}) => (
  <Card sx={{ marginBottom: '16px' }}>
    <CardActionArea onClick={() => handleClick(link)}>
      <CardMedia
        component="img"
        height="140"
        image="/assets/images/onboarding/discord.png"
        alt="discord header"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Community Chat
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Intereact with the community and Zesty.io developers. Ask questions,
          share ideas and projects. Click here to be invited.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const DiscordCard = () => (
  <Card sx={{ marginBottom: '16px' }}>
    <CardActionArea
      onClick={() => handleClick('https://discord.gg/KYYDy8qYBY')}
    >
      <CardMedia
        component="img"
        height="90"
        image="/assets/images/onboarding/discord.png"
        alt="discord header"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Community Chat
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Intereact with the community and Zesty.io developers. Ask questions,
          share ideas and projects. Click here to be invited.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const YoutubeCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{}}>
      <CardActionArea
        onClick={() => handleClick('https://www.youtube.com/zesty-io')}
      >
        <CardMedia
          component="img"
          height="90"
          image="/assets/images/onboarding/next-js-zesty-docs-header.png"
          alt="youtube header"
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.zesty.zestyDarkText }}
            component="p"
          >
            Start with Next.js in 10 minutes
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.zesty.zestyZambezi }}
          >
            Watch this quick tutorial to see how to leverage the command line
            with Zesty and Next.js
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CaseStudiesCard = ({ developer, marketer }) => {
  const theme = useTheme();
  return (
    <Card sx={{}}>
      <CardActionArea
        onClick={() => handleClick('https://www.zesty.io/clients/')}
      >
        {marketer && (
          <CardMedia
            component="img"
            height="140"
            image="/assets/images/join/casestudies.png"
            alt="youtube header"
          />
        )}

        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.zesty.zestyDarkText }}
            component="p"
          >
            Case studies
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.zesty.zestyZambezi }}
          >
            See what others have created with Zesty
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const DeveloperGuideCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{}}>
      <CardActionArea onClick={() => handleClick('https://www.zesty.org')}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.zesty.zestyDarkText }}
            component="p"
          >
            Developer guides
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.zesty.zestyZambezi }}
          >
            Access the quick start guide, plus in-depth guides to the Zesty
            platform
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
const TrainingVideoCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{}}>
      <CardActionArea
        onClick={() =>
          handleClick(
            'https://www.youtube.com/playlist?list=PLExwmKy69_tBEDIzllYm81ELok4YGEshr',
          )
        }
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.zesty.zestyDarkText }}
            component="p"
          >
            Training Videos
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.zesty.zestyZambezi }}
          >
            escription would be: Watch our series of training videos to get
            started on Zesty
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
