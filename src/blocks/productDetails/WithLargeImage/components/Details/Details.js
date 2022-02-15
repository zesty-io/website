import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Details = () => {
  const theme = useTheme();
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('white');
  const [quantity, setQuantity] = useState(1);
  const quantityLimit = 4;

  return (
    <Box>
      <Box
        padding={1}
        display={'inline-flex'}
        borderRadius={1}
        bgcolor={'primary.main'}
        marginBottom={1}
      >
        <Typography sx={{ color: 'common.white', lineHeight: 1 }}>
          new
        </Typography>
      </Box>
      <Typography variant={'h4'} fontWeight={700}>
        Classy sweatshirt
      </Typography>
      <Box marginY={3}>
        <Box display={'flex'}>
          <Typography
            variant={'h5'}
            color={'text.secondary'}
            sx={{ textDecoration: 'line-through', marginRight: 1 }}
          >
            $199.90
          </Typography>
          <Typography variant={'h5'} fontWeight={700}>
            $149.90
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'} marginTop={1}>
          <Box display={'flex'} justifyContent={'flex-start'}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box
                key={item}
                color={'secondary.main'}
                display={'flex'}
                alignItems={'center'}
              >
                <svg
                  width={18}
                  height={18}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </Box>
            ))}
          </Box>
          <Typography marginLeft={1}>8 reviews</Typography>
        </Box>
      </Box>
      <Typography variant={'subtitle2'} color={'text.secondary'}>
        The finishes of this product are very realistic with a double stitching
        on the neck, sleeves and bottom, and with a banded neck cleaning that
        allows optimal support in all situations.
      </Typography>
      <Box marginY={3}>
        <Box>
          <Typography>
            Size:{' '}
            <Typography component={'span'} fontWeight={700}>
              {size || ''}
            </Typography>
          </Typography>
          <Stack direction={'row'} spacing={1} marginTop={0.5}>
            {['S', 'M', 'L', 'XL'].map((item) => (
              <Box
                key={item}
                onClick={() => setSize(item)}
                sx={{
                  borderRadius: 1,
                  padding: 1,
                  border: `2px solid ${
                    size === item
                      ? theme.palette.primary.main
                      : theme.palette.divider
                  }`,
                  cursor: 'pointer',
                }}
              >
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box marginY={2}>
          <Typography>
            Color:{' '}
            <Typography component={'span'} fontWeight={700}>
              {color || ''}
            </Typography>
          </Typography>
          <Stack direction={'row'} spacing={1} marginTop={0.5}>
            {['black', 'gray', 'white'].map((item) => (
              <Box
                key={item}
                onClick={() => setColor(item)}
                sx={{
                  borderRadius: '100%',
                  padding: 0.5,
                  border: `2px solid ${
                    color === item
                      ? theme.palette.primary.main
                      : theme.palette.divider
                  }`,
                  cursor: 'pointer',
                }}
              >
                <Box
                  sx={{
                    borderRadius: '100%',
                    padding: 1.5,
                    bgcolor: item,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography>
            Quantity:{' '}
            <Typography component={'span'} fontWeight={700}>
              {quantity || 1}
            </Typography>
          </Typography>
          <Stack direction={'row'} spacing={2} marginTop={0.5}>
            <Box
              onClick={() => setQuantity(quantity - 1 >= 1 ? quantity - 1 : 1)}
              sx={{
                borderRadius: 1,
                paddingY: 1,
                paddingX: 2,
                border: `1px solid ${theme.palette.divider}`,
                cursor: quantity === 1 ? 'not-allowed' : 'pointer',
              }}
            >
              <Typography
                color={quantity === 1 ? 'text.secondary' : 'text.primary'}
              >
                - Remove
              </Typography>
            </Box>
            <Box
              onClick={() =>
                setQuantity(
                  quantity + 1 <= quantityLimit ? quantity + 1 : quantityLimit,
                )
              }
              sx={{
                borderRadius: 1,
                paddingY: 1,
                paddingX: 2,
                border: `1px solid ${theme.palette.divider}`,
                cursor: quantity === quantityLimit ? 'not-allowed' : 'pointer',
              }}
            >
              <Typography
                color={
                  quantity === quantityLimit ? 'text.secondary' : 'text.primary'
                }
              >
                + Add
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack marginTop={3} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          variant={'outlined'}
          color={'primary'}
          size={'large'}
          fullWidth
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          Favorite
        </Button>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'large'}
          fullWidth
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={20}
              height={20}
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          }
        >
          Add to cart
        </Button>
      </Stack>
      <Box marginY={3}>
        <Typography>Need a support?</Typography>
        <Stack direction={'row'} spacing={2} marginTop={0.5}>
          <Button
            sx={{
              color: 'text.secondary',
            }}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            }
          >
            Contact sales
          </Button>
          <Button
            sx={{
              color: 'text.secondary',
            }}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Email us
          </Button>
        </Stack>
      </Box>
      <Box marginY={3}>
        <Typography>Disclaimer</Typography>
        <Typography variant={'caption'} color={'text.secondary'}>
          T-shirt with round neck is a mens model, thanks to its short sleeves
          and a very light weight of only 135g / m², it is particularly suitable
          for wearing in the hottest periods. This short-sleeved shirt has a
          tubular cut, avoids being bothered by the side seams and allows total
          freedom of movement. The finishes of this product are very realistic
          with a double stitching on the neck, sleeves and bottom, and with a
          banded neck cleaning that allows optimal support in all situations.
        </Typography>
      </Box>
      <Box>
        <Typography>Share this product in your social networks</Typography>
        <Stack direction={'row'} marginTop={0.5}>
          <IconButton color={'primary'}>
            <FacebookIcon />
          </IconButton>
          <IconButton color={'primary'}>
            <InstagramIcon />
          </IconButton>
          <IconButton color={'primary'}>
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Details;
