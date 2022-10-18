import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { isProd } from 'utils';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const templateUrl =
//   'https://39ntbr6g-dev.webengine.zesty.io/data/entities-by-type.json?type=7-d2f78497d3-3wbx6p';

const stageUrl =
  'https://39ntbr6g-dev.webengine.zesty.io/data/entity.json?zuid=7-9cebf0bedd-ls0gg0';
const prodUrl =
  'https://extensions.zesty.io/data/entity.json?zuid=7-9cebf0bedd-ls0gg0';
const url = isProd ? prodUrl : stageUrl;
export const SelectTemplate = ({ handleSelectTemplate }) => {
  const [templates, settemplates] = React.useState([]);
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

  return (
    <Box>
      <p>
        Select a Template. Need template browser, need to store the template
        type. Set the tempalte name as projectType for CRM.
      </p>
      <Grid container>
        {templates.map((e) => {
          const name = e.name;
          const subtitle = e.subtitle;
          const img = e.image.data[0].url;
          const cardProps = {
            name,
            subtitle,
            img,
            onClick: () => handleSelectTemplate(e.github_url),
          };
          return (
            <Grid item xs={4}>
              <ImgMediaCard {...cardProps} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default function ImgMediaCard({ name, subtitle, img, onClick }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
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
