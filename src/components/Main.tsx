import React, { CSSProperties } from 'react';
import Side from './Side';
import Content from './Content';

function Main() {
    return (
        <div style={ mainStyle }>
            <Content />
            <Side />
        </div>
    )
}

const mainStyle: CSSProperties = {
    display: 'flex'
}

export default Main;