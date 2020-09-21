import React from 'react';
import LoginForm from './LoginForm.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
