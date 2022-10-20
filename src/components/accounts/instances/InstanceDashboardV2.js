import {
  Container,
  InputAdornment,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import ZInstanceItem from 'components/accounts/dashboard/ui/ZInstanceItem';
import React, { useEffect, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';

import { useZestyStore } from 'store';
import * as helpers from 'utils';
import CustomMenu from './CustomMenu';
import useDropdown from 'components/hooks/useDropdown';
import { ComboBox } from 'components/globals/ComboBox';
import { useSnackbar } from 'notistack';
import { notistackMessage } from 'utils';
import InstancesTypes from './InstancesTypes';

const orderByItems = [
  {
    name: 'asc',
    label: 'Name (A to Z)',
  },
  {
    name: 'desc',
    label: 'Name (Z to A)',
  },
];

const InstanceDashboardV2 = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [favorites, setFavorites] = useState([]);
  const [initialInstances, setInitialInstances] = useState([]);
  const [initialInvites, setInitialInvites] = useState([]);
  const [instancesList, setInstancesList] = useState([]);
  const [favoritesInstancesList, setFavoritesInstancesList] = useState([]);
  const [invitesList, setInvitesList] = useState([]);
  const [isInstancesLoading, setIsInstancesLoading] = useState(false);
  const [isTogglingFavorites, setIsTogglingFavorites] = useState(false);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [orderByValue, setOrderByValue, reset] = useDropdown();
  const [ecosystem, setEcosystem] = useState([]);
  const [selectedEcosystem, setSelectedEcosystem] = useState(null);

  const handleSetInvitesList = (value) => {
    if (selectedEcosystem) {
      setInvitesList(
        initialInvites
          ?.filter((e) => e.ecoZUID === selectedEcosystem)
          ?.filter(
            (c) =>
              c?.name?.toLowerCase().includes(value) ||
              c?.randomHashID?.toLowerCase().includes(value),
          ),
      );
    } else {
      setInvitesList(
        initialInvites?.filter(
          (c) =>
            c?.name?.toLowerCase().includes(value) ||
            c?.randomHashID?.toLowerCase().includes(value),
        ),
      );
    }
  };

  const handleSetInstancesList = (value, newFavorites) => {
    if (selectedEcosystem) {
      setInstancesList(
        initialInstances
          ?.filter((e) => e.ecoZUID === selectedEcosystem)
          ?.filter((instance) => !newFavorites?.includes(instance?.ZUID))
          ?.filter(
            (c) =>
              c?.name?.toLowerCase().includes(value) ||
              c?.randomHashID?.toLowerCase().includes(value),
          ),
      );
    } else {
      setInstancesList(
        initialInstances
          ?.filter((instance) => !newFavorites?.includes(instance?.ZUID))
          ?.filter(
            (c) =>
              c?.name?.toLowerCase().includes(value) ||
              c?.randomHashID?.toLowerCase().includes(value),
          ),
      );
    }
  };

  const handleSetFavoritesInstancesList = (value, newFavorites) => {
    if (selectedEcosystem) {
      setFavoritesInstancesList(
        initialInstances
          ?.filter((e) => e.ecoZUID === selectedEcosystem)
          ?.filter((instance) => newFavorites?.includes(instance?.ZUID))
          ?.filter(
            (c) =>
              c?.name?.toLowerCase().includes(value) ||
              c?.randomHashID?.toLowerCase().includes(value),
          ),
      );
    } else {
      setFavoritesInstancesList(
        initialInstances
          ?.filter((instance) => newFavorites?.includes(instance?.ZUID))
          ?.filter(
            (c) =>
              c?.name?.toLowerCase().includes(value) ||
              c?.randomHashID?.toLowerCase().includes(value),
          ),
      );
    }
  };

  const handleChangeView = (e, value) => {
    if (value === null) setView(view);
    else setView(value);
  };

  const getAllEcosystem = async () => {
    const response = await ZestyAPI.getALLEcosystems();
    setEcosystem([...response?.data]);
  };

  const getAllInvitedInstances = async () => {
    const response = await ZestyAPI.getAllInvitedInstances();
    setInitialInvites([...response?.data]);
    setInvitesList([...response?.data]);
  };

  const respondToInvite = async (inviteZUID, action) => {
    const response = await ZestyAPI.respondToInvite(inviteZUID, action);

    await notistackMessage(
      enqueueSnackbar,
      {
        message: `Successfully ${
          action === 'accept' ? 'accepted' : 'declined'
        }`,
        callback: async () => {
          await getAllInvitedInstances();
          setFavorites(favorites);
          await getInstances(favorites);
        },
      },
      response,
    );
  };

  const toggleFavorites = async (zuid) => {
    setIsTogglingFavorites(true);
    const isExisting = favorites?.find((e) => e === zuid);
    const favoritesSites = [...favorites, zuid];
    const filteredFavorites = favorites?.filter((e) => e !== zuid);
    const prefs = JSON.parse(userInfo.prefs);
    prefs.favorite_sites = !isExisting ? favoritesSites : filteredFavorites;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify(prefs),
    };
    const res = await ZestyAPI.updateUser(userInfo.ZUID, body, '');
    const newFavorites = JSON.parse(res?.data?.prefs)?.favorite_sites;
    setFavorites(newFavorites);
    handleSetFavoritesInstancesList(search, newFavorites);
    handleSetInstancesList(search, newFavorites);

    setIsTogglingFavorites(false);
  };

  const getInstances = async (favoritesList) => {
    setIsInstancesLoading(true);
    const res = await ZestyAPI.getInstances();
    setInitialInstances([...res?.data]);

    setInstancesList(
      [...res?.data]?.filter(
        (instance) => !favoritesList?.includes(instance?.ZUID),
      ),
    );

    setFavoritesInstancesList(
      [...res?.data]?.filter((instance) =>
        favoritesList?.includes(instance?.ZUID),
      ),
    );

    setIsInstancesLoading(false);
  };

  const renderInstances = (view, instance) => {
    const props = {
      orientation: view,
      isTogglingFavorites,
      image: instance?.screenshotURL,
      title: instance?.name,
      secondaryTitle: `Updated ${instance.updatedAt}`,
      zuidLink: `/instances/${instance.ZUID}`,
      previewLink: `https://${instance?.randomHashID}-dev${
        helpers?.isProd ? '.webengine.zesty.io' : '.preview.dev.zesty.io'
      }`,
      managerLink: `https://${instance?.ZUID}.manager${
        helpers?.isProd ? '' : '.dev'
      }.zesty.io/`,
      isFavorite: favorites?.find((c) => c === instance.ZUID),
      toggleFavorites: () => toggleFavorites(instance.ZUID),
      key: instance.ZUID,
      acceptInvite: () => respondToInvite(instance.inviteZUID, 'accept'),
      declineInvite: () => respondToInvite(instance.inviteZUID, 'decline'),
      isInvite:
        invitesList?.filter((c) => instance?.ZUID === c?.ZUID)?.length > 0,
    };

    return <ZInstanceItem {...props} />;
  };

  // setting favorites & setting instances
  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      const favoritesList = JSON.parse(userInfo?.prefs)?.favorite_sites?.filter(
        (c) => c !== null,
      );
      setFavorites(favoritesList);
      getInstances(favoritesList);
      getAllInvitedInstances();
      getAllEcosystem();
    }
  }, [userInfo]);

  useEffect(() => {
    handleSetInstancesList(search, favorites);
    handleSetFavoritesInstancesList(search, favorites);
    handleSetInvitesList(search, favorites);
  }, [selectedEcosystem, favorites]);

  useEffect(() => {
    if (orderByValue === 'asc') {
      setInstancesList(
        instancesList.sort((a, b) => a.name.localeCompare(b.name)),
      );
      setFavoritesInstancesList(
        favoritesInstancesList.sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
    if (orderByValue === 'desc') {
      setInstancesList(
        instancesList.sort((a, b) => b.name.localeCompare(a.name)),
      );
      setFavoritesInstancesList(
        favoritesInstancesList.sort((a, b) => b.name.localeCompare(a.name)),
      );
    }
    reset();
  }, [orderByValue]);

  return (
    <Container maxWidth={false} sx={{ my: 2 }}>
      <Stack
        spacing={2}
        mb={2}
        alignItems={{ xs: 'start', md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
      >
        <ComboBox
          initialLabel="Select Ecosystems"
          instances={ecosystem}
          setCookies={setSelectedEcosystem}
          instanceZUID=""
          size="medium"
          sx={{
            width: {
              md: 300,
              xs: '100%',
            },
          }}
        />
        <TextField
          label="Search by instance name or hash id"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          size="medium"
          variant="outlined"
          fullWidth
          value={search}
          color="primary"
          onChange={(e) => {
            const value = e.target.value?.toLowerCase();
            setSearch(value);
            handleSetFavoritesInstancesList(value, favorites);
            handleSetInstancesList(value, favorites);
            handleSetInvitesList(value, favorites);
          }}
        />
        <Stack direction="row" spacing={2} alignItems="stretch">
          <CustomMenu
            menuName="Order by"
            menuItems={orderByItems}
            handleClick={setOrderByValue}
          />
          <ToggleButtonGroup
            value={view}
            exclusive
            color="primary"
            onChange={handleChangeView}
            size="large"
          >
            <ToggleButton value="grid">
              <GridViewOutlinedIcon />
            </ToggleButton>
            <ToggleButton value="list">
              <FormatListBulletedOutlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>

      <InstancesTypes
        title="Invites"
        icon={<EmailIcon color="primary" />}
        view={view}
        lists={invitesList}
        isLoading={isInstancesLoading}
        renderInstances={renderInstances}
      />

      <InstancesTypes
        title="Favorites"
        icon={<StarIcon color="primary" />}
        view={view}
        lists={favoritesInstancesList}
        isLoading={isInstancesLoading}
        renderInstances={renderInstances}
      />

      <InstancesTypes
        title="Instances"
        icon={<WidgetsIcon color="primary" />}
        view={view}
        lists={instancesList}
        isLoading={isInstancesLoading}
        renderInstances={renderInstances}
      />
    </Container>
  );
};

export default InstanceDashboardV2;
