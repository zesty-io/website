import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { useRouter } from 'next/router';
import { createContext } from 'react';
import { getIsAuthenticated } from 'utils';
import { Login } from 'views/zesty';

export const GlobalContext = createContext();
export default function VercelRedirect(props) {
  const router = useRouter();
  const vercelCode = router.query.code;
  const vercelTeamId = router.query.teamId;
  const vercelConfigurationId = router.query.configurationId;
  const isLoggedIn = useIsLoggedIn();
  if (isLoggedIn) {
    // If user is logged in then render the integration flow and perform vercel api calls
    return (
      <div>
        Select Instance...
        <br />
        Vercel Code: {vercelCode}
        <br />
        Vercel Team ID: {vercelTeamId}
        <br />
        Vercel Config ID: {vercelConfigurationId}
      </div>
    );
  } else {
    /*
      If user is not logged in then render the login page.
      We need to pass the vercel code to the login page so that it can be used to redirect 
      the user back to the integration flow if they use SSO to login.
    */
    return <Login content={{ ...props }} />;
  }
}

export async function getServerSideProps({ req, res, resolvedUrl }) {
  const isAuthenticated = getIsAuthenticated(res);

  const sso = {
    githubUrl: process.env.GITHUB_SSO_URL,
    googleUrl: process.env.GOOGLE_SSO_URL,
    msUrl: process.env.MS_SSO_URL,
  };

  const data = {
    zesty: {
      isAuthenticated,
      sso,
      templateUrl: process.env.TEMPLATE_URL,
    },
  };
  return { props: { ...data } };
}
