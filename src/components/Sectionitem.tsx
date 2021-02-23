import React, { CSSProperties } from 'react';

function Sectionitem() {
    return (
        <div style={ itemStyle }>
            <p>BOK</p>
        </div>
    )
}

const itemStyle: CSSProperties = {
    background: 'yellow',
    height: '12rem',
    width: '8rem',
    margin: '2rem'
}

export default Sectionitem;