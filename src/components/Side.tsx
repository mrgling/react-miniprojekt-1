import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Side() {
    return (
        <div style={ sideStyle }>
            <Button style={ buttonStyle } variant="success">Topplista</Button>{' '}
            <Button style={ buttonStyle } variant="warning">Slumpa</Button>{' '}
            <Button style={ buttonStyle } variant="primary" onClick={ openModal }>Marsvin</Button>{' '}
        </div>
    )
}

const openModal = () => {
    alert('HEJ ALLA GLADA MARSVIN');
}

const sideStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    background: 'lightsteelblue',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

const buttonStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '8rem',
    margin: '1rem'
}

export default Side;