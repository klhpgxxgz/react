import React from "react";

class MyApp extends React.Component{

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.hanldeClick = this.hanldeClick.bind(this)
    }

    hanldeClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                <span>数据累加：{this.state.count}</span>
                <br></br>
                <button onClick={this.hanldeClick}>click</button>
            </div>
        )
    }
}

export default MyApp