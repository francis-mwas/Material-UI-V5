import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';

function MuiChip() {
  const [chips, setChips] = useState(['HTML', 'CSS3', 'SASS', 'JS']);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="JAVA" color="primary" size="medium" />
      <Chip label="JAVASCRIPT" color="warning" />
      <Chip label="TYPESCRIPT" color="success" />
      <Chip label="REACT" color="error" />
      <Chip label="SPRINGBOOT" color="warning" />
      <Chip
        label="KUBERNETES"
        color="warning"
        // variant="outlined"
        avatar={<Avatar>K</Avatar>}
      />
      <Chip label="CSS" color="warning" icon={<FaceIcon />} />
      <Chip
        label="Click"
        color="primary"
        onClick={() => alert('Clicked!!')}
        onDelete={() => alert('Delete handler called')}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleDelete(chip)}
          color="success"
        />
      ))}
    </Stack>
  );
}

export default MuiChip;
