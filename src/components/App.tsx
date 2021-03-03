import React from 'react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';

function App() {
  return (
    <Router>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
    </Router>
  );
}

export default App;