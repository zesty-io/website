import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import DomainTable from 'components/accounts/domains/DomainTable';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useTheme } from '@mui/material';
import { ErrorMsg, SuccessMsg } from 'components/accounts';

// domain btn
const AddDomainBtn = ({ onclick, variant, text, branch }) => {
  const theme = useTheme();
  return (
    <Button
      variant={variant}
      startIcon={<AddRoundedIcon fontSize="small" />}
      size="small"
      style={{ backgroundColor: theme.palette.zesty.zestyGreen }}
      p={0}
      onClick={() => {
        onclick(branch);
      }}
    >
      <Typography variant="body2" fontSize={'small'}>
        {text}
      </Typography>
    </Button>
  );
};

export default function DomainListings() {
  const { ZestyAPI, isAuthenticated, instance } = useZestyStore(
    (state) => state,
  );

  const [instanceDomains, setinstanceDomains] = useState([]);
  const [devDomains, setdevDomains] = useState([]);
  const [liveDomains, setliveDomains] = useState([]);

  const [domain, setdomain] = useState('');
  const [branch, setbranch] = useState('');
  // const [open, setOpen] = useState(false);

  const router = useRouter();

  const { zuid } = router.query;

  const handleDeleteDomainSuccess = (res) => {
    console.log(res, 'succ delete');
    SuccessMsg({ title: 'Domain Successfully Deleted' });
  };
  const handleDeleteDomainError = (err) => {
    console.log(err, 'error delete');
    ErrorMsg({ text: err.error });
  };

  const handleCreateDomainSuccess = (res) => {
    console.log(res, 'succ create');
    SuccessMsg({ title: 'Domain Successfully Added' });
  };
  const handleCreateDomainError = (err) => {
    console.log(err, 'error create');
    ErrorMsg({ text: err.error });
  };

  const getInstanceDomains = async () => {
    try {
      const res = await ZestyAPI.getAllDomain(zuid);

      const live =
        res?.data?.filter((domain) => domain.branch === 'live') || [];
      const preview =
        res?.data?.filter((domain) => domain.branch === 'dev') || [];
      const obj = {
        ZUID: instance?.randomHashID,
        branch: 'webengine',
        domain: `${instance?.randomHashID}-dev.webengine.zesty.io`,
        createdAt: 'default',
      };
      setinstanceDomains(res.data);
      setliveDomains(live);
      setdevDomains([obj, ...preview]);
    } catch (error) {
      console.log(
        '🚀 ~ file: DomainListings.js ~ line 50 ~ getInstanceDomains ~ error',
        error,
      );
    }
  };

  const createDomain = async () => {
    // fetchwrapper needs update to accept an object with domain and branch
    // OR accept a third parameter for branch
    const res = await ZestyAPI.createDomain(zuid, domain);
    !res.error && handleCreateDomainSuccess(res);
    res.error && handleCreateDomainError(res);
  };

  // pass domainZUID through on click
  const deleteDomain = async (domainZUID) => {
    const res = await ZestyAPI.deleteDomain(zuid, domainZUID);
    !res.error && handleDeleteDomainSuccess(res);
    res.error && handleDeleteDomainError(res);
  };

  // tested - working
  const handleDeleteDomain = (domainZUID) => {
    deleteDomain(domainZUID);
    const filtered = instanceDomains.filter((dom) => dom.ZUID !== domainZUID);
    setinstanceDomains(filtered);
  };

  // handle add domain
  const handleAddDomain = (branch) => {
    console.log(
      '🚀 ~ file: DomainListings.js ~ line 94 ~ handleAddDomain ~ branch',
      branch,
    );
    // setOpen(true);
  };
  // close domain dialog
  const handleClose = () => {
    // setOpen(false);
  };

  useEffect(() => {
    // access necessary endpoints
    getInstanceDomains();
  }, [instanceDomains.length, zuid, instance.ZUID]);

  return (
    <Container>
      <Box m={5}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Grid item>
            <Typography variant="h5">Production Live Domains</Typography>
          </Grid>
          <Grid item>
            <AddDomainBtn
              text={'add live domain'}
              branch={'live'}
              variant={'contained'}
              onclick={handleAddDomain}
            />
          </Grid>
        </Grid>
        <DomainTable
          rows={liveDomains}
          caption={
            'Production Live domains will only display live published content'
          }
        />
      </Box>
      <Box m={5}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Grid item>
            <Typography variant="h5">Stage Preview Domains</Typography>
          </Grid>
          <Grid item>
            <AddDomainBtn
              text={'add dev domain'}
              branch={'dev'}
              variant={'contained'}
              onclick={handleAddDomain}
            />
          </Grid>
        </Grid>
        <DomainTable
          rows={devDomains}
          caption={
            'Stage Preview & Webengine domains provide a preview of current published content along with any new saved drafts of content that is not yet live'
          }
        />
      </Box>
    </Container>
  );
}
