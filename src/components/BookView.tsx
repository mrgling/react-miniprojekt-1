import React, { CSSProperties } from 'react';
import { Poem } from './Content';
import Sectionitem from './Sectionitem';

interface Props {
    poems: Poem[];
}

function BookView(props: Props) {



    return (
        <div style={ bookviewStyle } >
            {props.poems.map(poem => <Sectionitem poem={poem} />)}
        </div>
    )
}

const bookviewStyle: CSSProperties = {
    background: 'linear-gradient(180deg, #C7C7C7, #F3F3F3)',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
}

export default BookView;