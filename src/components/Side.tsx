import React, { CSSProperties } from 'react';

function Side() {
    return (
        <div style={ sideStyle }>
            <button>GENRE</button>
            <button>TOPPLISTA</button>
            <button>SLUMPA</button>
        </div>
    )
}

const sideStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    background: 'slategrey',
    width: '25%'
}

export default Side;