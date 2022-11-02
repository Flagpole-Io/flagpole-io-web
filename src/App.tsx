import React from 'react';
import { Container, Stack } from '@mui/material';
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
        <Stack spacing={2} mt={2}>
          <Status />
          <Requests />
          <Controls />
          <Configuration />
        </Stack>
      </Container>
    </ApolloProvider>
  );
}

export default App;
