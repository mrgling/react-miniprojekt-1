import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Poem } from './Content';

interface Props {
    poem: Poem;
}

function Sectionitem(props: Props) {
    return (
        <div style={ itemStyle }>
            <Link to="/bookdetail">
                <p>{props.poem.title}</p>
            </Link>

        </div>
    )
}

const itemStyle: CSSProperties = {
    background: 'goldenrod',
    height: '12rem',
    width: '8rem',
    margin: '2rem',
    border: '2px solid black'
}

export default Sectionitem;