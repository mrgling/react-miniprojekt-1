import React, { CSSProperties } from 'react';
import Sectionitem from './Sectionitem';

function BookView() {
    return (
        <div style={ bookviewStyle }>
            
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

const bookviewStyle: CSSProperties = {
    background: 'darkslategrey',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
}


export default BookView;