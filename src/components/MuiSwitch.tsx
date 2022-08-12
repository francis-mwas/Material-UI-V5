import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  const handleSwitchBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  console.log(checked);
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleSwitchBtn}
            size="small"
            color="warning"
          />
        }
      />
    </Box>
  );
}

export default MuiSwitch;
