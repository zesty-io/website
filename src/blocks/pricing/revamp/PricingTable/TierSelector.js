import { ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';

const TierSelector = ({ tiers, selectedTier, setSelectedTier }) => {
  const theme = useTheme();

  const handleTierChange = (event, tier) => {
    setSelectedTier(tier);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={selectedTier}
      exclusive
      onChange={handleTierChange}
      aria-label="billing cycle"
    >
      {tiers.map((tier) => (
        <ToggleButton
          disabled={selectedTier === tier.title}
          value={tier.title}
          aria-label={tier.title}
          size="small"
          sx={{
            minWidth: 140,
            '&.MuiToggleButton-root': {
              border: 'none',
              borderRadius: '8px !important',
            },
            '&.Mui-selected': {
              backgroundColor: theme.palette.zesty.zestyOrange,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.zesty.zestyOrange,
              },
            },
          }}
        >
          {tier.title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default TierSelector;
