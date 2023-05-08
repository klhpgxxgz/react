import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const {Provider, Consumer} = React.createContext()

class MyApp extends React.Component{

    render() {
        return (
            <Provider value="pink">
                <div className='parent'>
                    <Node />
                </div>
            </Provider>
        )
    }
}

const Node = props => {
    return (
        <div>
            <SubNode />
        </div>
    )
}

const SubNode = props => {
    return (
        <div>
            <Child />
        </div>
    )
}

const Child = props => {
    return (
        <div>
            <Consumer>
                {data => <span>我是子节点：{data}</span>}
            </Consumer>
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"))