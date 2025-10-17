import { Stack } from '@mui/material';

export const MDVideo = ({ node }) => {
  const imgUrl = node?.children[0]?.children[0]?.properties?.src;
  const vidUrl = node?.children[0]?.properties?.href;
  const openNewTab = () => {
    window.open(vidUrl, '_blank');
  };
  return (
    <Stack onClick={openNewTab} display={imgUrl && vidUrl ? 'flex' : 'none'}>
      <img height={200} width={200} src={imgUrl} alt="alt" />;
    </Stack>
  );
};
