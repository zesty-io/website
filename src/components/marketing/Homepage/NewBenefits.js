/**
 * React Imports
 */

/**
 * MUI Imports
 */

import { Box, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';

/**
 * Components Imports
 */

import DemoCta from 'components/cta/DemoCta';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const NewBenefits = ({
  content,
  FillerContent,
  theme,
  //  isLarge, isMedium
}) => {
  // const [activeSlide, setActiveSlide] = useState();

  return (
    <Box
      component="section"
      sx={{ background: theme.palette.zesty.zestyGray99, py: 10 }}
    >
      <Container>
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                variant: 'h3',
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
                component: 'p',
                variant: 'h6',
                sx: {
                  mt: 2,
                  color: theme.palette.zesty.zestyZambezi,
                  textAlign: 'center',
                },
              },
            },
          }}
        >
          {content.zesty_new_benefits}
        </MuiMarkdown>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <DemoCta
            icon={false}
            href={content.middle_cta_button_link?.data[0].meta.web.uri}
            sx={{
              mt: 4,
              background: theme.palette.zesty.zestyOrange,
              color: theme.palette.common.white,
              '&:hover': {
                background: theme.palette.zesty.zestyOrange,
              },
            }}
            text={content.middle_cta_button_text || FillerContent.href}
          />
        </Box>

        {/* <Box sx={{ mt: 5 }}>
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            // Disabled auto play temporarily due to bug
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            loop
            speed={2000}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {content.zesty_benefits_tiles.data.map((item, index) => (
              <SwiperSlide key={index}>
                <SlideWrapper
                  isLarge={isLarge}
                  setActiveSlide={setActiveSlide}
                  item={item}
                  index={index}
                >
                  <ZestyImage
                    width={715}
                    height={480}
                    loading="lazy"
                    style={{ width: '100%', maxWidth: 715, height: 'auto' }}
                    src={`${item.benefit_image?.data[0].url}?width=715`}
                    alt={item.header}
                  />
                  <Box
                    className="slide-description"
                    sx={{ textAlign: 'center', display: 'flex' }}
                  ></Box>
                </SlideWrapper>
              </SwiperSlide>
            ))}

            <Box
              sx={{
                minHeight: 200,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                width: '100%',
                maxWidth: 965,
                margin: 'auto',
                mt: isLarge ? 2 : 0,
              }}
            >
              <Box sx={{ display: isMedium ? 'none' : 'block' }}>
                <SwiperButtonPrev />
              </Box>
              {
                <Box>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      color: theme.palette.zesty.zestyDarkText,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {activeSlide?.header || FillerContent.description}
                  </Typography>
                  <MuiMarkdown
                    overrides={{
                      p: {
                        component: Typography,
                        props: {
                          component: 'p',
                          variant: 'h6',
                          color: theme.palette.zesty.zestyZambezi,
                          sx: {
                            mt: 2,
                            textAlign: 'center',
                          },
                        },
                      },
                    }}
                  >
                    {activeSlide?.benefit_content || FillerContent.description}
                  </MuiMarkdown>
                </Box>
              }
              <Box sx={{ display: isMedium ? 'none' : 'block' }}>
                <SwiperButtonNext />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                display: isMedium ? 'flex' : 'none',
              }}
            >
              <SwiperButtonPrev />
              <SwiperButtonNext />
            </Box>
          </Swiper>
        </Box> */}
      </Container>
    </Box>
  );
};

export default NewBenefits;

// const SwiperButtonNext = ({ children }) => {
//   const theme = useTheme();
//   const swiper = useSwiper();

//   return (
//     <>
//       <Box
//         sx={{
//           width: 38,
//           height: 38,
//           cursor: 'pointer',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           border: `1px solid ${theme.palette.zesty.zestyZambezi}`,
//           borderRadius: '50%',
//         }}
//         onClick={() => {
//           swiper.slideNext();
//         }}
//       >
//         <ArrowForwardIosIcon
//           sx={{ width: '100%', color: theme.palette.zesty.zestyZambezi }}
//         />
//       </Box>
//     </>
//   );
// };

// const SwiperButtonPrev = ({ children }) => {
//   const theme = useTheme();
//   const swiper = useSwiper();
//   return (
//     <>
//       <Box
//         sx={{
//           width: 38,
//           height: 38,
//           cursor: 'pointer',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           border: `1px solid ${theme.palette.zesty.zestyZambezi}`,
//           borderRadius: '50%',
//         }}
//         onClick={() => {
//           swiper.slidePrev();
//         }}
//       >
//         <ArrowBackIosNewIcon
//           sx={{ width: '100%', color: theme.palette.zesty.zestyZambezi }}
//         />
//       </Box>
//     </>
//   );
// };

// const SlideWrapper = ({ children, item, index, setActiveSlide, isLarge }) => {
//   const swiperSlide = useSwiperSlide();

//   useEffect(() => {
//     if (swiperSlide.isNext) {
//       setActiveSlide(item);
//     }
//   }, [swiperSlide]);

//   return (
//     <>
//       <Box
//         className="new-benefits-slide-wrapper"
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           img: {
//             opacity: isLarge ? 1 : !swiperSlide.isNext ? 0.1 : 1,
//             filter: isLarge
//               ? 'grayscale(0%)'
//               : !swiperSlide.isNext
//               ? 'grayscale(100%)'
//               : 'grayscale(0%)',
//             transition: 'opacity 1.5s ease',
//           },
//           '.slide-description': {
//             display: !swiperSlide.isNext ? 'none' : 'flex',
//           },
//         }}
//       >
//         {children}
//       </Box>
//     </>
//   );
// };
