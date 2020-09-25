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
      accessToken: accessToken
    };
  }

  render() {
    return ( 
      <div className="App">
        <header>
          <h2 className="display-3">H I P S T E R F Y</h2>
        </header>
        <main className="App-Content">
          {this.state.accessToken ? <PlaylistCollection accessToken={this.state.accessToken} id={this.state.id} /> : <LoginForm />}
        </main>

        <footer className="App-Footer">
          <p>Made with ❤ by Liam Sutton</p>
        </footer>
      </div>
    );
  }
}

export default App;
