import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card"
import Primeiro from"./componentes/Primeiro"
import Segundo from './componentes/Segundo'
import Frag from "./componentes/Frag"

import Grupo from "./componentes/Grupo"
function App() {
  return (
    <div className="App">
          <Card></Card>
<Primeiro></Primeiro>
<Segundo></Segundo>
<Frag></Frag>
<Grupo></Grupo>
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

export default App;
