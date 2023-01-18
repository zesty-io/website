/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';

/**
 * Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import MuiMarkdown from 'markdown-to-jsx';

const SimpleStats = ({ stat_one, stat_two, stat_three }) => {

  const statsData = [
    {
      stats: stat_one || FillerContent.headerAndDescription,
    },
    {
      stats: stat_two || FillerContent.headerAndDescription,
    },
    {
      stats: stat_three || FillerContent.headerAndDescription,
    },
  ]
  const theme = useTheme();
  return (
    <Box sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        {statsData?.map((item, index) => (
          <Grid item key={index} xs={12} md={4}>
            <MuiMarkdown
              options={{
                overrides: {
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'h2',
                      sx: {
                        color: theme.palette.zesty.zestyDarkText,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      variant: 'h6',
                      component: 'p',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        textAlign: 'center',
                        lineHeight: 1.2,
                        mt: 2,
                      },
                    },
                  },
                },
              }}
            >
              {item.stats || FillerContent.rich_text}
            </MuiMarkdown>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimpleStats;
