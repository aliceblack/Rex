import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
	
	var v1 = document.getElementById("cb1").checked;
	var v2 = document.getElementById("cb2").checked;
	if(v1==true){document.getElementById("cloneorder").innerHTML = "You ordered a clone trooper for your army";}
	if(v1==false){document.getElementById("cloneorder").innerHTML = "You ordered 0 clone troopers for your army";}
	if(v2==true){document.getElementById("assaultorder").innerHTML = "You ordered an assault trooper for your army";}
	if(v2==false){document.getElementById("assaultorder").innerHTML = "You ordered 0 assault troopers for your army";}

	var v3 = document.getElementById("tb1").value;
	document.getElementById("troopername").innerHTML = v3;

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
    		<input type="checkbox" value="clone" id="cb1"/><label>Clone Trooper</label>
		<input type="checkbox" value="assault" id="cb2"/><label>Assault trooper</label>
		<input type="text" id="tb1"/><label>Choose a name for your trooper</label>
		<button type="submit">Save</button>
  	</form>
	<p id="order66"> hi there</p>
	<p id="cloneorder"> Place an order for some clone troopers!</p>
	<p id="assaultorder"> Place an order for some assault troopers!</p>
	<p>Your trooper name is </p><p id="troopername"> </p>
      </div>
    );
  }
}

export default App;
