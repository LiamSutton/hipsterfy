import React from 'react';
import queryString from 'query-string'
import LoginForm from './LoginForm.js'
import PlaylistCollection from './PlaylistCollection.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()

     // When the component is initialized check the hash string for the current window 
     // (if the user is authenticated there will be a token in the hash)
    let accessToken = queryString.parse(window.location.hash).access_token || null

    this.state = {
      accessToken: accessToken,
      id: null
    };
  }
 
  componentDidMount() {
    // The application will only request a users details if the user is already authenticated when the app is initialized
    if (this.state.accessToken !== null) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': 'Bearer ' + this.state.accessToken
        }
      }).then(response => {
        response.json().then(data => {
          this.setState({
            id: data.id
          })
        })
      })
    }
  }

  render() {
     let content = this.state.accessToken ? <PlaylistCollection accessToken={this.state.accessToken} id={this.state.id} /> : <LoginForm />
    return (
      <div className="App">
        <header>
          <h2 className="display-3">H I P S T E R F Y</h2>
        </header>
        <main className="App-Content">
          {content}
        </main>

        <footer className="App-Footer">
          <p>Made with ❤ by Liam Sutton</p>
        </footer>
      </div>
    );
  }
}

export default App;
