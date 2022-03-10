import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const Gallery = ({photos}) => {
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

  // const photos = [
  //   {
  //     src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
  //     source: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
  //     rows: 1,
  //     cols: 2,
  //   },
  //   {
  //     src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
  //     source: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
  //     rows: 1,
  //     cols: 1,
  //   },
  //   {
  //     src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
  //     source: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
  //     rows: 1,
  //     cols: 1,
  //   },
  //   {
  //     src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
  //     source: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
  //     rows: 1,
  //     cols: 2,
  //   },
  // ];

  return (
    <Box>
      {/* <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
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
      </Box> */}
      <Box>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 200}
          gap={isMd ? 16 : 4}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={i % 3 == 0 ? 1 : 2} rows={1}>
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.url}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
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
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
