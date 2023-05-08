import React from 'react'
import img from './images/logo192.png'

class Mouse extends React.Component{

    state = {
        x: 0,
        y: 0
    }

    handleMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.handleMove)
    }

    render() {
        return this.props.render(this.state)
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Mouse render = {mouse => {
                    return (
                        <div>
                            <p>鼠标位置: ({mouse.x},{mouse.y})</p>
                            <img src={img} alt='reactLogo' style={{
                                position: 'absolute',
                                top: mouse.y - 96,
                                left: mouse.x - 96
                            }}/>
                        </div>
                    )
                }} />
            </div>
        )}
}

export default MyApp