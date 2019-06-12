import React, { Component } from "react"
import { connect } from "react-redux"

export class Header extends Component {
  render(){
    return(
      <header>
        <h1>
          <span>R</span>
          <span>E</span>
          <span>C</span>
          <span>I</span>
          <span>P</span>
          <span>E</span>
        </h1>
        <div>
          <input></input>
          <button></button>
        </div>
      </header>
    )
  }
}

export default connect()(Header)