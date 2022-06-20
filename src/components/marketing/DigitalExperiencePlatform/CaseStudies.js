/**
 * MUI Imports
 */
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Helpers Imports
 */
import * as helper from 'utils';
import styled from '@emotion/styled';

const CaseStudies = ({ content, theme, isMobile }) => {
  const [active, setactive] = useState(content?.case_studies?.data[0]);

  return (
    <Box paddingY={isMobile ? 8 : 0} sx={{}}>
      <Container sx={{}}>
        <Typography
          component={'h2'}
          variant={'p'}
          paddingBottom={4}
          sx={{
            fontSize: isMobile ? '20px' : '32px',
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'center',
          }}
          dangerouslySetInnerHTML={{
            __html: helper.strColorChanger(
              content.case_study_header,
              '',
              theme.palette.zesty.zestyOrange,
            ),
          }}
        />
      </Container>
      <Box
        paddingY={isMobile ? 4 : 8}
        sx={{
          background: theme.palette.zesty.zestyLightRedOrange,
          height: isMobile ? '60vh' : 'auto',
        }}
      >
        <Container
          sx={{
            height: '20rem',
            background: theme.palette.zesty.zestyLightRedOrange,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            alignItems: 'center',
          }}
        >
          <Box
            paddingX={isMobile ? 2 : 8}
            paddingY={isMobile ? 8 : 8}
            boxShadow={2}
            marginLeft={2}
            borderRadius={2}
            sx={{
              width: '100%',
              display: isMobile ? 'flex' : 'grid',
              flexDirection: 'column',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              background: theme.palette.common.white,
            }}
          >
            <Box
              borderRadius={2}
              overflow={'hidden'}
              bgcolor="red"
              sx={{ display: isMobile ? 'none' : 'block' }}
            >
              <img
                src={
                  active?.image?.data[0]?.url || FillerContent.dashboard_image
                }
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </Box>
            <Box sx={{ background: '' }}>
              <Box
                paddingBottom={2}
                sx={{
                  display: 'flex',
                  justifyItems: 'flex-start',
                  justifyContent: isMobile ? 'center' : 'start',
                }}
              >
                <img src={active.logo.data[0].url} />
              </Box>
              <Typography
                sx={{
                  color: theme.palette.zesty.zestyGray,
                  fontWeight: 500,
                  fontSize: isMobile ? '14px' : '20px',
                  textAlign: 'left',
                }}
              >
                {active?.summary}
              </Typography>
            </Box>
          </Box>
          <Box
            paddingY={4}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              justifyItems: 'center',
              gap: '3rem',
              width: isMobile ? '100%' : '10rem',
              background: 'transparent',
            }}
          >
            {content.case_studies?.data?.map((e, i) => {
              return (
                <CustomButton
                  active={active?.title === e?.title ? true : false}
                  theme={theme}
                  onClick={() => setactive(e)}
                >
                  <img src={e.logo.data[0].url} />
                </CustomButton>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

const CustomButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  user-select: none;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
  &:active {
    transform: scale(0.9);
  }
  &:focus {
  }
  &:hover {
    opacity: 1;
  }
`;

export default CaseStudies;
