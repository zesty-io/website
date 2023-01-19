/**
 * MUI Imports
 */
import { Box, Typography } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'markdown-to-jsx';
import CodeBlock from 'components/cta/CodeBlock';
import DemoCta from 'components/cta/DemoCta';
import TryFreeButton from 'components/cta/TryFreeButton';
import ZestyImage from 'blocks/Image/ZestyImage';

const Bottom = ({ theme, content, FillerContent, isLarge, isMedium }) => {
  return (
    <Box
      sx={{
        mt: 10,
        background: theme.palette.zesty.zestyDarkBlue,
        height: isMedium ? 800 : isLarge ? 1030 : 976,
      }}
      component="section"
    >
      <Container>
        <MuiMarkdown
          options={{
            overrides: {
              h2: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    color: theme.palette.common.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    pt: 10,
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  component: 'p',
                  variant: 'h6',
                  sx: {
                    color: theme.palette.common.white,
                    textAlign: 'center',
                    fontWeight: 500,
                    pt: 2,
                  },
                },
              },
            },
          }}
        >
          {content.bottom_cta || FillerContent.description}
        </MuiMarkdown>

        <Box sx={{ mt: 5 }}>
          <Box
            sx={{
              border: `1px solid ${theme.palette.common.white}`,
              borderRadius: 1,
              width: '100%',
              maxWidth: 470,
              margin: 'auto',
              filter: 'drop-shadow(4px 4px 30px rgba(176, 176, 176, 0.25))',
              mt: 2,
            }}
          >
            <CodeBlock />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: isMedium ? 'column' : 'row',
              justifyContent: 'center',
              gap: 1,
              mt: 4,
            }}
          >
            <TryFreeButton
              fullWidth={true}
              text={content.cta_primary_text}
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                width: '100%',
                maxWidth: isMedium ? '100%' : 174,
                fontWeight: 'bold',
              }}
            ></TryFreeButton>

            <DemoCta
              icon={false}
              fullWidth={isMedium}
              sx={{
                width: '100%',
                maxWidth: isMedium ? '100%' : 174,
                fontWeight: 'bold',
                color: theme.palette.zesty.zestyOrange,
                background: theme.palette.common.white,
              }}
              text={content.bottom_cta_button_2_text || FillerContent.cta}
              href={content.bottom_cta_button_2_link || FillerContent.href}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: 920,
            margin: 'auto',
            mt: 10,
          }}
        >
          <ZestyImage
            src={content.bottom_graphic?.data[0].url || FillerContent.image}
            width={920}
            height={620}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Bottom;
