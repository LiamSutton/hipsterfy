import React, { Component } from 'react'
import Secrets from './Secrets.js'
import './LoginForm.css'

class LoginForm extends React.Component {
    constructor() {
        super();
    }

    render() {

        const CLIENT_ID = Secrets.client_id;
        const CLIENT_SECRET = Secrets.client_secret;
        const REDIRECT_URI = 'http://localhost:3000/callback'
        const SCOPE = 'user-read-private user-read-email';
        const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
        const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`
        
        return(
            <div className="LoginForm">
                    <div className="jumbotron">
                        <h3 className="col-sm-12">Please login below to continue.</h3>
                        <a className="LoginForm-Button btn btn-success col-sm-6" href={AUTH_URL}>
                            Login with spotify
                        </a>
                </div>
            </div>
        )
    }
}

export default LoginForm;