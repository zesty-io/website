import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Details = ({
  title,
  description,
  price,
  reviewScore,
  reviewCount,
  href,
}) => {
  const theme = useTheme();
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('white');
  const [quantity, setQuantity] = useState(1);
  const quantityLimit = 4;

  return (
    <Box>
      <Typography variant={'h5'} fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Typography variant={'subtitle2'} color={'text.secondary'}>
        {description}
      </Typography>
      <Box
        marginTop={2}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant={'h6'} fontWeight={700}>
          {price}
        </Typography>
        <Box display={'flex'} alignItems={'center'}>
          <Box display={'flex'} alignItems={'center'}>
            {[1, 2, 3, 4, 5].map((r) => (
              <Box
                key={r}
                component={'svg'}
                color={
                  r <= reviewScore
                    ? theme.palette.secondary.main
                    : theme.palette.divider
                }
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </Box>
            ))}
          </Box>
          <Typography
            variant={'caption'}
            color={'text.secondary'}
            marginLeft={0.5}
          >
            {reviewCount} reviews
          </Typography>
        </Box>
      </Box>
      <Box marginTop={2}>
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
      <Box marginTop={2}>
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
      <Box marginTop={2}>
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
      <Stack marginTop={2} spacing={1} direction={'row'}>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'large'}
          fullWidth
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={20}
            height={20}
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </Button>
        <Button
          component={Link}
          href={href}
          color={'primary'}
          size={'large'}
          fullWidth
          sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={20}
            height={20}
          >
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button
          color={'primary'}
          size={'large'}
          fullWidth
          sx={{ bgcolor: alpha(theme.palette.primary.light, 0.1) }}
        >
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
        </Button>
      </Stack>
    </Box>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  reviewScore: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default Details;
