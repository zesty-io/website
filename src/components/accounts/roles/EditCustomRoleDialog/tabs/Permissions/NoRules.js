import { Stack, Typography, Box, Button } from '@mui/material';
import { AddRounded } from '@mui/icons-material';

import dataTable from '../../../../../../../public/assets/images/data_table.svg';

export const NoRules = ({ onAddRulesClick }) => {
  return (
    <Box borderRadius={2} border={1} borderColor="border">
      <Stack
        direction="row"
        bgcolor="grey.100"
        height={52}
        borderRadius="8px 8px 0px 0px"
        alignItems="center"
        textAlign="center"
        borderBottom={1}
        borderColor="border"
      >
        <Typography fontWeight={600} flex={1} textAlign="left" pl={2}>
          Resource Name
        </Typography>
        <Typography fontWeight={600} width={100}>
          Create
        </Typography>
        <Typography fontWeight={600} width={100}>
          Read
        </Typography>
        <Typography fontWeight={600} width={100}>
          Update
        </Typography>
        <Typography fontWeight={600} width={100}>
          Delete
        </Typography>
        <Typography fontWeight={600} width={100}>
          Publish
        </Typography>
      </Stack>
      <Stack
        borderRadius="0px 0px 8px 8px"
        bgcolor="background.paper"
        height={410}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          src={dataTable?.src}
          alt={dataTable?.title}
          loading="lazy"
          width={145}
          height={120}
        />
        <Typography mt={4} variant="h5" fontWeight={700}>
          Add Rules
        </Typography>
        <Typography
          mb={4}
          variant="body3"
          fontWeight={600}
          color="text.secondary"
          width={360}
          textAlign="center"
        >
          Assign specific rules (create, read, update, delete, publish) for any
          resource
        </Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddRounded />}
          onClick={() => onAddRulesClick?.()}
        >
          Add Rule
        </Button>
      </Stack>
    </Box>
  );
};
