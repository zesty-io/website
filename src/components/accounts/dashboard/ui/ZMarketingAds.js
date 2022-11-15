import { Button, Paper, Stack, Typography } from '@mui/material';
import ZMyCard from './ZMyCard';
import React from 'react';
import { grey } from '@mui/material/colors';

const ZMarketingAds = ({ marketingCards }) => {
  return (
    <Stack>
      <Typography mb={2} variant="h6" color="text.secondary">
        {`What's New`}
      </Typography>
      {marketingCards?.map((card, index) => (
        <ZMyCard
          key={index}
          title={card[1].title}
          description={card[1].description}
          sx={{
            border: `1px solid ${grey[400]}`,
            p: 2,
          }}
          component={Paper}
          spacing={2}
          mb={4}
        >
          <Stack
            direction="row"
            justifyContent={card[1].read_all_url && 'space-between'}
            alignSelf={!card[1].read_all_url && 'center'}
            spacing={1}
          >
            <Button
              sx={{ whiteSpace: 'nowrap' }}
              href={card[1].url}
              variant="contained"
              color="primary"
            >
              {card[0] === 'marketing' ? card[1]?.cta_text : 'Read Article'}
            </Button>
            {card[1].read_all_url && (
              <Button
                sx={{ whiteSpace: 'nowrap' }}
                href={card[1].read_all_url}
                variant="outlined"
                color="primary"
              >
                Read All
              </Button>
            )}
          </Stack>
        </ZMyCard>
      ))}
    </Stack>
  );
};

export default ZMarketingAds;
