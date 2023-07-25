import React, { Component } from "react"
import { ReactDOM} from "react-dom"
import Display from "./Display"
import { clear } from "@testing-library/user-event/dist/clear"
import Botao from "./Botao"
const inicial={
Display:[0],
clear:false,
operation:null,
value:[0,0],
current:0
}
export default class Calculadora extends Component{
        state=[inicial]
        
      
 
        clear(){
        console.log(`limpar`)
       
        }
       setoperation(operation){
console.log(`operação`)
       }
        
        add(n){
                console.log(`adiciona numero`)
        if(n==="."&& this.inicial.includes(".")){
               
        }
        const clear=this.state.Display ==='0'|| this.state.clear
        const valoratual=clear ?'':this.state.Display
        const display=Display+n
        this.setState({display,Display:false})
        }
      
 render(){
const add=n=>this.add(n)
const setoperation=op=>this.operation(op)
      
return (
  <div className="Calculadora">
    
     <Display value={1000}></Display>
<div className="Botao">
        <Botao  label={clear}></Botao>
        <Botao  label ={'-'}>-</Botao>
        <Botao  label={'*'}></Botao>
        <Botao  label ={'/'}>/</Botao>
        <Botao  label ={'='}>=</Botao>
        <Botao  label ={','}>,</Botao>
        <Botao  label ={'1'}>1</Botao>
        <Botao  label={'2'}>2</Botao>
        <Botao  label ={'3'}>3</Botao>
        <Botao  label={'4'}>4</Botao>
        <Botao  label={'5'}>5</Botao>
        <Botao  label ={'6'}>6</Botao>
        <Botao  label ={'7'}>7</Botao>
        <Botao  label ={'8'}>8</Botao>
        <Botao  label ={'9'}>9</Botao>
        </div>
        </div>
)
 }

 
 }
 


    
