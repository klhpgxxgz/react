import React from "react";

class MyApp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        console.log('钩子函数执行顺序: constructor')
    }

    componentDidMount() {
        console.log('钩子函数执行顺序: componentDidMount')
        const title = document.getElementById("title")
        console.log(title)
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('钩子函数执行顺序: render')
        return (
            <div>
                {
                    this.state.count > 3 ?
                    (<div>豆子没有了</div>) :
                    (<Counter countNum={this.state.count}/>)
                }
                <button id="btn" onClick={this.handleClick}>打豆豆</button>
            </div>
        )
    } 
}

class Counter extends React.Component{

    //挂在定时任务
    componentDidMount(){
        this.timeId = setInterval(() => {
            console.log('定时器在执行')
        }, 500)
    }

    render() {
        console.log('钩子函数执行顺序: Counter')
        return (
            <h1 id="title">豆豆被打次数：{this.props.countNum}</h1>
        )
    }

    //卸载
    componentWillUnmount(){
        console.log('钩子函数执行顺序: componentWillUnmount')
        clearInterval(this.timeId)
    }
}

export default MyApp