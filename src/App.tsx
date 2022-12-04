import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import Configuration from './components/Configuration';
import client from './lib/graphql/client';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/Navbar';
import RequestsContainer from './components/RequestsContainer';
import StatusContainer from './components/StatusContainer';
import ControlsContainer from './components/ControlsContainer';

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Container maxWidth="md">
        <Grid container spacing={2} mt={2} pb={2}>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <ControlsContainer />
              <StatusContainer />
              <Configuration />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <RequestsContainer />
          </Grid>
        </Grid>
      </Container>
    </ApolloProvider>
  );
}

export default App;
