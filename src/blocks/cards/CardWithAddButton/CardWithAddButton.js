import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import Container from 'components/Container';

export const mock = [
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
    team: 'Consumer',
    subtitle: 'Responsible for design systems and brand management.',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
    team: 'Consulting',
    subtitle: 'Responsible for creating life in our apps.',
  },
];

const CardWithAddButton = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Card sx={{ p: { xs: 4, md: 4 } }}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', sm: 'row' }}
            flex={'1 1 100%'}
            justifyContent={{ sm: 'space-between' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            marginBottom={4}
          >
            <Box marginBottom={{ xs: 2, sm: 0 }}>
              <Typography variant={'h6'} fontWeight={700}>
                Job ads
              </Typography>
              <Typography color={'text.secondary'}>
                Add new job ads or manage the existing ads
              </Typography>
            </Box>
            <Button
              variant={'contained'}
              size="large"
              startIcon={
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  width={20}
                  height={20}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </Box>
              }
            >
              Add new
            </Button>
          </Box>
          <Grid container>
            {mock.map((item, i) => (
              <Grid
                item
                xs={12}
                key={i}
                sx={{
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  alignItems={{ xs: 'flex-end', md: 'center' }}
                  paddingY={4}
                >
                  <Box width={1} marginBottom={{ xs: 4, md: 0 }}>
                    <Typography variant={'subtitle1'} fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography color={'text.secondary'}>
                      {item.subtitle}
                    </Typography>
                    <Box marginTop={1} display={'flex'} alignItems={'center'}>
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        marginRight={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </Box>
                      <Typography color={'text.secondary'}>
                        {item.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color={'warning'}
                      size={'small'}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      size={'small'}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      size={'small'}
                    >
                      Send
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default CardWithAddButton;
