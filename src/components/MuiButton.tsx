import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import React, { useState } from 'react';

function MuiButton() {
  // const [formats, setFormats] = useState<string[]>([]);
  // console.log('formats: ', formats);

  // const handleFormatChange = (
  //   _event: React.MouseEventHandler<HTMLElement>,
  //   updatedFormats: string[]
  // ) => {
  //   setFormats(updatedFormats);
  // };

  return (
    <Stack spacing={4}>
      {/* material ui buttons variants  */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Text</Button>
      </Stack>
      {/* material ui buttons colors  */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>{' '}
        <Button variant="contained" color="secondary">
          Secondary
        </Button>{' '}
        <Button variant="contained" color="error">
          error
        </Button>{' '}
        <Button variant="contained" color="warning">
          warning
        </Button>{' '}
        <Button variant="contained" color="info">
          info
        </Button>{' '}
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      {/* material ui buttons sizes  */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      {/* button with icons */}
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableElevation
          onClick={() => alert('Hello world')}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* Group buttons starts */}
      <Stack direction="row">
        <ButtonGroup variant="contained" size="large" orientation="vertical">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert('Left clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Toggle buttons group button and togllebuttongroup */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formating"
          // value={formats}
          // onChange={handleFormatChange}
          size="small"
          color="success"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
