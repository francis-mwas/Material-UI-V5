import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import { ExpandMore } from '@mui/icons-material';

const heights = [150, 30, 40, 67, 89, 56, 20, 10, 26, 34, 70, 50, 60, 90, 100];

function MuiMansonary() {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, i) => (
          <Paper
            key={i}
            sx={{
              //   display: 'flex',
              //   justifyContent: 'center', 
              //   alignItems: 'center',
              //   height,
              border: '1px solid',
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accordion {i + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}

export default MuiMansonary;
