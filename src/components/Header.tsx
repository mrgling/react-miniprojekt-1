import React, { CSSProperties } from 'react';

function Header() {
    return (
        <div style={ headerStyle }>
            <h1 style={ headerItem }>Vad ska jag läsa idag?</h1>
        </div>

    )

}

const headerStyle: CSSProperties= {
    height: '5rem',
    background: 'green',
    display: 'flex',
    padding: '0 1rem',
    alignItems: 'center',
    justifyContent: 'center'
}

const headerItem: CSSProperties= {
    fontSize: '2rem',    
    margin: '0',
    padding: '0',
    display: 'flex'
}

export default Header;