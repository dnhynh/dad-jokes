import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
class App extends Component {

  constructor () {
    super() 
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      joke: ''
    }
  }

  handleClick () {
    axios({
      method: 'get',
      url: 'https://icanhazdadjoke.com/',
      headers: {
        Accept: 'text/plain'
      }
    }).then(response => console.log(response.data))
  }

  render () {
    return (
      <div className='dashboard'>
        <h1></h1>
        <button className='button' onClick={this.handleClick}>
          Tell me a joke Dad.
        </button>
      </div>
    )
  }
}
export default App