// MUI Imports
import { Box, Typography, Grid, Button } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import { useTheme } from '@mui/material/styles';
import ZestyImage from 'blocks/Image/ZestyImage';

const Integrations = ({
  text_content,
  logos,
  cta_button_text,
  cta_button_link,
  textHighlight,
  isSmall,
}) => {
  const theme = useTheme();

  // check if features_header richtext if not convert it to richtext format for consistency
  const htmlCheck = new RegExp('<("[^"]*"|\'[^\']*\'|[^\'">])*>');
  const isRichText = htmlCheck.test(text_content);

  if (!isRichText) {
    text_content = `<h2>${text_content}</h2>`;
  }

  return (
    <Box
      component="section"
      sx={{
        height: '100%',
        width: '100%',
        maxWidth: 1500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        px: 4,
        py: isSmall ? 10 : 15,
        zIndex: 100,
      }}
    >
      <Grid container spacing={4}>
        <Grid item sm={12} md={5}>
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h3',
                  component: 'h3',
                  sx: {
                    fontWeight: 700,
                    color: theme.palette.zesty.zestyOrange,
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h6',
                  component: 'p',
                  sx: {
                    mt: 3,
                    color: theme.palette.zesty.zestyZambezi,
                  },
                },
              },
            }}
          >
            {text_content.replace(
              textHighlight,
              `<span>${textHighlight}</span>`,
            )}
          </MuiMarkdown>

          <Box display={'flex'} sx={{ mt: isSmall ? 3 : 5 }}>
            <Button
              sx={{
                color: theme.palette.zesty.white,
                background: theme.palette.zesty.zestyOrange,
                border: `1px solid ${theme.palette.zesty.zestyOrange}`,
                '&:hover': {
                  color: theme.palette.common.zestyOrange,
                  background: theme.palette.zesty.zestyRed,
                  border: `1px solid ${theme.palette.zesty.zestyRed}`,
                },
              }}
              color="secondary"
              variant="outlined"
              size={'large'}
              href={cta_button_link}
              target="_blank"
              endIcon={
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </Box>
              }
            >
              {cta_button_text}
            </Button>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          item
          sm={12}
          md={7}
        >
          {/* <Box
                sx={{
                  mt: isMobile ? 4 : 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.0,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    height: 88,
                    width: 230,
                    display: isMobile ? 'none' : 'block',
                  }}
                />
                {logos?.map((item, idx) => {
                  return (
                    <>
                      <ZestyImage
                        key={idx}
                        width={88}
                        height={88}
                        style={{ height: 88, width: 'auto' }}
                        alt="integration logo's"
                        src={item.logo.data[0].url}
                      />
                    </>
                  );
                })}
              </Box> */}

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ZestyImage
              width={951}
              height={519}
              style={{
                width: '100%',
                height: 'auto',
                bottom: 0,
              }}
              loading="lazy"
              src={`${logos || ''}?width=951`}
              alt="zesty.io"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Integrations;
