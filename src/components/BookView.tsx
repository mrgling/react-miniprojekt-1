import React, { CSSProperties } from 'react';
import { Poem } from './Content';
import Sectionitem from './Sectionitem';

interface Props {
    poems: Poem[];
}

function BookView(props: Props) {
    return (
        <div style={ bookviewStyle }>
            {props.poems.map(poem => <Sectionitem poem={poem} />)}
        </div>
    )
}

const bookviewStyle: CSSProperties = {
    background: 'darkslategrey',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
}


export default BookView;