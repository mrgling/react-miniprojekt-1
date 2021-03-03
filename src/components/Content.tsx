import React, { Component, CSSProperties } from 'react';
import { Route} from 'react-router-dom';
import PoemView from './PoemView';
import backgroundClassic from '../assets/background-classic.jpg'
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
    theme: string;
}

let Background = backgroundClassic;

interface Props {
    theme: string;
}
class Content extends Component<Props, State> {
    state: State = {
        poems: [],
        theme: this.props.theme
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
        console.log(this.props)
    }

    componentDidMount() {
        this.fetchPoems();
    }

    render() {
        return (
            <div style={ contentStyle(this.props) }>
                <Route exact path="/">
                    <PoemView poems={this.state.poems}/>
                </Route>
                <Route path="/marsvin" component={Marsvin}/>
            
            </div>
        )
    }

}

const contentStyle = (props: Props): CSSProperties =>({
    width: '100%',
    backgroundImage: `url(${Background})`,
    //backgroundImage: `url(${props.theme})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '0 2rem 0 0' 

})

export default Content;