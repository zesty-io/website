import React, {useEffect} from 'react';
import { Box, Grid } from '@mui/material';
import AppBar from 'components/console/AppBar';
import { Container } from '@mui/system';
import Main from 'layouts/Main';
import { useZestyStore } from 'store';
import Login from 'components/console/Login';
import { InstancesApp } from 'views/InstancesApp/InstancesApp';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import BasicTable from 'components/accounts/users/BasicTable';
import DomainPaper from 'components/accounts/domains/DomainPaper';

export default function Users() {
  const [domains, setdomains] = React.useState([]);
  const [devDomains, setdevDomains] = React.useState([]);
  const [liveDomains, setliveDomains] = React.useState([]);
  const [settings, setsettings] = React.useState([]);
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const getInstanceDomains = async () => {
    try {
      const res = await ZestyAPI.getAllDomain(zuid);
      console.log("🚀 ~ file: domains.js ~ line 41 ~ getInstanceDomains ~ res", res);
      const live = res?.data?.filter(domain => domain.branch === 'live') || [];
      const preview = res?.data?.filter(domain => domain.branch === 'dev') || [];
      
      setdomains(res.data);
      setliveDomains(live);
      setdevDomains(preview);
      
    } catch (error) {
      console.log("🚀 ~ file: domains.js ~ line 50 ~ getInstanceDomains ~ error", error)  
    }
  };
  useEffect(() => {

    getInstanceDomains();
  }, []);

  return (
    <Main>
      <AppBar />

      {/* {JSON.stringify(data)} */}
      <Container>
        {isAuthenticated ? (
          <InstancesApp>
            <Container>
              <Box m={4}>
                Live Domains
                <Grid container spacing={{ xs:2 }}>
                  {/* loop through live domains and output row of content */}
                  {liveDomains.map(domain=>(
                    <Grid item xs={12}>
                        <DomainPaper data={domain} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box m={4}>
                Preview Domains
                <Grid container spacing={{ xs:2 }}>
                  {/* loop through live domains and output row of content */}
                  {devDomains.map(domain=>(
                    <Grid item xs={12}>
                        <DomainPaper data={domain} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </InstancesApp>
        ) : (
          <Login />
        )}
      </Container>
    </Main>
  );
}


// async createDomain(instanceZUID: string, domain: string) {
//   let payload = JSON.stringify({
//      domain,
//   })
//   let url = this.accountsAPIURL + this.accountsAPIEndpoints.domainPOST
//   return await this.makeRequest(url, "POST", payload)
// }
// async updateDomain(instanceZUID: string, domainZUID: string, domain: string) {
//   let payload = JSON.stringify({
//      domain,
//   })

//   let url =
//      this.accountsAPIURL +
//      this.replaceInURL(this.accountsAPIEndpoints.domainPUT, {
//         INSTANCE_ZUID: instanceZUID,
//         DOMAIN_ZUID: domainZUID,
//      })

//   return await this.makeRequest(url, "PUT", payload)
// }
// async getDomain(instanceZUID: string, domainZUID: string) {
//   let url =
//      this.accountsAPIURL +
//      this.replaceInURL(this.accountsAPIEndpoints.domainGET, {
//         INSTANCE_ZUID: instanceZUID,
//         DOMAIN_ZUID: domainZUID,
//      })
//   return await this.makeRequest(url)
// }
// async deleteDomain(instanceZUID: string, domainZUID: string) {
//   let url =
//      this.accountsAPIURL +
//      this.replaceInURL(this.accountsAPIEndpoints.domainDELETE, {
//         INSTANCE_ZUID: instanceZUID,
//         DOMAIN_ZUID: domainZUID,
//      })
//   return await this.makeRequest(url, "DELETE")
// }
// async getAllDomain(instanceZUID: string) {
//   let url =
//      this.accountsAPIURL +
//      this.replaceInURL(this.accountsAPIEndpoints.domains, {
//         INSTANCE_ZUID: instanceZUID,
//      })
//   return await this.makeRequest(url)
// }