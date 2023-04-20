import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

const SingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink = url === '/' ? asPath === url : asPath.startsWith(url);
  const linkColor = colorInvert ? 'common.white' : 'text.secondary';

  return (
    <Link
      fontWeight={hasActiveLink ? 700 : 400}
      color={linkColor}
      href={url}
      underline="none"
      pb="4px"
      sx={(theme) => ({
        fontWeight: 600,
        '&:hover': {
          color: theme.palette.zesty.zestyOrange,
          boxShadow: `inset 0 -3px ${theme.palette.zesty.zestyOrange}`,
        },
        transition: 'color .2s,box-shadow .2s',
      })}
      title={title}
    >
      {title}
    </Link>
  );
};

SingleNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default SingleNavItem;
