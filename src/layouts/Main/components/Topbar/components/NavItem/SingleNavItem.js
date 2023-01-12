import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

const SingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink = url === '/' ? asPath === url : asPath.startsWith(url);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Link
      fontWeight={hasActiveLink ? 700 : 400}
      color={linkColor}
      href={url}
      underline="none"
      sx={{
        ':hover': {
          fontWeight: '700',
        },
      }}
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
