import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Poem } from './Content';

interface Props {
    poem: Poem;
}

function Sectionitem(props: Props) {
    return (
        <div style={ itemStyle }>
            <Link to="/bookdetail" style={ linkStyle }>
                <p>{props.poem.title}</p>
                <p style= { poemStyle }>{props.poem.content}</p>
            </Link>

        </div>
    )
}

const poemStyle: CSSProperties = {
    fontSize: '1rem'
}

const linkStyle: CSSProperties = {
    color: 'black'
}

const itemStyle: CSSProperties = {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '1.2rem',
    color: 'black',
    background: 'white',
    // height: '12rem',
    // width: '15rem',
    margin: '1rem',
    border: '1px solid black',
    textDecoration: 'none',
    padding: '2rem',
    display: 'flex',
    maxWidth: '75%'
}

// const itemStyle: CSSProperties = {
//     fontFamily: 'Gloria Hallelujah, cursive',
//     fontSize: '1.2rem',
//     color: 'black',
//     background: 'white',
//     height: '12rem',
//     width: '8rem',
//     margin: '2rem',
//     border: '2px solid black',
//     textDecoration: 'none',
//     padding: '1rem'
// }

export default Sectionitem;