import React, { CSSProperties } from 'react';

function Sectionitem() {
    return (
        <div style={ itemStyle }>
            <p>BOK</p>
        </div>
    )
}

const itemStyle: CSSProperties = {
    background: 'goldenrod',
    height: '12rem',
    width: '8rem',
    margin: '2rem',
    border: '2px solid black'
}

export default Sectionitem;