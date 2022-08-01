import { useState, useEffect } from "react";

import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ProfileCard from './components/ProfileCard';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://aglamadrid19-demo-employee-api.herokuapp.com/api/students")
    .then(response => response.json())
    .then(dataReturned => setData(dataReturned))
  }, []);

  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <Container maxWidth="lg">
        <Box m={6}>
          <Typography align="center" variant="h2" component="div" gutterBottom>
            Employee' List
          </Typography>
          <Typography align="center" variant="h5" component="div" gutterBottom>
            A React frontend using express api to fetch data from Google Firestore
          </Typography>
        </Box>
        <div id="app" className="App">
          <Grid container rowSpacing={1} className="mt-5" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data && data.map(({id, firstName, lastName, classEnrolled}) => (
              <Grid key={id} item md={3} xs={12}>
                <ProfileCard firstName={firstName} lastName={lastName} classEnrolled={classEnrolled.toString()}></ProfileCard>
              </Grid>
            ))} 
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;