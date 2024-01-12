import React, {Component} from 'react'; //이건 또 왜 {}한거냐고 시발ㅋㅋ

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }

componentDidCatch(error, info){
    this.setState({hasError: true})
}

    render(){
        if (this.state.hasError) {
            return <h1>oops this is not good.bro</h1>
        } return this.props.children
    }
}

export default ErrorBoundry;