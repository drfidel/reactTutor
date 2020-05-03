import React, { Component } from 'react'

class ClassClick extends Component {

    classEventClick(){
        console.log('clicked button')
    }

    render() {
    return (
        <div>
            <button onClick= {this.classEventClick}>Class button</button>
        </div>
    )
    }
}

export default ClassClick
