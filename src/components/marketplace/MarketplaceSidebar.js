import styled from '@emotion/styled';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Link,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const CustomLink = styled(Link)`
  display: inline-block;
  width: 100%;
`;

const MarketplaceSidebar = ({
  marketEntityTypes,
  marketTags,
  marketManage,
}) => {
  const theme = useTheme();

  const router = useRouter();
  return (
    <Container>
      <List
        sx={{ my: 3, px: 2 }}
        subheader={
          <ListSubheader
            sx={{
              color: theme.palette.zesty.zestyZambezi,
            }}
            component="p"
          >
            Entity Types
          </ListSubheader>
        }
      >
        {marketEntityTypes?.map((list, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 1,
              bgcolor: router.asPath.includes(list.uri) ? 'primary.main' : '',
            }}
          >
            <CustomLink underline="none" href={list.uri}>
              <ListItemText
                primary={list.name}
                sx={{
                  color: router.asPath.includes(list.uri) ? 'white' : '',
                }}
              />
            </CustomLink>
          </ListItem>
        ))}
      </List>

      <List
        sx={{ my: 3, px: 2 }}
        subheader={<ListSubheader component="div">Tags</ListSubheader>}
      >
        {marketTags?.map((list, index) => (
          <ListItem
            key={index}
            sx={{
              bgcolor: router.asPath.includes(list.uri) ? 'primary.main' : '',
            }}
          >
            <CustomLink underline="none" href={list.uri}>
              <ListItemText
                primary={list.name}
                sx={{
                  color: router.asPath.includes(list.uri) ? 'white' : '',
                }}
              />
            </CustomLink>
          </ListItem>
        ))}
      </List>
      <List
        sx={{ my: 3, px: 2 }}
        subheader={<ListSubheader component="div">Manage</ListSubheader>}
      >
        {marketManage?.map((list, index) => (
          <ListItem
            key={index}
            sx={{
              bgcolor: router.asPath.includes(list.uri) ? 'primary.main' : '',
            }}
          >
            <CustomLink underline="none" href={list.uri}>
              <ListItemText
                primary={list.name}
                sx={{
                  color: router.asPath.includes(list.uri) ? 'white' : '',
                }}
              />
            </CustomLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MarketplaceSidebar;
