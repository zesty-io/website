/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Articles
 * Name: articles
 * Model ZUID: 6-45a908-qfw88c
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * hero_image (images)
 * article (wysiwyg_advanced)
 * title (text)
 * description (text)
 * author (one_to_one)
 * date (date)
 * tags (one_to_many)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-45a908-qfw88c
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Grid, Divider, Avatar, ListItemText, Box } from '@mui/material';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';

import FillerContent from 'components/globals/FillerContent';
import BlogCTA from 'components/cta/BlogCTA';

import HeroJarallax from 'blocks/heroes/HeroJarallax';
import SidebarArticles from 'blocks/sidebars/SidebarArticles';
import SimpleVerticalBlogCards from 'blocks/blog/SimpleVerticalBlogCards/SimpleVerticalBlogCards';
import CtaWithInputField from 'blocks/cta/CtaWithInputField';

import Container from 'components/Container';
import WYSIWYGRender from 'components/globals/WYSIWYGRender';
import useFetch from 'components/hooks/useFetch';

function Article({ content }) {
  console.log(content.article);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const simliarTags = content.tags && content.tags?.data[0]?.meta?.zuid;

  const { data: latestArticles, isPending: latestPending } = useFetch(
    '/-/all-articles-hydrated.json?limit=5',
    content.zestyProductionMode,
  );

  const {
    data: tagArticles,
    //  isPending: tagsPending
  } = useFetch(
    `/-/similar-articles.json?limit=4&tag=${simliarTags}`,
    content.zestyProductionMode,
  );

  const removeErrorHandlingString = /Error hydrating/gi;
  let cleanOutErrorHydrating;

  // Check if "Error hydrating" is being injected and clean out
  // Skip if wysiwyg is empty to avoid error
  const validateWysiwyg = () => {
    if (content.article?.includes('Error hydrating')) {
      cleanOutErrorHydrating = content?.article.replaceAll(
        removeErrorHandlingString,
        '',
      );
      return cleanOutErrorHydrating;
    } else {
      return content.article;
    }
  };
  const authorImage =
    content.author?.data[0]?.headshot?.data[0]?.url || FillerContent.image;
  const authorName = content.author?.data[0]?.name || FillerContent.header;
  const authorDate = content.date || FillerContent.date;
  const authorLink =
    content.author?.data[0]?.meta?.web?.uri || FillerContent.href;

  return (
    <>
      <Box>
        <HeroJarallax
          articleDate={content.date || FillerContent.date}
          title={content?.title || FillerContent.header}
          articleAvatar={
            content?.author?.data[0]?.headshot?.data[0]?.url ||
            FillerContent.image
          }
          image={
            content.hero_image?.data
              ? content.hero_image.data[0].url
              : FillerContent.image
          }
          authorImage={authorImage}
          authorName={authorName}
          authorDate={authorDate}
          featuredAuthorLink={authorLink}
        />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <WYSIWYGRender
                customClass="normal-bullets"
                rich_text={validateWysiwyg() || FillerContent.rich_text}
              ></WYSIWYGRender>
              <Divider sx={{ mt: 5 }} />
              <Container position={'relative'} zIndex={2}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  component={'a'}
                  href={authorLink}
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  <Avatar
                    sx={{ width: 60, height: 60, marginRight: 2 }}
                    src={authorImage}
                  />
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={authorName}
                    secondary={authorDate}
                    primaryTypographyProps={{
                      variant: 'h6',
                      sx: { color: 'common.black' },
                    }}
                    secondaryTypographyProps={{
                      sx: { color: 'rgba(0,0,0,.8)' },
                    }}
                  />
                </Box>
              </Container>

              <BlogCTA
                title={'Insights in your inbox'}
                description={'Subscribe to the Zesty newsletter'}
                ctaBtn={'Subscribe'}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={4} sx={{ minHeight: 700 }}>
                  {latestPending ? (
                    <CircularProgressWithLabel />
                  ) : (
                    <SidebarArticles
                      latestArticles={
                        latestArticles || FillerContent.missingDataArray
                      }
                    />
                  )}
                </Box>
              ) : null}

              {/* <SideBarCTA /> */}
            </Grid>
          </Grid>
        </Container>

        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <SimpleVerticalBlogCards
          cards={tagArticles.length !== 0 ? tagArticles : latestArticles}
          title={
            tagArticles.length !== 0 ? 'Similar stories' : 'Latest articles'
          }
          cta_url={'/mindshare'}
        />
        <CtaWithInputField
          title={'Subscribe to the zestiest newsletter in the industry'}
          description={
            'Get the latest from the Zesty team, from whitepapers to product updates.'
          }
          cta={'Subscribe'}
        />
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </>
  );
}

export default Article;
