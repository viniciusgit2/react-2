import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card"
import Primeiro from"./componentes/Primeiro"
import Segundo from './componentes/Segundo'
import Frag from "./componentes/Frag"
import Listaaluno from './componentes/Listaaluno';
import Grupo from "./componentes/Grupo"
import Parouimpar from './componentes/Parouimpar';
import Input from './componentes/Input';
import Contador from './componentes/contadador';
import Soma from './componentes/Soma';
import Mega from './Mega';
import Calculadora from './calc/Calculdadora';
function App() {
  return (
    <div className="App">
      <Calculadora/>
      <Mega/>'primeiro'
      <Mega/>'segundo'
      <Mega/>'terceiro'
    <Soma></Soma>
      <Contador numero={0}></Contador>
      <Input></Input>
          <Card></Card>
          <Listaaluno></Listaaluno>
<Primeiro></Primeiro>
<Segundo></Segundo>
<Frag></Frag>
<Grupo></Grupo>
<Parouimpar></Parouimpar>
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
