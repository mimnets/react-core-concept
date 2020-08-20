import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var style = {
    color: 'red',
    backgroundColor: 'blue'
  }
  var person1 = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Kokil Konthi"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
  <h1 style={style}>My Heading: {person1.name +" "+ person1.job}</h1>
  <h3 style={{color: 'gray',
    backgroundColor: 'cyan'}}>Singer: {person2.name + " " + person2.job}</h3>
        <p>My first react paragraph</p>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  return <h1>Name: Sakib</h1>
}

export default App;
