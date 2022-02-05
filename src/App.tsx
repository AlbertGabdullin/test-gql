import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { BaseStyles, ThemeProvider } from '@primer/react';
import apolloClient from './core/ApolloClient';
import MainPage from './pages';
import UserPage from './pages/UserPage';

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <BaseStyles>
        <ApolloProvider client={apolloClient}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="users/:id" element={<UserPage />} />
          </Routes>
        </ApolloProvider>
      </BaseStyles>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
