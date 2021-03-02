import React, { Component, CSSProperties } from 'react';
// import { Link } from 'react-router-dom';
import { Poem } from './Content';
import Modal from './Modal';

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

    openModal = () => this.setState({ isModalVisible: true });

    closeModal = () => this.setState({ isModalVisible: false});

    render() {
        return (
            <div style={ itemStyle } onClick={ this.openModal }>
                    <p>{this.props.poem.title}</p>
                    <p style= { poemStyle }>{this.props.poem.poet.name}</p>
    
                {/* <Link to="/bookdetail" style={ linkStyle }>
                </Link> */}
    
            {this.state.isModalVisible && (
                <Modal persistant shouldClose={this.closeModal} >
                    <b><p style= { poemStyle }>{this.props.poem.title}</p></b>
                    <p style= { poemStyle }>{this.props.poem.content}</p>  
                    <p style= { poemStyle }>{this.props.poem.poet.name}</p>
                </Modal>    
            )}
    
            </div>
        )

    }
}

const poemStyle: CSSProperties = {
    fontSize: '1rem',
    textAlign: 'center'
}


const itemStyle: CSSProperties = {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '1.2rem',
    color: 'black',
    background: 'white',
    margin: '1rem',
    border: '1px solid black',
    padding: '1rem',
    maxWidth: '75%',
    zIndex: 10
}

export default Sectionitem;