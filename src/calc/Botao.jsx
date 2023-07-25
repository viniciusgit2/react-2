import { clear } from "@testing-library/user-event/dist/clear"
import { click } from "@testing-library/user-event/dist/click"
import React from "react"
import { ReactDOM } from "react-dom"
export default props =>{

    return(
       
    <button  onClick={e=>props.click&&props.click(props.label)} className= {`Botao0${props.operation ?'operation':""}${props.double?'double':""}
    ${props.triple?'triple':""}`}> {props.label}</button>
    )
}
