import MainWrapper from 'layouts/Main';
import React from 'react';
import { Stack, useScrollTrigger } from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

import INSTANCE_DATA from './instance.data.json';
import ACCOUNTS_DATA from './accounts.data.json';
import AUTH_DATA from './auth.data.json';
import { ShowPage } from './ShowPage';
import { FolderTreeView } from './FolderTreeView';
import { grey } from '@mui/material/colors';
import { DocsComboBox } from './DocsComboBox';

const DOCS_DATA = [
  {
    label: 'Instance API',
    value: INSTANCE_DATA,
  },
  {
    label: 'Accounts API',
    value: ACCOUNTS_DATA,
  },
  {
    label: 'Authentication API',
    value: AUTH_DATA,
  },
];

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

const Main = () => {
  const [treeData, settreeData] = React.useState(INSTANCE_DATA);
  const [limitter, setlimitter] = React.useState(3);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });

  const handleChange = (data) => {
    window.scrollTo(0, 0);
    if (data?.value) {
      settreeData(data?.value);
    } else {
      settreeData(INSTANCE_DATA);
    }
  };

  React.useEffect(() => {
    setlimitter(10);
  }, [trigger]);

  React.useEffect(() => {
    console.log(limitter, trigger, 444);
  }, [limitter, trigger]);
  return (
    <MainWrapper customRouting={[]}>
      <ZestyAccountsHead
        title={title}
        description={description}
        ogimage={ogimage}
      />

      <Stack position={'relative'}>
        <Stack
          sx={{
            pt: 2,
            position: 'fixed',
            top: trigger ? '4.5rem' : '7rem',
            bgcolor: '#fff',
            height: '100%',
            borderRight: `1px solid ${grey[200]}`,
          }}
        >
          <DocsComboBox onChange={handleChange} options={DOCS_DATA} />
          <FolderTreeView data={treeData} header="" />
        </Stack>
        <Stack width={1} pl={54} pr={4}>
          <ShowPage data={treeData.item} />
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);
