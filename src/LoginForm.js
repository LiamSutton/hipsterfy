import React, { Component } from 'react'
import './LoginForm.css'

class LoginForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="LoginForm">
                    <div className="jumbotron">
                        <h3 className="col-sm-12">Please login below to continue.</h3>
                        <a className="LoginForm-Button btn btn-success col-sm-6">
                            Login with spotify
                        </a>
                </div>
            </div>
        )
    }
}

export default LoginForm;