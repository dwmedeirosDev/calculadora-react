import React, { Component } from 'react'
import styled from 'styled-components'

export const Calculator = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1{
    color: white;
  }

  h2{
    color: white;
    font-size: 1.8rem;
    height: 50px;
  }
`

export const Display = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  input{
    font-weight: bold;
    font-size: 1.8rem;
    width: 120px;
    height: 30px;
    border-radius: 5px;
  }
`

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  button{
    font-weight: 400;
    padding: 5px;
    font-size: 1.8rem;
    border-radius: 4px;
    transition: 0.1s all;
  }

  button:hover{
    transform: scale(1.1);
  }

  button:last-child{
    background-color: red;
    font-weight: bold;
  }
`

export default class App extends Component{

  state ={
    num1: "",
    num2: "",
    result: ""
  }

  addition = () => {
    this.setState({
      result: Number(this.state.num1) + Number(this.state.num2)
    })
  }

  
  subtraction = () => {
    this.setState({
      result: this.state.num1 - this.state.num2
    })
  }

  multiplication = () => {
    this.setState({
      result: this.state.num1 * this.state.num2
    })
  }

  division = () =>{
    this.setState({
      result: this.state.num1 / this.state.num2
    })
  }

  clear = () => {
    this.setState({
      result: "",
      num1: "",
      num2: ""
    })
  }

  handleChange1 = (event) => {
    this.setState({
      num1: event.target.value
    })
  }

  handleChange2 = (event) => {
    this.setState({
      num2: event.target.value
    })
  }

  render(){
    return(
      <Calculator>
        <h1>Calculator</h1>
        <Display>
          <input type="number" value={this.state.num1} onChange={this.handleChange1}/>
          <input type="number" value={this.state.num2} onChange={this.handleChange2}/>
        </Display>
        <Button>
          <button onClick={this.addition}>+</button>
          <button onClick={this.subtraction}>-</button>
          <button onClick={this.multiplication}>x</button>
          <button onClick={this.division}>÷</button>
          <button onClick={this.clear}>c</button>
        </Button>
        <h2>{this.state.result}</h2>
      </Calculator>
    )
  }
}