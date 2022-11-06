import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import Controls from './components/Controls';
import Configuration from './components/Configuration';
import client from './lib/graphql/client';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/Navbar';
import Status from './components/Status';
import Requests from './components/Requests';

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Container maxWidth="md">
        <Grid container spacing={2} mt={2} pb={2}>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Controls />
              <Status />
              <Configuration />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Requests />
          </Grid>
        </Grid>
      </Container>
    </ApolloProvider>
  );
}

export default App;
