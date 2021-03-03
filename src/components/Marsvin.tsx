import React, { CSSProperties } from 'react';
import marsvin1 from '../assets/logo-classic.jpg';
import marsvin2 from '../assets/logo-lights.jpg';
import marsvin3 from '../assets/logo-space.jpg';

function Marsvin() {

    return(
        <div style={ marsvinContainer }>
        <img src={ marsvin1 } style={ marsvinStyle } alt="Marsvin1" />
        <img src={ marsvin2 } style={ marsvinStyle } alt="Marsvin2" />
        <img src={ marsvin3 } style={ marsvinStyle } alt="Marsvin3" />
        </div>

    )
}

const marsvinContainer: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

const marsvinStyle: CSSProperties = {
    display: 'flex',
    height: '30%',
    margin: '2rem',
    border: '1px solid black'
}

export default Marsvin;