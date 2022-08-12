import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

function MuiTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align="center">Ip Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}.</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: 'Margret',
    last_name: 'Sellens',
    email: 'msellens0@jugem.jp',
    gender: 'Female',
    ip_address: '26.195.230.147',
  },
  {
    id: 2,
    first_name: 'Rodd',
    last_name: 'Andras',
    email: 'randras1@latimes.com',
    gender: 'Male',
    ip_address: '62.235.93.202',
  },
  {
    id: 3,
    first_name: 'Rriocard',
    last_name: 'Forrington',
    email: 'rforrington2@accuweather.com',
    gender: 'Male',
    ip_address: '176.246.172.24',
  },
  {
    id: 4,
    first_name: 'Delly',
    last_name: 'Bloxham',
    email: 'dbloxham3@archive.org',
    gender: 'Female',
    ip_address: '19.193.49.156',
  },
  {
    id: 5,
    first_name: 'Ruy',
    last_name: 'Weightman',
    email: 'rweightman4@unicef.org',
    gender: 'Male',
    ip_address: '26.25.157.36',
  },
  {
    id: 6,
    first_name: 'Giorgio',
    last_name: 'Cossentine',
    email: 'gcossentine5@google.es',
    gender: 'Male',
    ip_address: '29.176.145.112',
  },
  {
    id: 7,
    first_name: 'Hermann',
    last_name: 'Bletsoe',
    email: 'hbletsoe6@bing.com',
    gender: 'Male',
    ip_address: '12.111.173.215',
  },
  {
    id: 8,
    first_name: 'Barbey',
    last_name: 'Rabjohns',
    email: 'brabjohns7@4shared.com',
    gender: 'Female',
    ip_address: '87.232.207.203',
  },
  {
    id: 9,
    first_name: 'Fleming',
    last_name: 'Oughton',
    email: 'foughton8@google.co.jp',
    gender: 'Male',
    ip_address: '28.229.45.198',
  },
  {
    id: 10,
    first_name: 'El',
    last_name: 'Durran',
    email: 'edurran9@jimdo.com',
    gender: 'Genderfluid',
    ip_address: '25.29.95.54',
  },
  {
    id: 11,
    first_name: 'Sophie',
    last_name: 'Rankling',
    email: 'sranklinga@apple.com',
    gender: 'Female',
    ip_address: '250.239.115.185',
  },
  {
    id: 12,
    first_name: 'Berrie',
    last_name: 'Mitie',
    email: 'bmitieb@plala.or.jp',
    gender: 'Female',
    ip_address: '79.78.224.181',
  },
  {
    id: 13,
    first_name: 'Farica',
    last_name: 'Dake',
    email: 'fdakec@mayoclinic.com',
    gender: 'Female',
    ip_address: '78.61.202.223',
  },
  {
    id: 14,
    first_name: 'Nevin',
    last_name: 'Atkin',
    email: 'natkind@fc2.com',
    gender: 'Male',
    ip_address: '156.191.190.115',
  },
  {
    id: 15,
    first_name: 'Shirline',
    last_name: 'Denacamp',
    email: 'sdenacampe@istockphoto.com',
    gender: 'Female',
    ip_address: '108.77.38.194',
  },
  {
    id: 16,
    first_name: 'Gaultiero',
    last_name: 'McRory',
    email: 'gmcroryf@vk.com',
    gender: 'Male',
    ip_address: '175.93.82.49',
  },
  {
    id: 17,
    first_name: 'Prinz',
    last_name: 'Geertz',
    email: 'pgeertzg@cbslocal.com',
    gender: 'Genderfluid',
    ip_address: '48.15.20.243',
  },
  {
    id: 18,
    first_name: 'Con',
    last_name: 'Hakonsson',
    email: 'chakonssonh@tripadvisor.com',
    gender: 'Female',
    ip_address: '3.31.184.146',
  },
  {
    id: 19,
    first_name: 'Tan',
    last_name: 'Curgenven',
    email: 'tcurgenveni@ifeng.com',
    gender: 'Non-binary',
    ip_address: '146.135.149.29',
  },
  {
    id: 20,
    first_name: 'Kathleen',
    last_name: 'Gecks',
    email: 'kgecksj@springer.com',
    gender: 'Female',
    ip_address: '88.78.184.234',
  },
];

export default MuiTable;
