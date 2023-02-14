/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: AI 
 * Name: ai 
 * Model ZUID: 6-cad792fba5-3t1rzn
 * File Created On: Tue Feb 14 2023 18:50:48 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_text (text)
 * subheader (textarea)
 * youtube_embed (textarea)
 * section_2_header (text)
 * section_2_subheader (textarea)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-cad792fba5-3t1rzn
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import FillerContent from 'components/globals/FillerContent';

function Ai({ content }) {
  const [hovered, setHovered] = useState();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  console.log(content);
  return (
    <>
      <Container>
        <Box component="section" sx={{ py: 15 }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyOrange,
              textAlign: 'center',
            }}
          >
            {content.header_text || FillerContent.header}
          </Typography>

          <Typography
            component="h2"
            variant="h6"
            sx={{
              mt: 1,
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {content.subheader || FillerContent.header}
          </Typography>

          <CardMedia
            allow="accelerometer"
            title="Zesty ai video intro"
            autoplay={true}
            sx={{
              border: 'none',
              borderRadius: 2,
              minHeight: isSmall ? 400 : 600,
              mt: 10,
            }}
            src={content.youtube_embed}
            component={'iframe'}
          ></CardMedia>
        </Box>
      </Container>

      <Box
        component="section"
        sx={{ py: 15, background: theme.palette.background.lightPeach }}
      >
        <Container>
          <Typography
            component="h3"
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
            }}
          >
            {content.section_2_header || FillerContent.header}
          </Typography>

          <Typography
            component="h4"
            variant="h6"
            sx={{
              mt: 1,
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {content.section_2_subheader || FillerContent.header}
          </Typography>

          <Grid sx={{ mt: 5 }} container spacing={4}>
            {content.examples?.data
              .sort((a, b) => a.sort_order - b.sort_order)
              .map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={6} lg={4}>
                  <Box
                    onMouseOver={() => {
                      setHovered(idx);
                    }}
                    onMouseLeave={() => {
                      setHovered();
                    }}
                    sx={{
                      background:
                        idx % 2
                          ? theme.palette.zesty.zestyOrangeLinear
                          : theme.palette.zesty.zestyOrangeLinearLight,
                      p: 4,
                      '&:hover': {
                        background: theme.palette.common.white,
                        border: `3px solid ${theme.palette.zesty.zestyOrange}`,
                      },
                      borderRadius: 2,
                      minHeight: 400,
                    }}
                  >
                    {!hovered === undefined ||
                      (hovered !== idx && (
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: theme.palette.common.white,
                          }}
                        >
                          {item.card_text || FillerContent.description}
                        </Typography>
                      ))}

                    {hovered !== undefined && hovered === idx && (
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: theme.palette.zesty.zestyZambezi,
                        }}
                      >
                        {item.flipped_card_text || FillerContent.description}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: 15 }}>
        <Container>
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyOrange,
              textAlign: 'center',
            }}
          >
            {content.header_text || FillerContent.header}
          </Typography>

          <Typography
            component="h2"
            variant="h6"
            sx={{
              mt: 1,
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {content.subheader || FillerContent.header}
          </Typography>

          <Grid sx={{ mt: 15 }} container spacing={4}>
            {content.selling_points?.data.map((item, idx) => (
              <Grid
                item
                key={idx}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: 'flex',

                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                {idx === 0 && (
                  <BoltIcon
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      fontSize: 90,
                    }}
                  />
                )}
                {idx === 1 && (
                  <TipsAndUpdatesIcon
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      fontSize: 90,
                    }}
                  />
                )}
                {idx === 2 && (
                  <RotateRightIcon
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      fontSize: 90,
                    }}
                  />
                )}
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
                    mt: 2,
                  }}
                >
                  {item?.selling_point || FillerContent.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Ai;
