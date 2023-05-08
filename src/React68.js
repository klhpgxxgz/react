import React from 'react'
import img from './images/logo192.png'
import PropTypes from 'prop-types'

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
        return this.props.children(this.state)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove',this.handleMove)
    }
}

Mouse.propTypes = {
    children: PropTypes.func.isRequired
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Mouse>
                    {
                        ({x,y}) => {
                            return (
                                <div>
                                    <p>鼠标位置: ({x},{y})</p>
                                    <img src={img} alt='reactLogo' style={{
                                        position: 'absolute',
                                        top: y - 96,
                                        left: x - 96
                                    }}/>
                                </div>
                            )
                        }
                    } 
                </Mouse>
            </div>
        )
    }
}

export default MyApp