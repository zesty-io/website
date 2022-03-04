/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: About 
 * Name: about 
 * Model ZUID: 6-7c4bbc-wh1sg6
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * hero_content (wysiwyg_basic)
 * page_content (wysiwyg_basic)
 * hero_image (images)
 * section_image (images)
 * team_members (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-7c4bbc-wh1sg6
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

// import Main from '../../layouts/Main';
import Container from 'components/Container';

// Headliner imports
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// Gallery imports
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

function AboutZestyModel({ content }) {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
      rows: 1,
      cols: 2,
    },
  ];

//   Main is not needed in page builds as it will duplicate the header and footer

  return (
    <>
      {/* <Main /> */}
      <Box>
        <Container>
          <Box
            sx={{
              position: 'relative',
              '&::after': {
                position: 'absolute',
                content: '""',
                width: '30%',
                zIndex: 1,
                top: 0,
                right: 0,
                height: '100%',
                backgroundSize: '18px 18px',
                backgroundImage: `radial-gradient(${alpha(
                  theme.palette.primary.dark,
                  0.4,
                )} 20%, transparent 20%)`,
                opacity: 0.2,
              },
            }}
          >
            <Box position="relative" zIndex={2}>
              <Typography
                fontWeight={600}
                variant={'h2'}
                gutterBottom
                align={'center'}
              >
                About us
              </Typography>
              <Typography
                variant="h6"
                color={'text.secondary'}
                align={'center'}
                gutterBottom
              >
                We take you by hand on each step of the process
              </Typography>
              <Typography
                variant="h6"
                color={'text.secondary'}
                align={'center'}
              >
                As experts in both design & development, we help you go through
                the complete process. From your new website idea, to design,
                development, launch and scale!
              </Typography>
            </Box>
          </Box>
        </Container>
        <Container paddingY={'0 !important'}>
          <Box>
            <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
              <Button
                color="primary"
                size="large"
                endIcon={
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                }
                onClick={() => openLightbox(0)}
              >
                Open the gallery
              </Button>
            </Box>
            <Box>
              <ImageList
                variant="quilted"
                cols={3}
                rowHeight={isMd ? 300 : 200}
                gap={isMd ? 16 : 4}
              >
                {photos.map((item, i) => (
                  <ImageListItem key={i} cols={item.cols} rows={item.rows}>
                    <LazyLoadImage
                      height={'100%'}
                      width={'100%'}
                      src={item.src}
                      alt="..."
                      effect="blur"
                      onClick={() => openLightbox(i)}
                      style={{
                        objectFit: 'cover',
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.7)'
                            : 'none',
                        cursor: 'poiner',
                        borderRadius: 8,
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            {viewerIsOpen && (
              <Lightbox
                mainSrc={photos[currentImage].src}
                nextSrc={photos[(currentImage + 1) % photos.length].src}
                prevSrc={
                  photos[(currentImage + photos.length - 1) % photos.length].src
                }
                onCloseRequest={() => closeLightbox()}
                onMovePrevRequest={() =>
                  setCurrentImage(
                    (currentImage + photos.length - 1) % photos.length,
                  )
                }
                onMoveNextRequest={() =>
                  setCurrentImage((currentImage + 1) % photos.length)
                }
                reactModalStyle={{ overlay: { zIndex: 1500 } }}
              />
            )}
          </Box>
        </Container>
        {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
        <br />
        <br />
        {/* <h1 dangerouslySetInnerHTML={{ __html: content.hero_content }}></h1>
        <h1
          dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
        ></h1>
        <div>{content.meta.web.seo_meta_description}</div> */}
        <div
          style={{
            background: '#eee',
            border: '1px #000 solid',
            margin: '10px',
            padding: '20px',
          }}
        >
          <h2>Accessible Zesty.io JSON Object</h2>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </div>
        {/* End of Zesty.io output example */}
      </Box>
      {/* <Main /> */}
    </>
  );
}

export default AboutZestyModel;
