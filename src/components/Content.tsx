import React, { CSSProperties } from 'react';
import Sectionitem from './Sectionitem';

function Content() {
    return (
        <div style={ contentStyle }>
            <Sectionitem />
            <Sectionitem />
            <Sectionitem />
            <Sectionitem />
            <Sectionitem />
            <Sectionitem />
            <Sectionitem />
            <Sectionitem />
        </div>
    )
}

const contentStyle: CSSProperties = {
    background: 'red',
    width: '75%',
    display: 'flex',
    flexWrap: 'wrap'
}

export default Content;