import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function MuiBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={3} color="success">
        <MailIcon />
      </Badge>
      <Badge badgeContent={3} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="error" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="error" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
}

export default MuiBadge;
