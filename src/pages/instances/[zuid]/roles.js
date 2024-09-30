import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import { Roles } from 'views/accounts';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function RolesPage() {
  return (
    <InstanceContainer>
      <Roles />
    </InstanceContainer>
  );
}
