import React, { Component, CSSProperties } from 'react';
import ReactDOM from 'react-dom';

interface State {}
interface Props {
    persistant?: boolean;
    shouldClose: (event: React.MouseEvent) => void;
}

class Modal extends Component<Props, State> {
    element: HTMLDivElement;
    
    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'modal-root';
    }
        
    handleOnClick = (event: React.MouseEvent) => {
        if (this.props.persistant) return;
        this.props.shouldClose(event);
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
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Gloria Hallelujah, cursive',
        fontSize: '1rem',
        width: '100%', 
        background: 'rgba(255, 253, 247, 0.9)', 
        color: 'black',
        maxHeight: '75%',
        maxWidth: '75%',
        minHeight: '75%',
        padding: '0% 10%',
        border: '1px solid black',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1rem 1rem 2rem',
        overflow: 'auto'
    }
        
    export default Modal;