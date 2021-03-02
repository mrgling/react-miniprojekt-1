import React, { Component, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
// import { fullScreen, centered } from '../assets';

interface Props {
    persistant?: boolean;
    shouldClose: () => void;
}

class Modal extends Component<Props> {
    element: HTMLDivElement;
    
    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'modal-root';
    }
    
    
    handleOnClick = () => {
        if (this.props.persistant) return;
        this.props.shouldClose();
    }
    
    componentDidMount() {
        document.body.appendChild(this.element);
    }
    
    componentWillUnmount() {
        document.body.removeChild(this.element);
    }
    
    render() {
        return ReactDOM.createPortal(
            <div onClick={this.handleOnClick} style={ modalStyle }>
                {this.props.children}
            </div>,
            this.element
            );
        }
        
    }

    const modalStyle: CSSProperties = {
        fontFamily: 'Gloria Hallelujah, cursive',
        fontSize: '1.2rem',
        height: '100%', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'rgba(255, 255, 255, 0.9)', 
        color: 'black',
        borderRadius: '1rem',
        maxHeight: '75%',
        maxWidth: '75%',
        margin: '7rem auto',
        padding: '2rem 5rem',
        border: '1px solid black',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1rem 1rem 2rem'
    }
    
    
    export default Modal;