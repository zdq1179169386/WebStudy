import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class People extends Component {
  constructor(name){
    this.name = name;
  }
  sayHello() {
    console.log("hello" + this.name);
  }
}

 class Student extends People {
    constructor(name){
      super(name);
    }
 }

 var s1 = new Student('zdq');
 s1.sayHello();

export default App;
