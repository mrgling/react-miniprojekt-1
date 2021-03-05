import React, { CSSProperties } from 'react';
import Header from './Header'
import Main from './Main'

function Layout() {
    return (
        <div style={ layoutStyle }>
            <Header />
            <Main />
        </div>
    )
}

const layoutStyle: CSSProperties = {
    height: '100%',
    background: 'black'
}

export default Layout;