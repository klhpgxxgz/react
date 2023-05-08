import React from 'react'

class MyApp extends React.Component{

    state = {
        comments: [],
        txtInput: '',
        textArea: ''
    }
    
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        const {txtInput, textArea, comments} = this.state
        if(txtInput.length===0 || textArea.length===0){
            alert ('评论人或者评论内容不能为空')
            return
        }

        this.setState({
            txtInput: '',
            textArea: '',
            comments: [{id: comments.length + 1 , name: txtInput, connent: textArea},...comments] //数组累加语法： 元素,...原数组
        })
    }
    
    renderList = () => {
        const { comments } = this.state
        if(comments.length === 0){
            return  (<div className='no-comment'>暂无评论，发表评论</div>)
        }
        return (
                <ul>
                    {comments.map(item =>(
                        <li key={item.id}>
                            <h3>评论人: {item.name}</h3>
                            <p>评论内容: {item.connent}</p>
                        </li>
                    ))}
                </ul>
            )
    }

    render() {
        const {txtInput, textArea} = this.state
        return (
            <div className='myApp'>
                <input type='text' name='txtInput' className='user' placeholder='请输入评论人' value={txtInput} onChange={this.handleChange}></input>
                <br/>
                <textarea name='textArea' className='content' cols="30" rows="10" placeholder='请输入评论内容' value={textArea} onChange={this.handleChange}></textarea>
                <br></br>
                <button name='commentsBtn' onClick={this.handleClick}>发表评论</button>
                <br/>
                {this.renderList()}
            </div>
        )
    }
}

export default MyApp