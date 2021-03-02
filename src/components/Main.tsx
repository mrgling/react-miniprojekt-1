import React, { Component, CSSProperties } from 'react';
import Side from './Side';
import Content from './Content';

interface Props {}
interface State {
  theme: string;
}
class Main extends Component <Props, State> {
    state: State = {
        theme: 'backgroundClassic'
    }
    toggleTheme = () => {
        if (this.state.theme === 'backgroundClassic') {
            this.setState({ theme: 'backgroundSpace' })            
            }
        else {
            this.setState({ theme: 'backgroundClassic' }) 
        }
      }
    render() {
        return (
            <div style={ mainStyle }>
                <Content theme={this.state.theme}/>
                <Side onThemeClick = {this.toggleTheme}/>
            </div>
        )
    }
}

const mainStyle: CSSProperties = {
    display: 'flex',
    height: 'calc(100% - 5rem)',
    width: '100%',
}

export default Main;