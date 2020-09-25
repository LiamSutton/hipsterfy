import React, { Component } from 'react'
import Playlist from './Playlist'

// This component will retrieve and store a list of information regarding a users playlists
class PlaylistCollection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: []
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

        // Alternate way of performing fetch calls 
        // const getPlaylists = async () => {
        //     const response = await fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
        //         headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        //     });
        //     const json = await response.json();
        //     this.setState({
        //         playlists: json.items
        //     })
        // }
        // getPlaylists();
    }

    render() {
        // let playlists = this.state.playlists != null ?
        //     this.state.playlists.map((playlist) => {return <Playlist playlistLink={playlist.href} accessToken={this.props.accessToken}/>}) :
        //     <h2>Unable to retrieve playlist data...</h2>;

        let playlists = this.state.playlists.map((playlist) => {
            return <Playlist playlistLink={playlist.href} accessToken={this.props.accessToken}/>
        })
        return (
            <div className="row">
               {playlists}
            </div>
        )
    }
}

export default PlaylistCollection