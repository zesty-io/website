import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

const SingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink = url === '/' ? asPath === url : asPath.startsWith(url);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100%"
      sx={(theme) => ({
        fontWeight: 600,
        '&:hover': {
          color: theme.palette.zesty.zestyOrange,
          boxShadow: `inset 0 -3px ${theme.palette.zesty.zestyOrange}`,
        },
        transition: 'color .2s,box-shadow .2s',
      })}
    >
      <Link
        fontWeight={hasActiveLink ? 700 : 400}
        color={linkColor}
        href={url}
        underline="none"
        sx={(theme) => ({
          fontWeight: 600,
        })}
        title={title}
      >
        {title}
      </Link>
    </Box>
  );
};

SingleNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default SingleNavItem;
