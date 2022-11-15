/**
 * MUI Imports
 */
import { Box, Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
/**
 * Components Imports
 */
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';

const TopCompanies = ({ theme, content, FillerContent, isDarkMode }) => {
  return (
    <Box
      component="section"
      sx={{
        pt: 10,
        pb: 15,
        background: `url(${
          content.logos_background && content.logos_background?.data[0].url
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          pt: 2,
          mb: 4,
          span: {
            color: isDarkMode
              ? theme.palette.common.white
              : theme.palette.zesty.zestyDarkText,
            fontWeight: 'bold',
          },
        }}
        component="h2"
        variant="h3"
      >
        <MuiMarkdown
          options={{
            overrides: {
              strong: {
                component: Typography,
                props: {
                  color: theme.palette.zesty.zestyOrange,
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  display: 'inline',
                },
              },
            },
          }}
        >
          {content.logos_title.replace('Zesty.io', '<strong>Zesty.io</strong>')}
        </MuiMarkdown>
      </Typography>
      <Box sx={{}}>
        <SimpleCardLogo
          variant={isDarkMode ? 'outlined' : 'elevation'}
          background={isDarkMode ? 'transparent' : theme.palette.common.white}
          logoItems={content.logos.data}
          FillerContent={FillerContent}
          isDarkMode={isDarkMode}
        />
      </Box>
    </Box>
  );
};

export default TopCompanies;
