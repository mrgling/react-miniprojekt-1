import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo-space.jpg'

function Side() {
    return (
        <div style={ sideStyle }>

            <img src={logo} style={ logoStyle } alt="logo" />
            <div>
                <Button style={ buttonStyle } variant="success">Topplista</Button>{' '}
                <Button style={ buttonStyle } variant="warning" onClick={ reloadPage }>Slumpa</Button>{' '}
                <Button style={ buttonStyle } variant="primary" onClick={ openModal }>Marsvin</Button>{' '}
            </div>
 
        </div>
    )
}

const openModal = () => {
    alert('HEJ ALLA GLADA MARSVIN');
}

const reloadPage = () => {
    window.location.reload();
}

const sideStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    //background: 'linear-gradient(180deg, #C7C7C7, #F3F3F3)',
    background: 'black',
    borderLeft: '1px solid black',
    width: '25%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
}

const buttonStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '8rem',
    margin: '1rem'
}

const logoStyle: CSSProperties = {
    width: '80%',
    border: '1px solid black',
    borderRadius: '1rem'
  }
export default Side;