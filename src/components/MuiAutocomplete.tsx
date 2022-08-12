import { Stack, Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Typescript'];
function MuiAutocomplete() {
  const [value, setValue] = useState<string | null>(null);
  console.log(value);

  return (
    <Stack spacing={4} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField {...params} value={value} label="Skillz" />
        )}
        onChange={(e: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
}

export default MuiAutocomplete;
