import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { BaseStyles, ThemeProvider } from '@primer/react';
import apolloClient from './core/ApolloClient';
import MainPage from './pages';
import UserPage from './pages/UserPage';

const App = () => (
  <HashRouter basename="/">
    <ThemeProvider>
      <BaseStyles>
        <ApolloProvider client={apolloClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </ApolloProvider>
      </BaseStyles>
    </ThemeProvider>
  </HashRouter>
);

export default App;
