import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function InlineStyle() {
    return (
        <div>
            <h1 style={heading} >Inline heading</h1>
        </div>
    )
}

export default InlineStyle
