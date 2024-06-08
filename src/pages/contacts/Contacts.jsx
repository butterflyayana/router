import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function DenseTable() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUserData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
         throw new Error;
        }
        return response.json();
      })
      .then(data => { setUser(data);   setError('');
      })
      .catch(error => { setUser(null); setError(error.message);
      });
  };

  return (
    <div>
      <TextField label="User" variant="outlined" value={userId} onChange={(e) => setUserId(e.target.value)}/>
      <Button variant='contained' onClick={fetchUserData}> click </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">userName</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">address</TableCell>
                <TableCell align="right">phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">{user.id}</TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{`${user.address.street}, ${user.address.city}`}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
