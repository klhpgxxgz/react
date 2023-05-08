import React from 'react'

class MyApp extends React.Component {

    state ={
        parentMsg: ''
    }
    
    getChildMsg = data => {
        console.log('child data:', data)
        this.setState({
            parentMsg: data
        })
    }

    render() {
        return (
            <div className='parent'>
                父组件：{this.state.parentMsg}
                <Child getMsg = {this.getChildMsg}></Child>
            </div>
        )
    }
}

class Child extends React.Component {
    
    state = {
        childMsg: 'I am child msg'
    }

    handleClick = () => {
        this.props.getMsg(this.state.childMsg)
    }

    render() {
        return (
            <div className='child'>
                <button onClick={this.handleClick}>给父组件传值</button>
            </div>
        )
    }
}

export default MyApp