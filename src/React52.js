import React from 'react'
import ReactDOM from 'react-dom'

class MyApp extends React.Component {

    state = {
        count: 0
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <Child1 count={this.state.count}></Child1>
                <Child2 addCnt={this.addCount}></Child2>
            </div>
        )
    }
    
}

const Child1 = props =>  {
    return (<p>数值: {props.count}</p>)
}

const Child2 = props => {
    return (<button onClick={() => props.addCnt()}>累加</button>)
}

ReactDOM.render(<MyApp />, document.getElementById("root"))