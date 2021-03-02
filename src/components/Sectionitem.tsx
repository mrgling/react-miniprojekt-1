import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Poem } from './Content';

interface Props {
    poem: Poem;
}

function Sectionitem(props: Props) {

    const openModal = () => {
        alert('POEM-MODAL')
    }

    const closeModal = () => {

    }

    return (
        <div style={ itemStyle } onClick={ openModal }>
                <p>{props.poem.title}</p>
                <p style= { poemStyle }>{props.poem.poet.name}</p>

            {/* <Link to="/bookdetail" style={ linkStyle }>
            </Link> */}

        <Modal shouldClose={closeModal}>
            <h1>
                MODALISERA MERA
            </h1>

        </Modal>    

        </div>
    )
}

const poemStyle: CSSProperties = {
    fontSize: '1rem'
}


const itemStyle: CSSProperties = {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '1.2rem',
    color: 'black',
    background: 'white',
    margin: '1rem',
    border: '1px solid black',
    // textDecoration: 'none',
    padding: '1rem',
    // display: 'flex',
    maxWidth: '75%',
    zIndex: 10
}

// const linkStyle: CSSProperties = {
//     color: 'black'
// }

export default Sectionitem;