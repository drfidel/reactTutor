import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Hello Akiyo</div>
        // return(this.state.isLoggedIn ?
        //     <div>Welcome Akiyo</div>:
        //     <div>Welcome Guest</div>
        // )
    //     let message
    //     if (this.state.isLoggedIn){
    //         message = <div>Welcome Akiyo</div>
    //     } else {
    //         message = <div>Welcome guest</div>
    //     }
    // return (<div>{message}</div>)

        // if (this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Akiyo</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome guest</div>
        //     )
        // }
       // return (
        //    <div>
         //   <div>
          //      Welcome Guest
         //   </div>
         //   <div>
          //      Welcome Akiyo
          //  </div>
          //  </div>
        //)
    }
}

export default UserGreeting
