import { useState, useEffect } from 'react';
import { useZestyStore } from 'store';
import { Security } from 'views/accounts/profile/Security';
import { ProfileContainer } from 'components/accounts';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function SecurityPage() {
  const { setuserInfo, ZestyAPI } = useZestyStore((state) => state);
  const [userZUID, setuserZUID] = useState('');

  const getUser = async (userZUID) => {
    const userInfoResponse = await ZestyAPI.getUser(userZUID);
    setuserInfo(userInfoResponse?.data);
  };

  useEffect(() => {
    const verify = async () => {
      const verifyResponse = await ZestyAPI.verify();
      setuserZUID(verifyResponse.meta.userZuid);
    };

    verify();
  }, []);

  useEffect(() => {
    userZUID && getUser(userZUID);
  }, [userZUID]);

  return (
    <ProfileContainer>
      <Security getUser={async () => await getUser(userZUID)} />
    </ProfileContainer>
  );
}
