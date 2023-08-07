import { Stack, Typography } from '@mui/material';

export const MDStrong = ({ node }) => {
  const str =
    node?.children[0]?.value || node?.children[0].children[0]?.value || '';
  return (
    <Stack data-testid="MDStrong-component">
      <Typography fontWeight={'700'}>{str}</Typography>
    </Stack>
  );
};
