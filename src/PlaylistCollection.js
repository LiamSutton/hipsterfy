import React, { Component } from 'react'

// This component will retrieve and store a list of information regarding a users playlists
class PlaylistCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            playlists: null,
        }
    }
    
    // Fetch a list of all the current users playlists (upto a max of 50)
    componentDidMount() {
        fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
            headers: {
                'Authorization': 'Bearer ' + this.props.accessToken
            }
        }).then(response => {
            response.json().then(data => {
                this.setState({
                    playlists: data.items
                })
            })
        })
    }

    render() {

        return (
            <div>
                <h1>Logged In</h1>
            </div>
        )
    }
}

export default PlaylistCollection