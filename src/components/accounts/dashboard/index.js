import { Container, Divider, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import * as helpers from 'utils';
import ZInstancesContainer from './ui/ZInstancesContainer';
import ZMarketingAds from './ui/ZMarketingAds';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ZActivityStream from './ui/ZActivityStream';
import SideContent from './SideContent';
import { OnboardingQuestions } from '../join/OnboardingQuestions';
import { PersonalizationSurvey } from '../join/PersonalizationSurvey';
import { AccountPageloading } from '../ui';
// import { PreferenceQuestions } from '../join/PreferenceQuestions';
// import { MissingQuestions } from '../join/MissingQuestions';
import { joinAppConstants } from '../join/constants';
import { ToolBox } from '../join/ToolBox';
import { pendoScript } from 'components/marketing/Join/pendoScript';

const TOTAL_INSTANCES_LIMIT = 10;
const TOTAL_TEAMS_LIMIT = 5;
const INSTANCE_CARD_LIMIT = 3;

const Dashboard = ({ content = {} }) => {
  const {
    devProjects,
    nonDevProjects,
    userTypeList,
    frameworkList,
    componentsSystemList,
    roleList,
    goalsList,
    inviteUserList,
  } = joinAppConstants;

  const [invites, setinvites] = useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [initialInstances, setInitialInstances] = useState([]);
  const [instances, setInstances] = useState([]);
  const [isInstancesLoading, setIsInstanceLoading] = useState(false);
  const [filteredInstances, setFilteredInstances] = useState([]);
  const [instancesFavorites, setInstancesFavorites] = useState([]);
  const [isTogglingFavorites, setIsTogglingFavorites] = useState(false);
  const [initialRender, setInitialRender] = useState(false);
  const [teams, setTeams] = useState([]);
  const [marketingCards, setMarketingCards] = useState([]);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));

  const toggleFavorites = async (zuid) => {
    setIsTogglingFavorites(true);
    const isExisting = instancesFavorites?.find((e) => e === zuid);
    const favoritesSites = [...instancesFavorites, zuid];
    const filteredFavorites = instancesFavorites?.filter((e) => e !== zuid);
    const prefs = JSON.parse(userInfo.prefs);
    prefs.favorite_sites = !isExisting ? favoritesSites : filteredFavorites;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify(prefs),
    };
    const res = await ZestyAPI.updateUser(userInfo.ZUID, body, '');
    setInstancesFavorites(
      JSON.parse(res?.data?.prefs)?.favorite_sites?.filter((c) => c !== null),
    );
    setIsTogglingFavorites(false);
  };

  const getAllTeams = async () => {
    setIsInstanceLoading(true);
    const response = await ZestyAPI.getAllTeams();
    !response.error && setTeams(response?.data);
    response.error && setTeams([]);
    setIsInstanceLoading(false);
  };

  const handleSearchInstances = (value) => {
    const filterInstances = [...initialInstances]?.filter((instance) =>
      helpers.isMatch(
        [
          instance?.name,
          instance?.ID,
          instance?.ZUID,
          instance?.randomHashID,
          instance?.domain,
        ],
        value,
      ),
    );

    setFilteredInstances([...filterInstances].slice(0, TOTAL_INSTANCES_LIMIT));
  };

  const getInitialInstances = async (instances, favorites) => {
    let instacesFavoritesData = [],
      instancesWOutFavoritesData = [];

    if (favorites?.length > 0) {
      instacesFavoritesData = instances.filter((c) =>
        favorites.includes(c.ZUID),
      );
    }

    if (favorites?.length <= INSTANCE_CARD_LIMIT) {
      instancesWOutFavoritesData = instances.filter(
        (c) => !favorites.includes(c.ZUID),
      );
    }

    return [...instacesFavoritesData, ...instancesWOutFavoritesData];
  };

  // this is an array the key values that checks users
  const prefChecks = [
    'persona',
    'projectName',
    'projectType',
    'userType',
    'goal',
    'preferred_framework',
    'preferred_component_system',
    'company',
    'userInvited',
  ];

  // parse user prefs JSON string otherwise undefined
  // this is use determine if we run the preference component
  const userPrefs =
    typeof userInfo?.prefs === 'string' && JSON.parse(userInfo?.prefs);

  // prefs of old users need to be ignored
  const defaultPrefs = ['favorite_sites', 'instance_layout', 'teamOptions'];
  // preference that trigger the missing preferences component
  const missingPreferences = ['persona'];
  // ignore default prefs for existing/old users
  const existingUserPrefs = Object.keys(userPrefs).filter(
    (e) => !defaultPrefs.includes(e),
  );

  // checking
  const missingUserPrefs = prefChecks
    .filter((x) => !existingUserPrefs.includes(x))
    .concat(existingUserPrefs.filter((x) => !prefChecks.includes(x)));

  const hasPersona = missingUserPrefs.includes('persona');
  const hasProjectName = missingUserPrefs.includes('projectName');
  const hasUserType = missingUserPrefs.includes('userType');
  const hasProjectType = missingUserPrefs.includes('projectType');
  const hasGoal = missingUserPrefs.includes('goal');
  const hasPreferredFramework = missingUserPrefs.includes(
    'preferred_framework',
  );
  const hasPreferredComponentSystem = missingUserPrefs.includes(
    'preferred_component_system',
  );
  const hasCompany = missingUserPrefs.includes('company');
  const hasUserInvited = missingUserPrefs.includes('userInvited');

  if (!userInfo || Object.keys(userInfo)?.length === 0) {
    return <AccountPageloading title={'Zesty.io'} />;
  }

  // the user dont have preferences we use this boolean to launch preference component
  const isUserMissingPrefs = Object.keys(userPrefs).length === 0 ? true : false;
  // const newUserHasInvite =
  //   invites?.length > 0 && ssoLaunchVsUserCreated > 0 ? true : false;

  const getAllInvitedInstances = async () => {
    setIsInstanceLoading(true);
    const res = await ZestyAPI.getAllInvitedInstances();
    if (Array.isArray(res?.data) && res?.status === 200) {
      setinvites(res?.data);
    } else {
      setinvites([]);
    }
    setIsInstanceLoading(false);
  };

  const onBoardingQuestionProps = {
    content,
    // check for missing prefs
    hasCompany,
    hasGoal,
    hasPersona,
    hasProjectName,
    hasPreferredComponentSystem,
    hasPreferredFramework,
    hasUserType,
    hasProjectType,
    hasUserInvited,
    // constants
    devProjects,
    nonDevProjects,
    userTypeList,
    frameworkList,
    componentsSystemList,
    roleList,
    goalsList,
    inviteUserList,
  };

  // const missingQuestionProps = {
  //   content,
  //   devProjects,
  //   nonDevProjects,
  //   userTypeList,
  //   frameworkList,
  //   componentsSystemList,
  //   roleList,
  //   goalsList,
  //   hasCompany,
  //   hasGoal,
  //   hasPersona,
  //   hasProjectName,
  //   hasPreferredComponentSystem,
  //   hasPreferredFramework,
  //   hasUserType,
  //   hasUserInvited,
  //   hasProjectType,
  //   inviteUserList,
  // };

  const personalizationProps = {
    content,
    devProjects,
    nonDevProjects,
    userTypeList,
    frameworkList,
    componentsSystemList,
    roleList,
    goalsList,
    hasCompany,
    hasGoal,
    hasPersona,
    hasProjectName,
    hasPreferredComponentSystem,
    hasPreferredFramework,
    hasUserType,
    hasUserInvited,
    hasProjectType,
    inviteUserList,
  };

  useEffect(() => {
    getAllInvitedInstances();
  }, []);

  useEffect(() => {
    getAllTeams();
  }, []);

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      setInstancesFavorites(
        JSON.parse(userInfo?.prefs)?.favorite_sites?.filter((c) => c !== null),
      );
    }
  }, [userInfo]);

  useEffect(() => {
    const getInstances = async () => {
      const favorites = JSON.parse(userInfo?.prefs)?.favorite_sites?.filter(
        (c) => c !== null,
      );

      setIsInstanceLoading(true);
      const res = await ZestyAPI.getInstances();
      setInstances([...(await getInitialInstances(res?.data, favorites))]);
      setInitialRender(true);
      setFilteredInstances([...res?.data].slice(0, TOTAL_INSTANCES_LIMIT));
      setInitialInstances([...res?.data]);
      setIsInstanceLoading(false);
    };

    if (userInfo && Object.keys(userInfo).length !== 0) {
      getInstances();
    }
  }, [userInfo]);

  useEffect(() => {
    const getMarketingCards = async () => {
      const response = await fetch(
        helpers.isProd
          ? 'https://www.zesty.io/-/accountsdashcards.json'
          : 'https://kfg6bckb-dev.webengine.zesty.io/-/accountsdashcards.json',
      );
      const data = await response.json();
      setMarketingCards(Object.entries(data[0]));
    };
    getMarketingCards();
  }, []);

  useEffect(() => {
    const runSettingInstances = async () => {
      setInstances([
        ...(await getInitialInstances(instances, instancesFavorites)),
      ]);
    };
    runSettingInstances();
  }, [instancesFavorites]);

  //! for testing only
  // return <OnboardingQuestions {...onBoardingQuestionProps} />;

  //! old check
  // if (newUserHasInvite) {
  //   return <PreferenceQuestions content={content} />;
  // } else if (isNewUser && !isDecisionMaker) {
  //   return <OnboardingQuestions {...onBoardingQuestionProps} />;
  // } else if (missingUserPrefs?.length > 0 && !isDecisionMaker) {
  //   return <MissingQuestions {...missingQuestionProps} />;
  // } else if (missingUserPrefs[0] === 'persona') {
  //   return <PersonalizationSurvey content={content} />;
  // }

  // 1 if no instances and no invites and no preferences
  // return onboarding questions w/ preferences === true
  // 2 if no instances and no invites return onboarding question w/ preferences === false
  // 3 if no preferences return personalization survey
  // 4 if has instances has invites ignore

  const hasMissingPrefs =
    missingUserPrefs?.filter((value) => missingPreferences?.includes(value))
      ?.length !== 0
      ? true
      : false;
  //* if newuser dont have invites and dont have instances show onboarding
  if (
    initialInstances?.length === 0 &&
    invites?.length === 0 &&
    isUserMissingPrefs
  ) {
    return <OnboardingQuestions {...onBoardingQuestionProps} />;
    //* if old user and has missing preference
  } else if (hasMissingPrefs) {
    return <PersonalizationSurvey {...personalizationProps} />;
  }

  //* else show dashboard
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={(theme) => ({
          maxWidth: theme.breakpoints.values.xl2,
          px: 3,
        })}
      >
        {pendoScript}
        {!content.zestyProductionMode && <ToolBox title="" />}
        <Grid container spacing={2} mt={1}>
          <Grid
            sx={(theme) => ({
              height: { md: `calc(100vh - ${theme.tabTop}px)` },
              position: { md: 'sticky' },
              top: { md: `${theme.tabTop}px` },
              overflowY: { md: 'auto' },
              maxWidth: { md: '384px' },
              '::-webkit-scrollbar': {
                display: 'none',
              },
            })}
            md={3}
            lg={2}
            xs={12}
            item
          >
            <SideContent
              instances={filteredInstances}
              totalInstancesLimit={TOTAL_INSTANCES_LIMIT}
              totalTeamsLimit={TOTAL_TEAMS_LIMIT}
              unfilteredTotalInstances={initialInstances?.length}
              handleSearchInstances={handleSearchInstances}
              teams={teams}
            />
          </Grid>

          <Grid xs={12} md={9} lg={10} item>
            <Stack pb={2}>
              <ZInstancesContainer
                firstName={userInfo?.firstName}
                instances={instances?.slice(0, 3)}
                isInstancesLoading={isInstancesLoading}
                isTogglingFavorites={isTogglingFavorites}
                toggleFavorites={toggleFavorites}
                instancesFavorites={instancesFavorites}
              />
            </Stack>
            <Divider />
            <Grid container>
              <Grid
                py={2}
                item
                xs={12}
                lg={9.5}
                borderRight={`1px solid ${grey[400]}`}
              >
                <ZActivityStream
                  instances={instances}
                  instancesFavorites={instancesFavorites}
                  initialRender={initialRender}
                />
              </Grid>
              {isLG && (
                <Grid p={2} item xs={12} lg={2.5}>
                  <ZMarketingAds marketingCards={marketingCards} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
