import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

export const AccountsSingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink = url === '/' ? asPath === url : asPath.startsWith(url);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Link
      fontWeight={hasActiveLink ? 700 : 400}
      color="text.secondary"
      variant="body1"
      href={url}
      underline="none"
      sx={{
        ':hover': {
          fontWeight: '700',
        },
      }}
    >
      {title}
    </Link>
  );
};
