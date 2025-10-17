import { Box } from '@mui/material';
import { getCookie } from 'cookies-next';
import { hashMD5 } from 'utils/Md5Hash';

function QuestionAndAnswer({ children, reverse, sx, type }) {
  const email = getCookie('APP_USER_EMAIL').replace(/%40/g, '@');
  const md5Hash = hashMD5(email.toLowerCase());
  return (
    <Box sx={sx}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: reverse ? 'row-reverse' : 'unset',
          gap: 2,
          p: 1,
        }}
      >
        {children}

        {type === 'bot' ? (
          <Box
            component={'img'}
            src="https://kfg6bckb.media.zestyio.com/content.one-logo.png"
            sx={{
              width: 40,
              height: 35,
              borderRadius: 1,
              display: 'flex',
            }}
          />
        ) : (
          <Box
            component={'img'}
            src={`https://www.gravatar.com/avatar/${md5Hash}?s=200&d=mm`}
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              display: 'block',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
export default QuestionAndAnswer;
