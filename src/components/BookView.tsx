import React, { CSSProperties } from 'react';
import { Poem } from './Content';
import Sectionitem from './Sectionitem';
import ErrorBoundary from '../ErrorBoundary';

interface Props {
    poems: Poem[];
}

function BookView(props: Props) {



    return (
        <div style={ bookviewStyle } >
            <ErrorBoundary>
            {props.poems.map(poem => <Sectionitem poem={poem} key={poem.title}/>)}
            </ErrorBoundary>
        </div>
    )
}

const bookviewStyle: CSSProperties = {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
}

export default BookView;