import React, { CSSProperties } from 'react';

function Sectionitem() {
    return (
        <div style={ itemStyle }>
            <p>ITEM</p>
        </div>
    )
}

const itemStyle: CSSProperties = {
    background: 'yellow',
    height: '12rem',
    width: '10rem',
    margin: '2rem',
    display: 'flex',
    flex: '1 0 21%;'
}

export default Sectionitem;