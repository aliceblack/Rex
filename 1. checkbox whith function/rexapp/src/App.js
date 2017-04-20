import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

      document.getElementById("order66").innerHTML = "Execute order 66";
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<form onSubmit={this.handleFormSubmit}>
    		<input type="checkbox" name="mycheck" value="mycheck" id="mycheck"/><label>check here</label>
		<button type="submit">Save</button>
  	</form>
	<p id="order66"> hi there</p>
      </div>
    );
  }
}

export default App;
