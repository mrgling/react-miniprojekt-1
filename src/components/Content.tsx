import React, { CSSProperties } from 'react';
import { Route} from 'react-router-dom';
import BookDetail from './BookDetail';
import BookView from './BookView';

function Content() {
    return (
        <div style={ contentStyle }>
            <Route exact path="/" render={() => 
                        <BookView/>
                    }/>
            <Route path="/bookdetail" component={BookDetail}/>
            
        </div>
    )
}

const contentStyle: CSSProperties = {
    width: '100%'
}

export default Content;