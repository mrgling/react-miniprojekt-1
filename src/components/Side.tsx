import React, { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logoSpace from '../assets/logo-space.jpg';
import logoClassic from '../assets/logo-classic.jpg';
import { Link } from 'react-router-dom';


interface Props {
    onThemeClick: () => void;
    spaceTheme: boolean;
}

function Side(props:Props) {

    const logo = props.spaceTheme ? logoSpace : logoClassic

    return (
        <div style={ sideStyle }>
            <div style={ logoStyle } >
                <Link to="/">
                    <img src={logo} style={ imageStyle } alt="logo" />
                </Link>
            </div>
            <div>
                <Button style={ buttonStyle } variant="info" 
                        onClick={ props.onThemeClick}>Byt tema</Button>{' '}
                <Button style={ buttonStyle } variant="info" onClick={ reloadPage }>Nya dikter</Button>{' '}
                <Link to="/marsvin">
                    <Button style={ buttonStyle } variant="info">Marsvin</Button>{' '}
                </Link>
                </div>    
        </div>
    )
}


const reloadPage = () => {
    window.location.reload();
}

const sideStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
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
    borderRadius: '1rem',
    display: 'flex'
  }

  const imageStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    borderRadius: '1rem',
  }
export default Side;