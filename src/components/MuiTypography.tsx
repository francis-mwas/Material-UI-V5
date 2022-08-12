import { Typography } from '@mui/material';

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1" gutterBottom>
        Body one Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam aut impedit consequuntur perferendis necessitatibus neque
        ratione voluptates, eum voluptatem sequi delectus possimus consequatur,
        a nam qui laborum aliquam ab? Aliquid.
      </Typography>
      <Typography variant="body2">
        body two Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        eius praesentium dolor reiciendis optio alias cum quia error blanditiis
        impedit, numquam delectus aspernatur inventore dolore nostrum adipisci
        corporis laboriosam magni!
      </Typography>
    </div>
  );
}

export default MuiTypography;
