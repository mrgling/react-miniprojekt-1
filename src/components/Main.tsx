import React, { Component, CSSProperties } from 'react';
import Side from './Side';
import Content from './Content';

interface Props {}
interface State {
    isSpaceTheme: boolean;
}
class Main extends Component <Props, State> {
    state: State = {
        isSpaceTheme: false
    }
    toggleTheme = () => {
        console.log("toggleTheme is " + this.state.isSpaceTheme)
        this.setState({ isSpaceTheme: !this.state.isSpaceTheme})
        console.log("themetoggle to " + this.state.isSpaceTheme)
      }
    render() {
        return (
            <div style={ mainStyle }>
                <Content isSpaceTheme={this.state.isSpaceTheme}/>
                <Side onThemeClick = {this.toggleTheme} spaceTheme={this.state.isSpaceTheme}/>
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