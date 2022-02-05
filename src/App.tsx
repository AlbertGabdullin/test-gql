import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BaseStyles, ThemeProvider } from '@primer/react';
import apolloClient from './core/ApolloClient';
import MainPage from './pages';
import UserPage from './pages/UserPage';

const App = () => (
  <Router>
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
  </Router>
);

export default App;
