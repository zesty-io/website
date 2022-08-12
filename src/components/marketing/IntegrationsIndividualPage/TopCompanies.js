/**
 * MUI Imports
 */
import { Box, Typography, Button } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
/**
 * Components Imports
 */
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';

const TopCompanies = ({
  theme,
  content,
  FillerContent,
  isLarge,
  isExtraLarge,
  isDarkMode,
}) => {
  return (
    <Box
      component="section"
      sx={{
        mt: 5,
        pt: isExtraLarge ? 0 : 5,
        py: isExtraLarge ? 5 : 0,
        background: `url(${
          content.logos_background && content.logos_background?.data[0].url
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: isExtraLarge ? '' : 200,
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
          overrides={{
            strong: {
              component: Typography,
              props: {
                color: theme.palette.zesty.zestyOrange,
                fontSize: 'inherit',
                fontWeight: 'inherit',
                display: 'inline',
              },
            },
          }}
        >
          {content.logos_title.replace('Zesty.io', '<strong>Zesty.io</strong>')}
        </MuiMarkdown>
      </Typography>
      <Box sx={{}}>
        <SimpleCardLogo
          logoItems={content.logos.data}
          FillerContent={FillerContent}
          isDarkMode={isDarkMode}
        />
      </Box>
    </Box>
  );
};

export default TopCompanies;
