import * as React from 'react';
import * as helper from 'utils';
import * as Style from './styles';
import { Box, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { AccordionComp } from './AccordionComp';

const DropDownComponent = ({ data, search, onClick }) => {
  const filterObj = data.filter(
    (e) =>
      e?.name?.toLowerCase().includes(search.toLowerCase()) ||
      e?.href?.toLowerCase().includes(search.toLowerCase()),
  );
  if (search.length > 0 && filterObj.length === 0) {
    return (
      <Style.CustomDropdown>
        <Box>
          <Style.CustomButton
            style={{
              textAlign: 'center',
            }}
            fullWidth
          >
            No items Found
          </Style.CustomButton>
        </Box>
      </Style.CustomDropdown>
    );
  }
  return (
    <Style.CustomDropdown>
      {filterObj.map((e) => {
        return (
          <Box>
            <Style.CustomButton
              style={{
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
              onClick={() => onClick(e.href)}
            >
              <Box dangerouslySetInnerHTML={{ __html: e?.name }}></Box>
            </Style.CustomButton>
          </Box>
        );
      })}
    </Style.CustomDropdown>
  );
};

const Index = ({ data }) => {
  const router = useRouter();
  const [search, setsearch] = React.useState('');
  const [IsSelected, setIsSelected] = React.useState(false);
  const searchList = helper.transformSearch(data);
  const accordionLists = helper.mainJson(data);

  const handleClick = (pathname) => {
    router.push({ pathname });
  };
  return (
    <Box paddingY={2}>
      <Box sx={{ position: 'relative' }}>
        <Style.CustomInput
          autoFocus
          onFocus={() => setIsSelected(true)}
          onBlur={() => setIsSelected(false)}
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search..."
        />
        <Box
          sx={{
            position: 'absolute',
            left: '.5rem',
            top: '.6rem',
            color: IsSelected ? '#497edf' : 'gray',
          }}
        >
          <SearchIcon fontSize="small" />
        </Box>
        {search.length > 0 && (
          <Box
            sx={{
              position: 'absolute',
              right: '.5rem',
              top: '.6rem',
              color: IsSelected ? '#497edf' : 'gray',
              cursor: 'pointer',
            }}
            onClick={() => setsearch('')}
          >
            <CloseIcon fontSize="small" />
          </Box>
        )}
      </Box>
      {search.length !== 0 && (
        <DropDownComponent
          data={searchList}
          search={search}
          onClick={handleClick}
        />
      )}
      {!search.length && (
        <Box sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {accordionLists.map((e) => {
            return <AccordionComp header={e.header} data={e.data} />;
          })}
        </Box>
      )}
    </Box>
  );
};
export const AccordionMui = React.memo(Index);
