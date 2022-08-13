import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import PokeContainer from './pages/PokeContainer';
import './App.css';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <h1>PokeGraphQL</h1>
        <PokeContainer />
      </main>
    </ApolloProvider>
  );
};

export default App;
