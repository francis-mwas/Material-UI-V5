import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from '@mui/material';

function MuiCard() {
  return (
    <Box width="300px" mt={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim odio
            maxime fuga itaque eum. Voluptatibus tenetur. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Accusamus veritatis ipsum
            soluta. Ullam quas, alias ratione fuga, in, dolores consequatur a
            molestiae earum nemo repudiandae ducimus tempora exercitationem quis
            excepturi?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
