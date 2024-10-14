import { useMemo, forwardRef } from 'react';
import {
  TextField,
  Autocomplete,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { EditRounded } from '@mui/icons-material';
import { Database } from '@zesty-io/material';

import { useInstance } from 'store/instance';
import { VirtualizedList } from 'components/accounts/ui/VirtualizedList';
import { ContentItem } from 'store/types';

const VirtualizedListComp = (defaultprops: any, ref) => {
  return <VirtualizedList ref={ref} {...defaultprops} rowheight={36} />;
};

const getLangCode = (content: ContentItem) => {
  if (!Object.keys(content)?.length) {
    return '';
  }

  const { languages } = useInstance.getState();

  return languages?.find((lang) => lang.ID === content?.meta?.langID)?.code;
};

type ResourceSelectorProps = {
  onChange: (zuid: string) => void;
  initialValue?: string;
};
export const ResourceSelector = ({
  onChange,
  initialValue,
}: ResourceSelectorProps) => {
  const { instanceModels, instanceContentItems } = useInstance(
    (state) => state,
  );

  const options = useMemo(() => {
    if (!instanceModels?.length && !instanceContentItems?.length) return [];

    const models = instanceModels?.map((model) => ({
      label: model.label,
      value: model.ZUID,
      type: 'model',
      langCode: null,
    }));
    const items = instanceContentItems?.map((item) => ({
      label: item?.web?.metaTitle || 'Missing Meta Title',
      value: item?.meta?.ZUID,
      type: 'item',
      langCode: getLangCode(item),
    }));

    return [...models, ...items].sort(
      (a, b) => a?.label?.localeCompare(b?.label),
    );
  }, [instanceModels, instanceContentItems]);

  return (
    <Autocomplete
      fullWidth
      disableClearable
      options={options}
      defaultValue={options?.find((option) => option.value === initialValue)}
      renderInput={(params) => (
        <TextField {...params} placeholder="Select Resource" />
      )}
      renderOption={(props, option) => {
        return (
          <ListItem
            {...props}
            key={option.value}
            sx={{
              height: 36,
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              {option.type === 'model' ? <Database /> : <EditRounded />}
            </ListItemIcon>
            <ListItemText
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                wordBreak: 'break-word',
                wordWrap: 'break-word',
              }}
            >
              {!!option.langCode
                ? `(${option.langCode}) ${option.label}`
                : option.label}
            </ListItemText>
          </ListItem>
        );
      }}
      onChange={(_, value) => onChange(value?.value || '')}
      ListboxComponent={forwardRef(VirtualizedListComp)}
      onKeyDown={(evt) => {
        evt.stopPropagation();
      }}
    />
  );
};
