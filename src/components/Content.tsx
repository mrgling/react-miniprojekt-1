import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import PoemView from './PoemView';
import backgroundClassic from '../assets/background-classic.jpg';
import backgroundSpace from '../assets/background-space.jpg';
import Marsvin from './Marsvin';
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
    isSpaceTheme: boolean;
}
class Content extends Component<Props, State> {

    background = this.props.isSpaceTheme? backgroundSpace : backgroundClassic;
    
    state: State = {
        poems: [],
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

        this.background = this.props.isSpaceTheme? backgroundSpace : backgroundClassic;
        return (
            <div style={{
                width: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '0 2rem 0 0',
                backgroundImage: `url(${this.background})` 
                }}>

                <Route exact path="/">
                    <PoemView poems={this.state.poems}/>
                </Route>

                <Route path="/marsvin" component={Marsvin}/>
            
            </div>
        )
    }
}


export default Content;