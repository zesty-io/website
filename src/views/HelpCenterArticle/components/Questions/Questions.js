import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colors } from '@mui/material';

const mock = [
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'I\'d like to renew but I am getting a 404 error.',
    subtitle: 'Issues related to renewal',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'Why can\'t I upgrade for free?',
    subtitle: 'Payment gateway related issues',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'Why doesn\'t my account stay logged in?',
    subtitle: 'Login session related issues',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'Can I use referral code to decrease my monthly fees?',
    subtitle: 'Referral bonuses and charging',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'Authentication Issues',
    subtitle: 'Issues related to logging in, out, or about multiple devices.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
  {
    title: 'Why doesn’t my account stay logged in?',
    subtitle: 'Issues related to authentication',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
  },
];

const Questions = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2} display={'flex'} alignItems={'center'}>
          <Box
            component={Avatar}
            bgcolor={colors.green[100]}
            color={colors.green[900]}
            marginBottom={1}
            width={60}
            height={60}
          >
            <Box
              component={'svg'}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </Box>
          </Box>
          <Box marginLeft={2}>
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              Billing
            </Typography>
            <Typography color={'text.secondary'}>
              Let’s try to fix your billing issues.
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Box
            paddingY={1 / 2}
            paddingX={1}
            bgcolor={'secondary.main'}
            borderRadius={2}
            marginRight={1}
          >
            <Typography
              variant={'caption'}
              fontWeight={700}
              sx={{ color: 'common.black' }}
            >
              8 answers
            </Typography>
          </Box>
          <Typography
            color={'text.secondary'}
            variant={'caption'}
            fontWeight={700}
          >
            Last updated 10 days ago
          </Typography>
        </Box>
      </Box>
      <Box>
        {mock.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            paddingY={1}
            elevation={0}
            sx={{
              '&:first-of-type': {
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
              },
              '&:not(:first-of-type):before': {
                opacity: '1 !important',
                display: 'block !important',
              },
              '&.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
              padding={'0 !important'}
            >
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Box>
            </Box>
            <AccordionDetails>
              <Typography>{item.text}</Typography>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Box
                  component={Button}
                  color="primary"
                  size="small"
                  marginTop={2}
                  variant={'outlined'}
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      width={24}
                      height={24}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  }
                  sx={{ float: 'right' }}
                >
                  Contact support team
                </Box>
              </Box>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Questions;
