import { Stack, Typography } from '@mui/material';

export const MDItalic = ({ node }) => {
  const str = node?.children[0].children[0]?.value || '';
  return (
    <Stack data-testid="MDItalic-component">
      <Typography fontWeight={'400'} fontStyle={'italic'}>
        {str}
      </Typography>
    </Stack>
  );
};
