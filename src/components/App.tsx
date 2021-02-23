import React, { CSSProperties } from 'react';
import logo from '../assets/logo.png';
import Layout from './Layout';

function App() {
  return (
    <div>
        <Layout />
        <img src={logo} style={ logoStyle } alt="logo" />
      </div>

  );
}

const logoStyle: CSSProperties = {
  height: '3rem'
}

export default App;