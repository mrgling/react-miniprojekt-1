
import React, { Component, CSSProperties } from 'react';
import { Route} from 'react-router-dom';
import BookView from './BookView';
import Background from '../assets/background-classic.jpg'
export interface Poem {
    content: string
    poet: {
        name: string
        url: string
    }
    title: string
    url: string
}

interface Props {}

interface State {
    poems: Poem[];
}
class Content extends Component<Props, State> {
    state: State = {
        poems: []
    }
    
    async fetchPoems() {
        try {
          const response = await fetch('https://www.poemist.com/api/v1/randompoems'
          );
          
          const result = await response.json();
          this.setState({ poems: result })
    
        } catch (error: unknown) {
          console.error(error);
        }
    }

    componentDidMount() {
        this.fetchPoems();
    }

    render() {
        console.log(this.state.poems);
        return (
            <div style={ contentStyle }>
                <Route exact path="/">
                    <BookView poems={this.state.poems}/>
                </Route>
                {/* <Route path="/bookdetail" component={BookDetail}/> */}
            
            </div>
        )
    }

}

const contentStyle: CSSProperties = {
    width: '100%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0 2rem 0 0' 

}

export default Content;