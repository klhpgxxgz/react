import React from "react";

class MyApp extends React.Component{

    state = {
        txt: '',
        city: 'bj',
        content: '',
        isChecked: false,
        radioChecked: true,
        radioUnChecked: false
    }

    hanldeForm = e => {
        const target = e.target
        console.log(target.type)
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    hanldeRadio = e => {
        const target = e.target
        if(target.name === 'radioChecked'){
            this.setState({
                radioUnChecked: false,
                radioChecked: true
            })
        }
        if(target.name === 'radioUnChecked'){
            this.setState({
                radioChecked: false,
                radioUnChecked: true
            })
        }
    }

    render(){
        return (
            <div>
                <input type="text" name="txt" value={this.state.txt} onChange={this.hanldeForm}/>
                <br></br>
                <textarea name="content" value={this.state.content} onChange={this.hanldeForm}></textarea>
                <br></br>
                <select value={this.state.city} name="city" onChange={this.hanldeForm}>
                    <option value ="bj">北京</option>
                    <option value="sh">上海</option>
                    <option value="nj">南京</option>
                </select>
                <br></br>
                <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.hanldeForm}></input>
                <br></br>
                <input type="radio" checked={this.state.radioChecked} name="radioChecked" onChange={this.hanldeRadio} ></input>
                <input type="radio" checked={this.state.radioUnChecked} name="radioUnChecked" onChange={this.hanldeRadio} ></input>
            </div>
        )
    }
}

export default MyApp