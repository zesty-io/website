import { Grid } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardListItem from './ui/DashboardListItem';
import MyCard from './ui/MyCard';
import MyTimeLine from './ui/MyTimeline';

const timelineLists = [
  {
    title: '3 days ago',
    description: 'New Audit Log events and event context',
  },
  {
    title: '4 days ago',
    description:
      'GitHub Actions: Use the GITHUB_TOKEN with workflow_dispatch and repository_dispatch',
  },
  {
    title: '4 days ago',
    description: 'Dependabot unlocks transitive dependencies for npm projects',
  },
  {
    title: '5 days ago',
    description:
      'Custom repository role creation APIs are now available in public beta',
  },
];

const dashboardLists = [
  {
    image: 'https://avatars.githubusercontent.com/u/8280627?s=64&v=4',
    headerTitle:
      '  zesty-io made zesty-io/bitbucket-auto-merge public 20days ago',
    itemTitle: 'zesty-io/bitbucket-auto-merge',
    itemDescription:
      'A remote endpoint to auto merge bitbucket repository branches',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/8280627?s=64&v=4',
    headerTitle:
      '  zesty-io made zesty-io/bitbucket-auto-merge public 20days ago',
    itemTitle: 'zesty-io/bitbucket-auto-merge',
    itemDescription:
      'A remote endpoint to auto merge bitbucket repository branches',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/8280627?s=64&v=4',
    headerTitle:
      '  zesty-io made zesty-io/bitbucket-auto-merge public 20days ago',
    itemTitle: 'zesty-io/bitbucket-auto-merge',
    itemDescription:
      'A remote endpoint to auto merge bitbucket repository branches',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/8280627?s=64&v=4',
    headerTitle:
      '  zesty-io made zesty-io/bitbucket-auto-merge public 20days ago',
    itemTitle: 'zesty-io/bitbucket-auto-merge',
    itemDescription:
      'A remote endpoint to auto merge bitbucket repository branches',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/8280627?s=64&v=4',
    headerTitle:
      '  zesty-io made zesty-io/bitbucket-auto-merge public 20days ago',
    itemTitle: 'zesty-io/bitbucket-auto-merge',
    itemDescription:
      'A remote endpoint to auto merge bitbucket repository branches',
  },
];

const MainContent = () => {
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid container spacing={5} my={2}>
      <Grid item xs={12} lg={9}>
        <DashboardListItem dashboardLists={dashboardLists} />
      </Grid>

      {isLG && (
        <Grid item lg={3}>
          <MyCard
            title="GitHub Copilot"
            description="Get suggestions for lines of code and entire functions in real-time"
            actionTitle="Learn more about Copilot"
          />
          <MyTimeLine title="Latest changes" timelineLists={timelineLists} />
        </Grid>
      )}
    </Grid>
  );
};

export default MainContent;
