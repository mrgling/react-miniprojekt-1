import { Component } from "react"

interface Props {}

interface State {
    hasError: Boolean;
}

class ErrorBoundary extends Component<Props, State>{

    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>Något gick fel</h1>       
        }
        return this.props.children
    }
}
export default ErrorBoundary