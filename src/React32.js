import React from "react";

class MyApp extends React.Component{

    state = {
        count: 0
    }

    hanldeClick = () => {
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