import React, { Component, CSSProperties } from 'react';
import { Poem } from './Content';
import Modal from './Modal';
import ErrorBoundary from '../ErrorBoundary';
interface Props {
    poem: Poem;
}
interface State {
    isModalVisible: boolean;
}
class Sectionitem extends Component<Props, State> {

    state: State = {
        isModalVisible: false
    }

    openModal = () => { 
        this.setState({ isModalVisible: true });
    }

    closeModal = (event: React.MouseEvent) => {
        event.stopPropagation();
        this.setState({ isModalVisible: false });
    };

    render() {
        return (
            <div style={ itemStyle } onClick={ this.openModal }>
                <p>{this.props.poem.title}</p>
                <p style= { poemStyle }>{this.props.poem.poet.name}</p>
    
                {this.state.isModalVisible && (
                    <ErrorBoundary>
                        <Modal shouldClose={this.closeModal}>
                            <div style= { poemDivStyle}>
                                <b><p style= { poemStyle }>{this.props.poem.title}</p></b>
                                <p>{this.props.poem.content}</p>  
                                <a href={this.props.poem.poet.url} target="_blank" rel="noreferrer">
                                <p style= { poemStyle }>{this.props.poem.poet.name}</p>
                                </a>
                                <button style= { buttonStyle } onClick={this.closeModal}>STÄNG</button>
                            </div>
                        </Modal>    
                    </ErrorBoundary>
                )}  
            </div>
        )
    }
}

const buttonStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
}

const poemStyle: CSSProperties = {
    fontSize: '1rem',
    textAlign: 'center'
}

const poemDivStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',    
    margin: '5rem auto',
    boxSizing: 'initial'
}

const itemStyle: CSSProperties = {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '1.2rem',
    color: 'black',
    background: 'white',
    opacity: '0.8',
    margin: '1rem',
    border: '1px solid black',
    textDecoration: 'none',
    borderRadius: '1rem',
    padding: '1rem',
    maxWidth: '75%',
    zIndex: 10
}

export default Sectionitem;