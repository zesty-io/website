import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import MainContent from './MainContent';
import SideContent from './SideContent';
import * as helpers from 'utils';

const TOTAL_INSTANCES_LIMIT = 10;
const TOTAL_TEAMS_LIMIT = 5;
const INSTANCE_CARD_LIMIT = 3;

const Dashboard = () => {
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [instances, setInstances] = useState([]);
  const [isInstancesLoading, setIsInstanceLoading] = useState(false);
  const [filteredInstances, setFilteredInstances] = useState([]);
  const [instancesFavorites, setInstancesFavorites] = useState([]);
  const [isTogglingFavorites, setIsTogglingFavorites] = useState(false);
  const [teams, setTeams] = useState([]);
  const [marketingCards, setMarketingCards] = useState([]);

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
    setInstancesFavorites(JSON.parse(res?.data?.prefs)?.favorite_sites);
    setIsTogglingFavorites(false);
  };

  const getAllTeams = async () => {
    const response = await ZestyAPI.getAllTeams();
    setTeams(response?.data);
  };

  const handleSearchInstances = (value) => {
    const filterInstances = [...instances]?.filter((instance) =>
      instance?.name.toLowerCase().includes(value),
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
      instancesWOutFavoritesData = instances
        .filter((c) => !favorites.includes(c.ZUID))
        ?.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
    }

    return [...instacesFavoritesData, ...instancesWOutFavoritesData];
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  useEffect(() => {
    const getInstances = async () => {
      const favorites = JSON.parse(userInfo?.prefs)?.favorite_sites?.filter(
        (c) => c !== null,
      );

      setIsInstanceLoading(true);
      const res = await ZestyAPI.getInstances();
      setInstances([...(await getInitialInstances(res?.data, favorites))]);
      setFilteredInstances([...res?.data].slice(0, TOTAL_INSTANCES_LIMIT));
      setIsInstanceLoading(false);
    };

    if (userInfo && Object.keys(userInfo).length !== 0) {
      getInstances();
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      setInstancesFavorites(
        JSON.parse(userInfo?.prefs)?.favorite_sites?.filter((c) => c !== null),
      );
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

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.xl2,
        px: 3,
      })}
    >
      <Grid container spacing={2}>
        <Grid
          sx={{
            height: { md: `calc(100vh - 66px)` },
            position: { md: 'sticky' },
            top: { md: '66px' },
            overflowY: { md: 'auto' },
            maxWidth: { md: '384px' },
          }}
          md={3}
          lg={2}
          xs={12}
          item
        >
          <SideContent
            instances={filteredInstances}
            totalInstancesLimit={TOTAL_INSTANCES_LIMIT}
            totalTeamsLimit={TOTAL_TEAMS_LIMIT}
            unfilteredTotalInstances={instances?.length}
            handleSearchInstances={handleSearchInstances}
            teams={teams}
          />
        </Grid>

        <Grid xs={12} md={9} lg={10} item>
          <MainContent
            instances={instances}
            isInstancesLoading={isInstancesLoading}
            toggleFavorites={toggleFavorites}
            instancesFavorites={instancesFavorites}
            marketingCards={marketingCards}
            isTogglingFavorites={isTogglingFavorites}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
