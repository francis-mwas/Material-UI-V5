import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function MuiTextField() {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          variant="outlined"
          size="small"
          color="secondary"
          required
        />
        <TextField
          label="Password"
          type="password"
          helperText="Dont share your password"
          size="small"
          disabled
        />
        <TextField
          label="Read only"
          type="password"
          helperText="Dont share your password"
          size="small"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Ksh</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do no share your password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon color="error" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
