import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

export const AccountsSingleNavItem = ({ title, url, colorInvert = false }) => {
  const { asPath } = useRouter();
  const hasActiveLink = url === '/' ? asPath === url : asPath.startsWith(url);

  return (
    <Button
      size="large"
      sx={(theme) => ({
        color: colorInvert ? 'common.white' : 'text.secondary',
        bgcolor: hasActiveLink
          ? theme.palette.mode === 'light'
            ? grey[300]
            : `transparent`
          : 'transparent',
        border: hasActiveLink
          ? theme.palette.mode === 'light'
            ? `1px solid transparent`
            : `1px solid ${grey[300]}`
          : '1px solid transparent',
        '&:hover': {
          bgcolor: hasActiveLink
            ? theme.palette.mode === 'light'
              ? grey[300]
              : `transparent`
            : 'transparent',
          border: hasActiveLink
            ? theme.palette.mode === 'light'
              ? `1px solid transparent`
              : `1px solid ${grey[300]}`
            : `1px solid ${grey[300]}`,
        },
      })}
      href={url}
    >
      {title}
    </Button>
  );
};
