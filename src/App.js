import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const alert = () => {
    console.log("testinggggggg")
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button
          text="Botonaco"
          onClick={alert}
          className="boton1"
        />
        <Button
          text="botonaco 2"
          onClick={alert}
          className="boton2"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
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

export default App;
