import { Stack, Alert, AlertTitle } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">Error alert</Alert>
      <Alert severity="warning">Warning alert</Alert>
      <Alert severity="info">Info alert</Alert>
      <Alert severity="success">Success alert</Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error occurred</AlertTitle>
        Error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        Warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        Info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        Success alert
      </Alert>

      <Alert variant="filled" severity="error">
        Error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        Warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        Info alert
      </Alert>
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        variant="filled"
        severity="success"
      >
        Success alert
      </Alert>
    </Stack>
  );
}

export default MuiAlert;
