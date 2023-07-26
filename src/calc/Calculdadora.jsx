import React, { Component } from "react"
import { ReactDOM} from "react-dom"
import Display from "./Display"
import Botao from "./Botao"
import { click } from "@testing-library/user-event/dist/click"
const inicialState={
Display:[0],
clear:false,
operation:null,
valoratual:[0,0],
atual:10
}
export default class Calculadora extends Component{
       State={...inicialState}
        constructor(props){
        super(props)
         this.clear=this.setclear=(this) 
         this.setoperation=this.operation=(this)      
        this.add=this.add=(this)
        }
          
       
      
        
        add(n){
                console.log(n)
              }
        setclear(clear){
        console.log(clear)
       
        }
       setoperation(operation){
console.log(operation)
       }

        add(n){
                console.log(n)
        if(n==="."&& this.inicial.includes(".")){
               
        }
     
        const clear=this.props.Display ==='0'|| this.setState.clear
        const valoratual=clear ?'0':this.props.Display
        const Display=Display+n
       
        const setclear=clear
       
        this.setState({Display,Display:false})
        }
      
 render(){
const setadd=n=>this.add(n);
const setoperation=op=>this.operation(op)
const setclear=n=>this.clear(n)
return (
  <div className="Calculadora">
    
     <Display valoratual={this.inicialState}></Display>
<div className="Botao">
        <Botao  label='ac'Click={this.setclear}>'ac'</Botao>
        <Botao  label ='-'Click={this.setoperation}>'-'</Botao>
        <Botao  label='*'Click={this.setoperation}>'*'</Botao>
        <Botao  label ='/'Click={this.setoperation}>/</Botao>
        <Botao  label ='='Click={this.setoperation}>=</Botao>
        <Botao  label =','Click={this.setoperation}>,</Botao>
        <Botao  label ='1'Click={this.add}>1</Botao>
        <Botao  label ='2'Click={this.add}>2</Botao>
        <Botao  label ='3'Click={this.add}>3</Botao>
        <Botao  label ='4'Click={this.add}>4</Botao>
        <Botao  label ='5'Click={this.add}>5</Botao>
        <Botao  label ='6'Click={this.add}>6</Botao>
        <Botao  label ='7'Click={this.add}>7</Botao>
        <Botao  label ='8'Click={this.add}>8</Botao>
        <Botao  label ='9'Click={this.add}>9</Botao>



       
        </div>
        </div>
)
 }

 
 }
 


    
