import React, { Component } from 'react'
import './Playlist.css'
class Playlist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            leastPopularTrack: {name: '', artist: '', img: '', popularity: ''}
        };
    }

    componentDidMount() {
        fetch(this.props.playlistLink, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.props.accessToken
            }
        }).then(response => {
            response.json().then(data => {
                let tracks = data.tracks.items;
                let trackDetails = tracks.map((track) => {
                    if (!track.is_local) {
                        return {
                            name: track.track.album.name, 
                            artist: track.track.artists[0].name,
                            img: track.track.album.images[0].url,
                            popularity: track.track.popularity
                        }
                    }
                });

                trackDetails.sort((a,b) => {return a.popularity - b.popularity});
                this.setState({
                    leastPopularTrack: trackDetails[0]
                })
            })
        })
    }

    render() {
        return(
            <div className="col-sm-auto">
                <img className="Playlist-Img" src={this.state.leastPopularTrack.img}/>
            </div>
        )
    }
}

export default Playlist