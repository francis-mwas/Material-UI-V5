import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import FavouriteIcon from '@mui/icons-material/Favorite';

function MuiTab() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            aria-label="Tabs Example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab icon={<FavouriteIcon />} label="Tab One" value="1" />
            <Tab label="Tab two" value="2" />
            <Tab label="Tab three" value="3" />
            <Tab label="Tab four" value="4" disabled />
          </TabList>
        </Box>
        <TabPanel value="1">Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
        <TabPanel value="4">Panel four</TabPanel>
      </TabContext>
    </Box>
  );
}

export default MuiTab;
