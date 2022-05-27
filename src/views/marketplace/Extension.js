// prettier-ignore
import { Accordion, AccordionDetails,AccordionSummary,Box,Button,
  Chip,Divider,Grid,Link,Stack,Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FillerContent from 'components/FillerContent';
import styled from '@emotion/styled';
import ExtensionsIntaller from 'components/marketplace/ExtensionsIntaller';
import { getCookie } from 'cookies-next';
import { AppInstallerComp } from 'components/marketplace/AppInstallerComp';
import {
  ModuleInstaller,
  ResourceLinkComp,
} from 'components/marketplace/ResourceLinkComp';

function showTitle(isSM, props) {
  return (
    isSM && (
      <>
        <Typography variant="h4" fontWeight="bold" mt={{ xs: 2, md: 0 }}>
          {props.name}
        </Typography>
        <Typography color="text.secondary" mb={1}>
          {props.subtitle}
        </Typography>
      </>
    )
  );
}

function showDetails(props) {
  return (
    <>
      <Typography>Author: {props?.author?.data?.[0]?.name}</Typography>
      <Typography>
        Github: <Link href={props?.github_url}>{props?.github_url}</Link>
      </Typography>
      <Typography>
        Type:{' '}
        <Link
          href={props?.meta?.web?.uri?.replace(props?.meta?.web?.fragment, '')}
        >
          Entity Type
        </Link>
      </Typography>
      <Typography>
        Published: {new Date(`${props?.meta?.createdAt}`).toLocaleDateString()}
      </Typography>
    </>
  );
}

const StyledYoutubeEmbed = styled('div')`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin: 1rem 0;

  & iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const YoutubeEmbed = ({ youtubeHash }) => {
  return (
    youtubeHash && (
      <StyledYoutubeEmbed>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${youtubeHash}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </StyledYoutubeEmbed>
    )
  );
};

const InstallButton = ({ data, theme }) => {
  if (data.app_zuid) {
    return <AppInstallerComp data={data} />;
  } else if (data.github_url && !data.app_zuid && !data.resource_link) {
    return (
      <ExtensionsIntaller
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        fullWidth
        extensionName={data?.name}
        githubUrl={data?.github_url}
        instance={getCookie('ZESTY_WORKING_INSTANCE')}
      />
    );
  } else if (data.resource_link) {
    return <ResourceLinkComp data={data} />;
  } else {
    return (
      <Button
        href="#"
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: theme.palette.zesty.zestyLightGrey,
          color: theme.palette.common.white,
        }}
        disabled
        fullWidth
      >
        Coming Soon
      </Button>
    );
  }
};

const Extension = (props) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Grid container spacing={4} mt={2}>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <img
            src={props?.image?.data[0]?.url || FillerContent.image}
            width="220px"
          />
          {showTitle(isSM, props)}
          <InstallButton data={props} theme={theme} />
          {!isSM && (
            <>
              <Stack my={2} gap={1} alignSelf="start">
                {showDetails(props)}
              </Stack>
              <Divider flexItem orientation="horizontal" />

              <Stack alignSelf="start">
                <Typography variant="h6" mt={2} textAlign="left">
                  Categories
                </Typography>
                <Box display="flex" gap={2} flexWrap="wrap" my={2}>
                  {props?.tags?.data?.map((tag, index) => (
                    <Chip
                      key={index}
                      variant="outlined"
                      color="secondary"
                      label={tag?.model_alternate_name || 'Missing tag name'}
                    />
                  ))}
                </Box>
              </Stack>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {showTitle(!isSM, props)}

            <img
              alt="placard image"
              src={props?.placard_image?.data[0]?.url || FillerContent.image}
              width="100%"
            />

            <YoutubeEmbed youtubeHash={props?.youtube_video_hash} />
            <div
              dangerouslySetInnerHTML={{
                __html: props?.info || FillerContent.description,
              }}
            />

            {isSM && (
              <>
                <Typography fontWeight="bold" variant="h4" my={2}>
                  Additonal Information
                </Typography>
                <Accordion disableGutters>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box display="flex" gap={2} flexDirection="column">
                      {showDetails(props)}
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion disableGutters>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">Categories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box display="flex" gap={2} flexWrap="wrap">
                      {props?.tags?.data?.map((tag, index) => (
                        <Chip
                          key={index}
                          variant="outlined"
                          color="secondary"
                          label={
                            tag?.model_alternate_name || 'Missing tag name'
                          }
                        />
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Extension;
