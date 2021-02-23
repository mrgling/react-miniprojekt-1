import React, { CSSProperties } from 'react';

function Side() {
    return (
        <div style={ sideStyle }>
            <p>SIDE</p>
        </div>
    )
}

const sideStyle: CSSProperties = {
    background: 'blue',
    width: '25%'
}

export default Side;