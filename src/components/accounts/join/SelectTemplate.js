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
  'https://39ntbr6g-dev.webengine.zesty.io/data/entities-by-type.json?type=7-d2f78497d3-3wbx6p';
const prodUrl =
  'https://extensions.zesty.io/data/entities-by-type.json?type=7-d2f78497d3-3wbx6p';

export const SelectTemplate = ({
  handleSelectTemplate,
  production,
  project,
}) => {
  const [templates, settemplates] = React.useState([]);

  const url = production ? prodUrl : stageUrl;

  const getAllTemplates = async () => {
    await axios
      .get(url)
      .then((e) => {
        settemplates(e.data);
      })
      .catch(function () {});
  };

  React.useEffect(() => {
    getAllTemplates();
  }, []);

  const isHeadless = project === 'headless project' ? true : false;

  const newTemplate = isHeadless
    ? [
        {
          name: 'Blank',
          subtitle: 'Start with an empty instance',
          github_url: 'https://github.com/zesty-io/template-blank',
        },
      ]
    : templates;

  return (
    <Box px={2}>
      <Grid container spacing={4} py={2}>
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
            <Grid item xs={12} md={6} xl={4} xl2={2}>
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
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ':hover': {
          boxShadow: 20,
        },
      }}
      onClick={onClick}
    >
      {isBlank ? (
        <Box
          height={100}
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
          height={100}
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
      <CardActions sx={{ mt: 'auto' }}>
        <Button size="small" variant="text" color="secondary">
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
}
