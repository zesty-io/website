import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddIcon from '@mui/icons-material/Add';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import DomainListings from 'components/accounts/domains/DomainListings';
import DomainSettings from 'components/accounts/domains/DomainSettings';
import { Box, Button, Grid } from '@mui/material';
import {
  AccountsHeader,
  accountsValidations,
  ErrorMsg,
  FormInput,
  FormSelect,
  SubmitBtn,
  SuccessMsg,
} from 'components/accounts';
import { useFormik } from 'formik';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const MySwal = withReactContent(Swal);

const CustomForm = ({ onSubmit }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.domain,

    initialValues: {
      domain: '',
      branch: '',
    },
    onSubmit: async (values) => {
      await onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Box paddingY={4}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormInput name={'domain'} formik={formik} />
        <FormSelect
          name="branch"
          options={[
            { label: 'Live', value: 'live' },
            { label: 'Dev', value: 'dev' },
          ]}
          formik={formik}
        />
        <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
      </form>
    </Box>
  );
};

export default function Domains() {
  const [loading, setloading] = useState(false);
  const [instanceDomains, setinstanceDomains] = useState([]);
  const [devDomains, setdevDomains] = useState([]);
  const [liveDomains, setliveDomains] = useState([]);
  const [settings, setsettings] = useState([]);
  const [branch] = useState('');
  const { ZestyAPI } = useZestyStore((state) => state);

  const { instance } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const getSettings = async () => {
    try {
      const res = await ZestyAPI.getSettings();
      const data = res?.data?.filter(
        (setting) =>
          setting.key === 'site_protocol' ||
          setting.key === 'always_redirect_to_https' ||
          setting.key === 'preferred_domain_prefix',
      );

      setsettings(data);
    } catch (error) {
      console.log(
        '🚀 ~ file: domains.js ~ line 71 ~ getSettings ~ error',
        error,
      );
    }
  };

  const getPageData = async () => {
    setloading(true);
    await Promise.all([getInstanceDomains(), getSettings()]);
    setloading(false);
  };
  useEffect(() => {
    // access necessary endpoints
    if (router.isReady) {
      getPageData();
    }
  }, [instanceDomains.length, router.isReady]);

  const handleAddDomain = () => {
    MySwal.fire({
      title: 'Create Domain',
      html: <CustomForm onSubmit={createDomain} />,
      showConfirmButton: false,
    });
    console.log(
      '🚀 ~ file: DomainListings.js ~ line 94 ~ handleAddDomain ~ branch',
      branch,
    );
  };

  const handleDeleteDomainSuccess = () => {
    SuccessMsg({ title: 'Domain Successfully Deleted' });
  };
  const handleDeleteDomainError = (err) => {
    ErrorMsg({ text: err.error });
  };

  const handleCreateDomainSuccess = () => {
    SuccessMsg({ title: 'Domain Successfully Added' });
  };
  const handleCreateDomainError = (err) => {
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

  const headerProps = {
    title: 'Domain',
    description: `Manage your Domains`,
  };
  const domainListingProps = {
    liveDomains,
    instance,
    instanceDomains,
    devDomains,
    getInstanceDomains,
    deleteDomain,
    loading,
    settings,
  };

  const domainSettingProps = {
    getSettings,
    settings,
  };
  return (
    <Grid container>
      <AccountsHeader {...headerProps}>
        <Button
          onClick={handleAddDomain}
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Domain
        </Button>
      </AccountsHeader>
      <Grid item xs={12}>
        <DomainListings {...domainListingProps} />
      </Grid>
      <Grid item xs={12}>
        <DomainSettings {...domainSettingProps} />
      </Grid>
    </Grid>
  );
}

Domains.data = {
  container: 'InstanceContainer',
};
