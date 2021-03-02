import React, { Component, CSSProperties } from 'react';
import Header from './Header'
import Main from './Main'


interface Props {}

interface State {

}
class Layout extends Component<Props, State> {
   
    render() {

        return (
            <div style={ layoutStyle }>
                <Header />
                <Main />
            </div>
        )
    }
}

const layoutStyle: CSSProperties = {
    height: '100%',
    background: 'black'
}

export default Layout;