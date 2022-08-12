import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Favorite, Person, Home } from '@mui/icons-material';
import { useState } from 'react';

function MuiBottomNavigation() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favourites" icon={<Favorite />} />
      <BottomNavigationAction label="Home" icon={<Person />} />
    </BottomNavigation>
  );
}

export default MuiBottomNavigation;
