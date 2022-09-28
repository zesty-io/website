import { Box, Grid, useTheme } from '@mui/material';
import axios from 'axios';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// const templateUrl =
//   'https://39ntbr6g-dev.webengine.zesty.io/data/entities-by-type.json?type=7-d2f78497d3-3wbx6p';

const stageUrl =
  'https://39ntbr6g-dev.webengine.zesty.io/data/entity.json?zuid=7-9cebf0bedd-ls0gg0';
const prodUrl =
  'https://extensions.zesty.io/data/entity.json?zuid=7-9cebf0bedd-ls0gg0';

export const SelectTemplate = ({
  handleSelectTemplate,
  title,
  description,
  production,
}) => {
  const [templates, settemplates] = React.useState([]);

  const url = production ? prodUrl : stageUrl;

  const getAllTemplates = async () => {
    await axios
      .get(url)
      .then((e) => {
        console.log(e.data, 444);
        settemplates(e.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  React.useEffect(() => {
    getAllTemplates();
  }, []);

  const newTemplate = [
    { name: 'Blank', subtitle: 'Start with an empty instance', github_url: '' },
    ...templates,
  ];
  return (
    <Box pt={12} px={10}>
      <Box pb={8} pt={4}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {newTemplate.map((e) => {
          const name = e.name;
          const subtitle = e.subtitle;
          const img = e?.image?.data[0]?.url;
          const cardProps = {
            name,
            subtitle,
            img,
            onClick: () => handleSelectTemplate(e),
          };
          return (
            <Grid item xs={6} lg={4}>
              <ImgMediaCard {...cardProps} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default function ImgMediaCard({ name, subtitle, img, onClick }) {
  const theme = useTheme();
  const isBlank = !img ? true : false;
  return (
    <Card
      sx={{
        maxWidth: 350,
        cursor: 'pointer',
        ':hover': {
          boxShadow: 20,
        },
      }}
      onClick={onClick}
    >
      {isBlank ? (
        <Box
          height={250}
          sx={{ background: theme.palette.secondary.whiteSmoke }}
          display="flex"
          textAlign={'center'}
          alignItems="center"
          justifyContent={'center'}
        >
          <LocalHospitalIcon color="secondary" fontSize="large" />
        </Box>
      ) : (
        <CardMedia
          component="img"
          alt="Zesty Template"
          height={250}
          image={img}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="text" color="secondary">
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
}
