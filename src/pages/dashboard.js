// import { AccountPageloading } from 'components/accounts/ui/loading';
import Dashboard from 'components/accounts/dashboard';
import { useZestyStore } from 'store';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';

function DashboardPage({ content }) {
  const isLoggedIn = useIsLoggedIn();
  const { userInfo, loading } = useFetchWrapper(isLoggedIn);
  const store = useZestyStore();
  console.log(store, 444);

  //   if (loading) {
  //     return <AccountPageloading title={'Zesty.io'} />;
  //   }

  // should redirect if not
  //   if (content?.zesty?.isAuthenticated) {
  //     return <Dashboard content={content} />;
  //   }

  return <Dashboard content={content} />;
}

export default DashboardPage;
