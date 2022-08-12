import { Stack, Rating } from '@mui/material';
import React, { useState } from 'react';

function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  console.log(value);

  return (
    <Stack>
      <Rating value={value} onChange={handleChange} precision={0.5} size="large"/>
    </Stack>
  );
}

export default MuiRating;
