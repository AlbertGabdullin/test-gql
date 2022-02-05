import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route
              path={process.env.PUBLIC_URL || '' + '/'}
              element={<MainPage />}
            />
            <Route
              path={process.env.PUBLIC_URL || '' + '/user/:id'}
              element={<UserPage />}
            />
          </Routes>
        </ApolloProvider>
      </BaseStyles>
    </ThemeProvider>
  </Router>
);

export default App;
