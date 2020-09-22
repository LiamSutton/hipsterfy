import React from 'react';
import LoginForm from './LoginForm.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      accessToken: null
    };
  }

  // When the component is initialized check the hash string for the current window (if the user is authenticated there will be a token in the hash)
  componentDidMount() {
    let accessToken = window.location.hash.substring(14);

    // This will determine whether a login screen is shown or the application will load
    if (accessToken != null) {
      this.setState({
        accessToken: accessToken
      });
    }
  }

  render() {

    return (
      <div className="App">
        <header>
          <h2 className="display-3">H I P S T E R F Y</h2>
        </header>
        <main className="App-Content">
          <LoginForm />
        </main>

        <footer className="App-Footer">
          <p>Made with ❤ by Liam Sutton</p>
        </footer>
      </div>
    );
  }
}

export default App;
