/**
 * MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import CodeBlock from 'components/cta/CodeBlock';
import DemoCta from 'components/cta/DemoCta';

const Bottom = ({ theme, content, FillerContent, isLarge, isMedium }) => {
  return (
    <Box
      sx={{
        mt: 10,
        background: theme.palette.zesty.zestyDarkBlue,
        height: isMedium ? 850 : isLarge ? 1030 : 1005,
      }}
      component="section"
    >
      <Container>
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                variant: 'h2',
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
                variant: 'h5',
                sx: {
                  color: theme.palette.common.white,
                  textAlign: 'center',
                  fontWeight: 500,
                  pt: 2,
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
            <Button
              sx={{
                width: '100%',
                maxWidth: isMedium ? '100%' : 174,
                fontWeight: 'bold',
              }}
              target="_blank"
              fullWidth={true}
              href={content.cta_primary_link || FillerContent.href}
              component="a"
              variant="contained"
              color={'secondary'}
            >
              {content.cta_primary_text || FillerContent.cta}
            </Button>

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
            height: 565,
            margin: 'auto',
            mt: 10,
          }}
        >
          <Box
            sx={{ width: '100%' }}
            component="img"
            src={content.bottom_graphic?.data[0].url}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Bottom;
