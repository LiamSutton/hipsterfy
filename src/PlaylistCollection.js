import React, { Component } from 'react'
import Playlist from './Playlist'

// This component will retrieve and store a list of information regarding a users playlists
class PlaylistCollection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: null
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
                // Store the list of playlist information in the components state
                this.setState({
                    playlists: data.items
                })
            })
        })
    }

    render() {
        let playlists = this.state.playlists != null ?
            this.state.playlists.map((playlist) => {return <Playlist id={playlist.id}/>}) :
            <h2>Unable to retrieve playlist data...</h2>;

        return (
            <div className="row">
               {playlists}
            </div>
        )
    }
}

export default PlaylistCollection