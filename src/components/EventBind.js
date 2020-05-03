import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

      //  this.eventHandler = this.eventHandler.bind(this)
    }

   // eventHandler(){
   //     this.setState({
    //        message: 'good bye'
    //    })
    //    console.log(this)
    //}
    
    eventHandler = () => {
        this.setState({
            message: 'good bye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.eventHandler.bind(this)}>Clicked</button>*/}
                {/*<button onClick={() => this.eventHandler()}>Clicked</button>*/}
                <button onClick={this.eventHandler}>Clicked</button>
                
            </div>
        )
    }
}

export default EventBind
