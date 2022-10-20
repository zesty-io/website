import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ZInstanceItem from '../dashboard/ui/ZInstanceItem';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import {
  WindowScroller,
  AutoSizer,
  List as RVList,
  CellMeasurerCache,
  CellMeasurer,
} from 'react-virtualized';

const InstancesTypes = ({
  view,
  lists,
  title,
  icon,
  isLoading,
  renderInstances,
}) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.up('xs'));
  const isSM = useMediaQuery(theme.breakpoints.up('sm'));
  const isMD = useMediaQuery(theme.breakpoints.up('md'));
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isXL2 = useMediaQuery(theme.breakpoints.up('xl2'));
  const cache = new CellMeasurerCache({
    defaultHeight: 73,
    fixedWidth: true,
  });

  const CARD_WIDTH = 340;

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {isLoading &&
          [...new Array(4)].map((i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl2={2}>
              <ZInstanceItem isLoading={isLoading} />
            </Grid>
          ))}
      </Grid>
    );
  }

  return (
    lists?.length > 0 && (
      <Stack my={2}>
        <Typography
          gap={1}
          variant="h6"
          display="flex"
          alignItems="center"
          mb={2}
        >
          {icon}
          {title}
        </Typography>

        {view === 'list' ? (
          <WindowScroller>
            {/* adding registerChild to the outer div will help on the multiple lists to prevent this issue
                https://github.com/bvaughn/react-virtualized/issues/1324
            */}
            {({ height, scrollTop, registerChild }) => (
              <AutoSizer disableHeight>
                {({ width }) => {
                  return (
                    <div ref={(el) => registerChild(el)}>
                      <RVList
                        deferredMeasurementCache={cache}
                        autoHeight
                        height={height}
                        width={width}
                        scrollTop={scrollTop}
                        rowHeight={80}
                        rowCount={lists?.length}
                        overscanRowCount={10}
                        rowRenderer={({ index, key, style, parent }) => {
                          const instance = lists[index];
                          return (
                            // They get rendered into the Row
                            <CellMeasurer
                              cache={cache}
                              columnIndex={0}
                              key={key}
                              parent={parent}
                              rowIndex={index}
                            >
                              <div key={key} style={style}>
                                {renderInstances('list', instance)}
                              </div>
                            </CellMeasurer>
                          );
                        }}
                      />
                    </div>
                  );
                }}
              </AutoSizer>
            )}
          </WindowScroller>
        ) : (
          <WindowScroller>
            {/* adding registerChild to the outer div will help on the multiple lists to prevent this issue
                https://github.com/bvaughn/react-virtualized/issues/1324
            */}
            {({ height, scrollTop, registerChild }) => (
              <AutoSizer disableHeight>
                {({ width }) => {
                  const itemsPerRow = isXL2
                    ? 6
                    : isLG
                    ? 4
                    : isMD
                    ? 3
                    : isSM
                    ? 2
                    : isXS
                    ? 1
                    : 1;
                  // The || 1 part is a simple hack that makes it work in a really small viewport (if someone totally collapses the window)
                  const rowCount = Math.ceil(lists.length / itemsPerRow); // List will need the number of rows in order to be able to properly know what to render and what not to
                  return (
                    <div ref={(el) => registerChild(el)}>
                      <RVList
                        deferredMeasurementCache={cache}
                        autoHeight
                        height={height}
                        width={width}
                        scrollTop={scrollTop}
                        rowHeight={CARD_WIDTH}
                        rowCount={rowCount}
                        rowRenderer={({ index, key, style, parent }) => {
                          // This is where stuff gets interesting/confusing
                          // We are going to constantly update an array of items that our rowRenderer will render
                          const items = [];
                          // This array will have a start and an end.
                          // The start is the top of the window
                          // The end is the bottom of the window
                          // the for loop below will constantly be updated as the the user scrolls down
                          const fromIndex = index * itemsPerRow;

                          const toIndex = Math.min(
                            fromIndex + itemsPerRow,
                            lists.length,
                          );

                          for (let i = fromIndex; i < toIndex; i++) {
                            const instance = lists[i];

                            items.push(
                              <Grid
                                key={i}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                xl2={2}
                              >
                                {renderInstances('grid', instance)}
                              </Grid>,
                            );
                          }

                          return (
                            // They get rendered into the Row
                            <CellMeasurer
                              cache={cache}
                              columnIndex={0}
                              key={key}
                              parent={parent}
                              rowIndex={index}
                            >
                              {/* need this div to prevent conflict with the spacing of container grid */}
                              <div key={key} style={style}>
                                <Grid container spacing={2}>
                                  {items}
                                </Grid>
                              </div>
                            </CellMeasurer>
                          );
                        }}
                      />
                    </div>
                  );
                }}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </Stack>
    )
  );
};

export default InstancesTypes;
