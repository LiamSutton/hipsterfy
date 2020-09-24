import React, { Component } from 'react'

class Playlist extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h1>{this.props.id}</h1>
            </div>
        )
    }
}

export default Playlist