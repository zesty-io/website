import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as helper from 'utils';
import * as Style from './styles';
import { Box, Button, Link, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const AccordionComp = ({ header, data }) => {
  const theme = useTheme();
  const router = useRouter();
  const title = header && helper.generateHeader(header);
  const generateTitle = (title) => {
    if (title?.includes('Tool')) {
      return 'Tools and Resources';
    }
    return title;
  };
  const arr = data && helper.transformJson(data);
  const handleClick = (path) => {
    console.log(path, 11111111);
    router.push({ pathname: path });
    // window.open(item.titleHref, '_self');
  };
  const customStyle = {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  };

  const BtnStyle = {
    fontWeight: 600,
    display: 'flex',
    textAlign: 'left',
    justifyItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    whiteSpace: 'nowrap',
  };
  return (
    <div>
      {header && (
        <Typography
          variant="p"
          component="h1"
          sx={{ whiteSpace: 'nowrap', fontSize: '18px', ...customStyle }}
          paddingY={2}
          paddingX={2}
        >
          {/* <Box dangerouslySetInnerHTML={{ __html: title }}></Box> */}
          {generateTitle(title)}
        </Typography>
      )}
      {arr &&
        arr?.map((item) => {
          // if (!item.children) {
          //   return (
          //     <Box
          //       boxShadow={1}
          //       padding={2}
          //       sx={{
          //         width: '100%',
          //         textAlign: 'left',
          //         fontWeight: 600,

          //         ...customStyle,
          //       }}
          //     >
          //       {item.title}
          //     </Box>
          //   );
          // }
          return (
            <Accordion disableGutters elevation={1}>
              <AccordionSummary
                expanded={!item.children}
                expandIcon={item?.children ? <ExpandMoreIcon /> : false}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => handleClick(item.titleHref)}
              >
                <Box
                  onClick={() => handleClick(item.titleHref)}
                  underline="none"
                  sx={{ fontWeight: 600, ...customStyle }}
                >
                  {item.title}
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {item?.children?.map((e) => {
                  return (
                    <Box>
                      <Box
                        href={e.href}
                        sx={{ fontSize: '14px', ...customStyle }}
                      >
                        <Box
                          onClick={() => handleClick(e.href)}
                          paddingY={0.5}
                          dangerouslySetInnerHTML={{ __html: e.name }}
                        ></Box>
                      </Box>
                      {e.children && (
                        <details
                          style={{ cursor: 'pointer', padding: '.5rem 0' }}
                        >
                          <summary
                            style={{
                              fontWeight: 600,
                              ...customStyle,
                            }}
                          >
                            {e.name}
                          </summary>
                          {e?.children?.map((x) => (
                            <Box
                              onClick={() => handleClick(x.href)}
                              paddingLeft={2}
                              sx={{
                                fontSize: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                                ...customStyle,
                              }}
                              underline="none"
                            >
                              {x?.name}
                            </Box>
                          ))}
                        </details>
                      )}
                    </Box>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

const DropDownComponent = ({ data, search, onClick }) => {
  console.log(search.length, data.length, 11111);
  const filterObj = data.filter((e) =>
    e?.name?.toLowerCase().includes(search.toLowerCase()),
  );
  if (search.length > 0 && filterObj.length === 0) {
    return (
      <Style.CustomDropdown>
        <Box>
          <Button
            sx={{
              display: 'flex',
              textAlign: 'center',
            }}
            fullWidth
            onClick={() => onClick(e.href)}
          >
            No items Found
          </Button>
        </Box>
      </Style.CustomDropdown>
    );
  }
  return (
    <Style.CustomDropdown>
      {filterObj.map((e) => {
        return (
          <Box>
            <Button
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
              fullWidth
              onClick={() => onClick(e.href)}
            >
              <Box dangerouslySetInnerHTML={{ __html: e?.name }}></Box>
            </Button>
          </Box>
        );
      })}
    </Style.CustomDropdown>
  );
};

const Index = ({ data }) => {
  const router = useRouter();
  const [search, setsearch] = React.useState('');
  const accordionLists = helper.mainJson(data);
  const [IsSelected, setIsSelected] = React.useState(false);
  const searchArr = helper.transformSearch(data);

  const handleClick = (pathname) => {
    router.push({ pathname });
  };
  return (
    <Box paddingY={2}>
      <Box sx={{ position: 'relative' }}>
        <Style.CustomInput
          onFocus={() => setIsSelected(true)}
          onBlur={() => setIsSelected(false)}
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <Box
          sx={{
            position: 'absolute',
            left: '.5rem',
            top: '.5rem',
            color: IsSelected ? '#497edf' : 'gray',
          }}
        >
          <SearchIcon />
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
          data={searchArr}
          search={search}
          onClick={handleClick}
        />
      )}
      {!search.length && (
        <Box>
          {accordionLists.map((e) => {
            return <AccordionComp header={e.header} data={e.data} />;
          })}
        </Box>
      )}
    </Box>
  );
};
export const AccordionMui = React.memo(Index);
