import React, { CSSProperties } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={ headerStyle }>
            <Link to="/">
                <img src={logo} style={ logoStyle } alt="logo" />
            </Link>

            <h1 style={ headerItem }>Dagens dikt</h1>
        </div>

    )

}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(180deg, #4D6724, #243D19)', 
    height: '5rem',
    display: 'flex',
    padding: '0 1rem',
    alignItems: 'center',
    justifyContent: 'center'
}

const headerItem: CSSProperties = {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '2rem',    
    margin: '0',
    padding: '0',
    display: 'flex',
    color: 'white'
}

const logoStyle: CSSProperties = {
    top: '0.5rem',
    height: '4rem',
    left: '1rem',
    position: 'absolute',
    border: '1px solid black'
  }

export default Header;