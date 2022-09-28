import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import projectDetails from '../../../../../public/assets/images/join/project-details.png';
import Image from 'next/image';
import nextjs from '../../../../../public/assets/images/join/nextjs.png';
import parsely from '../../../../../public/assets/images/join/parselly.png';
import nextParsely from '../../../../../public/assets/images/join/nextparsely.png';

export const ChooseTechStack = ({
  title,
  description,
  hanldeChooseTechStack,
  template,
}) => {
  const placard_image = template?.placard_image?.data[0]?.url;
  return (
    <Box sx={{ height: '100vh', width: '100%', position: 'relative' }}>
      <Box sx={{}}>
        <Image
          src={placard_image || projectDetails.src}
          alt="Picture of the author"
          width={500}
          height={500}
          layout="fill"
        />
      </Box>
      <Box
        px={10}
        sx={{
          position: 'absolute',
          top: '40vh',
          background: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <Box pr={40} sx={{ flex: 1 }}>
          <Box pb={4} pt={4}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {techStack.map((e) => {
              const name = e.name;
              const subtitle = e.subtitle;
              const img = e?.img;
              const cardProps = {
                name,
                subtitle,
                img,
                onClick: () => {
                  hanldeChooseTechStack();
                },
              };
              return (
                <Grid item xs={4}>
                  <ImgMediaCard {...cardProps} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const techStack = [
  {
    name: 'Headless',
    subtitle: 'Use Zesty as a headless back end for your web app',
    img: nextjs.src,
  },
  {
    name: 'Traditional',
    subtitle: 'Build both your site’s front end and back end on Zesty',
    img: parsely.src,
  },
  {
    name: 'Hybrid',
    subtitle: 'Make your site part traditional part headless',
    img: nextParsely.src,
  },
];
const ImgMediaCard = ({ name, subtitle, img, onClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        cursor: 'pointer',
        ':hover': {
          boxShadow: 20,
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        alt="Zesty Template"
        height={280}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
