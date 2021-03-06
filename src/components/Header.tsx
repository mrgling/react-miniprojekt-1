import React, { CSSProperties } from 'react';
import home from '../assets/home.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={ headerStyle }>
            <Link to="/">
                <img src={home} style={ logoStyle } alt="logo" />
            </Link>
            <h1 style={ headerItem }>Dagens dikt</h1>
        </div>
    )
}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(180deg, #616161, #000000)', 
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
    top: '1.25rem',
    height: '2.5rem',
    left: '1.25rem',
    position: 'absolute',
    color: 'white'
  }

export default Header;