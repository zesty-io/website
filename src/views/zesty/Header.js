import AppBar from '@mui/material/AppBar';
import React  from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import TopBar from  '../../blocks/pageLayouts/WithNarrowLayoutAndNoSidebar/components/Topbar';

const ChildMock = () => {
    const theme = useTheme();
    return (<>      <Box p={4}>
        <Box
          width={1}
          height={1}
          minHeight={800}
          borderRadius={2}
          border={`2px solid ${theme.palette.divider}`}
          sx={{
            borderStyle: 'dashed',
          }}
        />
      </Box>
      <Box height={{ xs: 58, sm: 66, md: 71 }} />
      </>

    );
  };
function Header() {
    const theme = useTheme();
    return (
        <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
        elevation={0}
      >
        <Container maxWidth={1} paddingY={{ xs: 1, sm: 1.5 }}>
          <TopBar />
        </Container>
      </AppBar>
    )
}

export default Header;