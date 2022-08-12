import { Stack, Avatar, AvatarGroup, Typography } from '@mui/material';

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Typography variant="h6">This is an avatar</Typography>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
