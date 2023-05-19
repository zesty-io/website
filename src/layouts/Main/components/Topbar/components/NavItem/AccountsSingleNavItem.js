import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

export const AccountsSingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink =
    url === '/dashboard/' ? asPath === url : asPath.startsWith(url);

  return (
    <Button
      size="large"
      sx={{
        color: colorInvert ? 'common.white' : 'text.secondary',
        bgcolor: hasActiveLink && grey[300],
        '&:hover': {
          bgcolor: grey[300],
        },
      }}
      href={url}
    >
      {title}
    </Button>
  );
};
