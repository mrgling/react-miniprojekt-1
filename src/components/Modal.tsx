import React, { Component } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
// import { fullScreen, centered } from '../assets/modal';

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
            <div onClick={this.handleOnClick} style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', background: 'black', color: 'white' }}>
                {this.props.children}
            </div>,
            this.element
        );
    }

}

export default Modal;