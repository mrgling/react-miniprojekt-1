import { Component, CSSProperties, ErrorInfo } from "react"
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps{}

interface State {
    hasError: Boolean;
}

class ErrorBoundary extends Component<Props, State>{

    state = {
        hasError: false
    };

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log({error, errorInfo});
    }

    navigateBack = () => this.props.history.goBack();
    
    
    
    render() {
        if (this.state.hasError) {
            return (
            <div style= {rootStyle}>
                <p style={textStyle}>Något gick fel, var god att ladda om sidan</p> 
                <button onClick={this.navigateBack}>Gå tillbaka</button> 
            </div>

            );    
        }
        return this.props.children
    }
}

const rootStyle: CSSProperties = {
    width: '100%',
    height: '100',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    color: 'black'
}
const textStyle: CSSProperties = {
    textAlign: 'center'
}
export default withRouter(ErrorBoundary);