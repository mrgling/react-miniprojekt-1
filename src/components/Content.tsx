import React from 'react';
import { Route} from 'react-router-dom';
import BookDetail from './BookDetail';
import BookView from './BookView';

function Content() {
    return (
        <div>
            <Route exact path="/" render={() => 
                        <BookView/>
                    }/>
            <Route path="/bookdetail" component={BookDetail}/>
            
        </div>
    )
}


export default Content;