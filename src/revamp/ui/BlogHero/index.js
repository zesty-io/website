import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Link,
  Stack,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  MenuList,
} from '@mui/material';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useSnackbar } from 'notistack';
import React from 'react';

const image =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/zosh.svg',
  articleFrame =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/articleFrame.jpg';

const menuItems = [
  {
    name: 'Facebook',
    icon: <FacebookRoundedIcon />,
    // link: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhygraph.com%2Fblog%2Fbuilding-learning-platform-schema',
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon />,
    link: 'https://twitter.com/intent/tweet?lang=en&url=https://www.espncricinfo.com/story/csk-vs-rr-ipl-2023-r-ashwin-crashes-chennai-super-kings-party-to-silence-chepauk-1368448&text=',
    // link: 'https://twitter.com/intent/tweet?lang=en&url=https://www.espncricinfo.com/story/csk-vs-rr-ipl-2023-r-ashwin-crashes-chennai-super-kings-party-to-silence-chepauk-1368448&text=R%20Ashwin%20crashes%20Chennai%20Super%20Kings%27%20party%20to%20silence%20Chepauk',
  },
  {
    name: 'Linkedin',
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/shareArticle?mini=true&url=',
    // link: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fhygraph.com%2Fblog%2Fbuilding-learning-platform-schema&title=Building%20a%20learning%20platform%3A%20The%20schema&summary=Building%20a%20learning%20platform%3A%20The%20schema&source=https%3A%2F%2Fhygraph.com%2Fblog%2Fbuilding-learning-platform-schema',
  },
  {
    name: 'Copy Link',
    icon: <LinkRoundedIcon />,
  },
];

const BlogHero = ({
  overline = 'PRODUCT ANNOUNCMENT',
  heading = 'Announcing the New Zesty Media App Experience',
  author = 'Zoshua Colah',
  authorLink,
  authorImage = image,
  supportingText = 'October 20, 2021',
  articleImage = articleFrame,
  categoryLink,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  async function copyToClip() {
    await window.navigator.clipboard.writeText(location.href);
    enqueueSnackbar('Copied to clipboard!', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    });
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = async (name, isCopy = false) => {
    if (!isCopy) {
      if (name === 'Facebook') {
        const link = `https://facebook.com/sharer/sharer.php?u=${location.href}&quote=${heading}`;
        window.open(link, '_blank');
      } else if (name === 'Twitter') {
        const link = `https://twitter.com/intent/tweet?lang=en&url=${location.href}&text=${heading}`;
        window.open(link, '_blank');
      } else if (name === 'Linkedin') {
        const link = `https://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${heading}&summary=${heading}&source=Zesty.io`;
        window.open(link, '_blank');
      }
    } else await copyToClip();

    setAnchorEl(null);
  };

  return (
    <Stack>
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            px: 2,
            py: 4,
          },
          [theme.breakpoints.up('tablet')]: {
            px: 4,
            py: 6,
          },
          [theme.breakpoints.up('lg')]: {
            px: 31,
            py: 6,
          },
          [theme.breakpoints.up('desktopWide')]: {
            px: 46,
            py: 6,
          },
          [theme.breakpoints.up('xl')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
          },
        })}
      >
        <Link
          fontWeight={700}
          color="text.secondary"
          underline="none"
          href={categoryLink}
          fontSize="14px"
          lineHeight="20px"
          mb={(theme) => ({
            xs: 1,
            lg: '12px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            '&:hover': {
              color: theme.palette.primary.main,
            },
          })}
        >
          {overline}
        </Link>
        <Typography
          variant="h2"
          color="text.primary"
          letterSpacing="-0.02em"
          fontWeight={800}
          mb={3}
          sx={(theme) => ({
            [theme.breakpoints.up('lg')]: {
              fontSize: '44px',
              lineHeight: '48px',
              mb: 4,
            },
          })}
        >
          {heading}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Link href={authorLink}>
            <Avatar
              src={authorImage}
              sx={{ width: 48, height: 48, mr: '12px' }}
            />
          </Link>

          <Stack>
            <Link
              variant="body2"
              fontWeight={500}
              color="text.primary"
              underline="none"
              href={authorLink}
              sx={{ cursor: 'pointer' }}
            >
              {author}
            </Link>
            <Link
              variant="body2"
              color="text.secondary"
              underline="none"
              href={authorLink}
              sx={{ cursor: 'pointer' }}
            >
              {supportingText}
            </Link>
          </Stack>
          <IconButton onClick={handleClick} sx={{ marginLeft: 'auto' }}>
            <ShareRoundedIcon
              sx={(theme) => ({
                fill:
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.grey[900], 0.4)
                    : 'white',
              })}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        component="img"
        src={articleImage}
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          },
          [theme.breakpoints.up('xl')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
          },
        })}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuList>
          {menuItems.map((c, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                if (c.name !== 'Copy Link') {
                  handleClickMenu(c.name);
                  return;
                }

                handleClickMenu(c.name, true);
              }}
            >
              <ListItemIcon>{c.icon}</ListItemIcon>
              <Typography color="text.primary" letterSpacing=".15px">
                {c.name}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default BlogHero;
