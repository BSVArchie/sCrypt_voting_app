import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, Box, Button, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableContainer
        component={Paper}
        variant='outlined'
        style={{ width: 1200, height: "80vh", margin: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>
                  iPhone
                </TableCell>
                <TableCell align='center'>
                  Android
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Box>
                    <Box
                      sx = {{
                        height: 200,
                      }}
                      component="img"
                      alt={"iPhone"}
                      src={'${process.env.PUBLIC_URL}/${"iPhone"}.png'}
                      />
                  </Box>
                </TableCell>
                <TableCell align='center'>
                  <Box>
                    <Box
                      sx = {{
                        height: 200,
                      }}
                      component="img"
                      alt={"Android"}
                      src={'${process.env.PUBLIC_URL}/${"Android"}.png'}
                      />
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Box>
                    <Typography variant={"h1"}>
                      ToDo
                    </Typography>
                    <Button
                    variant='text'
                    name='iPhone'
                    >
                      👍
                    </Button>
                  </Box>
                </TableCell>
                <TableCell align='center'>
                  <Box>
                    <Typography variant={"h1"}>
                      ToDo
                    </Typography>
                    <Button
                    variant='text'
                    name='Android'
                    >
                      👍
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>

          </Table>

        </TableContainer>
      </header>
    </div>
  );
}

export default App;
