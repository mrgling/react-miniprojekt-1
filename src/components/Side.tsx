import React, { Component, CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logoSpace from '../assets/logo-space.jpg';
import logoClassic from '../assets/logo-classic.jpg';
import { Link } from 'react-router-dom';


interface Props {}

interface State {
    logo: string;
}
class Side extends Component<Props,State> {
    state: State = {
        logo: logoClassic
    }
    changeTheme = () => {
        if (this.state.logo === logoClassic) {
            this.setState({ logo: logoSpace })            
            }
        else {
            this.setState({ logo: logoClassic }) 
        }


    
    }
    render() {
        return (
            <div style={ sideStyle }>
                <div style={ logoStyle } >
                    <Link to="/">
                        <img src={this.state.logo} style={ imageStyle } alt="logo" />
                    </Link>
                </div>
                <div>
                    <Button style={ buttonStyle } variant="info" onClick={ this.changeTheme }>Tema</Button>{' '}
                    <Button style={ buttonStyle } variant="info" onClick={ reloadPage }>Slumpa</Button>{' '}
                    <Button style={ buttonStyle } variant="info" onClick={ openMarsvin }>Marsvin</Button>{' '}
                </div>
    
            </div>
        )
    }

}

const openMarsvin = () => {
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
    borderRadius: '1rem',
    display: 'flex'
  }
  
  const imageStyle: CSSProperties = {
    width: '100%',
    display: 'flex',
    borderRadius: '1rem',
  }
export default Side;