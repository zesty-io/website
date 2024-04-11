import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const FAQs = ({ faqsData }) => {
  return (
    <Container>
      <Box sx={{ px: 4 }}>
        <Box marginBottom={4}>
          <Typography fontWeight={700} variant={'h4'} align={'center'}>
            Frequently asked questions
          </Typography>
        </Box>
        {faqsData.length > 0 && (
          <Grid container spacing={4}>
            {faqsData.map((item, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Typography variant={'h6'} fontWeight={600} gutterBottom>
                  {item.question}
                </Typography>
                <Box
                  color="text.secondary"
                  dangerouslySetInnerHTML={{
                    __html: item.answer,
                  }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default FAQs;
