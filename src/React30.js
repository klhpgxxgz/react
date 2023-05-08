import React from "react";

class MyApp extends React.Component{

    state = {
        count: 0
    }

    hanldeClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div><button onClick={() => this.hanldeClick()}>数据累加</button>{this.state.count}</div>
        )
    }
}

export default MyApp