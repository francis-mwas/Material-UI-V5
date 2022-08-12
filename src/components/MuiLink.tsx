import { Link, Stack, Typography } from '@mui/material';

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        Link one
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Link one
        </Link>
      </Typography>
    </Stack>
  );
}

export default MuiLink;
