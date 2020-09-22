import React, { Component } from 'react'
import Secrets from './Secrets.js'
import './LoginForm.css'

class LoginForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        // Credentials required to authenticate with spotify
    
        // LOCAL BUILD
        const CLIENT_ID = Secrets.client_id;
        const CLIENT_SECRET = Secrets.client_secret;

        // // HEROKU BUILD
        // const CLIENT_ID = process.env.client_id;
        // const CLIENT_SECRET = process.env.client_secret 

        // the URI spotify will return to after a successful handshake
        const REDIRECT_URI = 'http://localhost:3000/callback'

        // The permissions the app needs granted by the user
        const SCOPE = 'user-read-private user-read-email';

        // The base endpoint for /Authorize
        const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

        // The full link for /Authorize
        const AUTH_URI = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;

        return(
            <div className="LoginForm">
                    <div className="jumbotron">
                        <h3 className="col-sm-12">Please login below to continue.</h3>
                        <a className="LoginForm-Button btn btn-success col-sm-6" href={AUTH_URI}>
                            Login with spotify
                        </a>
                </div>
            </div>
        )
    }
}

export default LoginForm;