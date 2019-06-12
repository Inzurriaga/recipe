import React, { Component } from "react"

export default class RecipeContainer extends Component {
  constructor(){
    super();
    this.state = {
      test: "test"
    }
  }
  render(){
    return(
      <section>
        {this.state.test}
      </section>
    )
  }
}