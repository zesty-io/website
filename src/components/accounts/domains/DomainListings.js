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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';

import { accountsValidations, FormInput, SubmitBtn } from 'components/accounts';

const MySwal = withReactContent(Swal);

const CustomForm = ({ onSubmit, branch }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.domain,

    initialValues: {
      domain: '',
    },
    onSubmit: async (values) => {
      const newVal = { ...values, branch };
      await onSubmit(newVal);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'domain'} formik={formik} />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};
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

  const createDomain = async (data) => {
    const { domain, branch } = data;
    // fetchwrapper needs update to accept an object with domain and branch
    // OR accept a third parameter for branch
    const res = await ZestyAPI.createDomain(zuid, domain, branch);
    !res.error && handleCreateDomainSuccess(res);
    res.error && handleCreateDomainError(res);
    await getInstanceDomains();
  };

  // pass domainZUID through on click
  const deleteDomain = async (domainZUID) => {
    const res = await ZestyAPI.deleteDomain(zuid, domainZUID);
    !res.error && handleDeleteDomainSuccess(res);
    res.error && handleDeleteDomainError(res);
    await getInstanceDomains();
  };

  // tested - working
  const handleDeleteDomain = (domainZUID) => {
    deleteDomain(domainZUID);
    const filtered = instanceDomains.filter((dom) => dom.ZUID !== domainZUID);
    setinstanceDomains(filtered);
  };

  // handle add domain
  const handleAddDomain = (branch) => {
    MySwal.fire({
      title: 'Create Domain',
      html: <CustomForm onSubmit={createDomain} branch={branch} />,
      showConfirmButton: false,
    });
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
          deleteDomain={deleteDomain}
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
          deleteDomain={deleteDomain}
          rows={devDomains}
          caption={
            'Stage Preview & Webengine domains provide a preview of current published content along with any new saved drafts of content that is not yet live'
          }
        />
      </Box>
    </Container>
  );
}
