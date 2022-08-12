import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function MuiAccordio() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box mt={2}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          id="panel--header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Arrow Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure harum
            tenetur vel similique aliquam dolore aliquid ex voluptatem sapiente
            maxime. Omnis suscipit quo aliquid repudiandae sapiente obcaecati
            repellat laboriosam velit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id="pane2--header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure harum
            tenetur vel similique aliquam dolore aliquid ex voluptatem sapiente
            maxime. Omnis suscipit quo aliquid repudiandae sapiente obcaecati
            repellat laboriosam velit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(e, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id="pane3--header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Data structures and algorithms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure harum
            tenetur vel similique aliquam dolore aliquid ex voluptatem sapiente
            maxime. Omnis suscipit quo aliquid repudiandae sapiente obcaecati
            repellat laboriosam velit!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default MuiAccordio;
