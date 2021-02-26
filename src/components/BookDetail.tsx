import React, { CSSProperties } from 'react';
import Sectionitem from './Sectionitem';

function BookDetail() {
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
    //width: '75%',
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
}


export default BookDetail;

