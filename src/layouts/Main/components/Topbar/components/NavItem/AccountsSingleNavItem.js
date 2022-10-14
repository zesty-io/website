import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

export const AccountsSingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink = url === '/' ? asPath === url : asPath.startsWith(url);

  return (
    <Button
      size="large"
      sx={{
        color: colorInvert ? 'common.white' : 'text.secondary',
        bgcolor: hasActiveLink && grey[50],
        pointerEvents: hasActiveLink && 'none',
        '&:hover': {
          bgcolor: grey[50],
        },
      }}
      href={url}
    >
      {title}
    </Button>
  );
};
