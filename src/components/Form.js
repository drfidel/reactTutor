import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             option:'react'
        }
    }
    
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    
    handleOptionChange = event => {
        this.setState({
            option: event.target.value
        })
    }

    handleOnsubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.option}`)
        event.preventDefault()

    }
    render() {
//desctructure the properties
        const {username,comment,option} = this.state

        return (
            <div>
                <form onSubmit={this.handleOnsubmit}>
                    <div>
                    <label>username</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <label>comments </label>
                        <textarea value={comment} onChange={this.handleCommentsChange}/>
                    </div>
                    <div>
                        <label>select</label>
                        <select value={option} onChange={this.handleOptionChange}>
                            <option value='react'>React</option>
                            <option value='angular'>angular</option>
                            <option value='django'>Django</option>
                        </select>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default Form
