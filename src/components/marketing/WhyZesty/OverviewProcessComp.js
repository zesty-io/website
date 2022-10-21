import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WYSIWYGRender from 'components/globals/WYSIWYGRender';
import FillerContent from 'components/globals/FillerContent';

const OverviewProcessComp = ({ content, image }) => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container justify="center">
        <Box justifyContent="center" alignItems="center">
          <Typography
            variant="h5"
            alignItems={'center'}
            sx={{ textAlign: 'center' }}
            gutterBottom
          >
            <WYSIWYGRender
              rich_text={content || FillerContent.rich_text}
            ></WYSIWYGRender>
          </Typography>
          <Container>
            {image && (
              <Box
                component={'img'}
                src={image}
                alt={FillerContent.header}
                width={1}
                height={1}
                sx={{
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  justifyContent: 'center',
                }}
              />
            )}
          </Container>
        </Box>
      </Grid>
    </Container>
  );
};

export default OverviewProcessComp;
