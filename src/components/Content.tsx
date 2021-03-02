
import React, { Component, CSSProperties } from 'react';
import { Route} from 'react-router-dom';
import BookView from './BookView';
import backgroundClassic from '../assets/background-classic.jpg'
import backgroundSpace from '../assets/background-space.jpg'
export interface Poem {
    content: string
    poet: {
        name: string
        url: string
    }
    title: string
    url: string
}

interface State {
    poems: Poem[];
}

interface Props {
    theme: string;
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
        return (
            <div style={ contentStyle(this.props) }>
                <Route exact path="/">
                    <BookView poems={this.state.poems}/>
                </Route>
                {/* <Route path="/bookdetail" component={BookDetail}/> */}
            
            </div>
        )
    }

}

const contentStyle = (props: Props): CSSProperties =>({
    width: '100%',
    //backgroundImage: `url(${Background})`,
    backgroundImage: `url(${props.theme})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0 2rem 0 0' 

})

export default Content;