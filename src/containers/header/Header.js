import React, { Component } from "react"
import { connect } from "react-redux"
import { setRecipes } from "../../redux/actions"

export class Header extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ""
    }
  }

  changeUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  changeMeal = async (e) => {
    e.preventDefault()
    const response = await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.userInput}`);
    const recipes = await response.json();
    console.log(recipes)
    this.props.setRecipes(recipes)
  }

  render(){
    return(
      <header>
        <div>
          <h1>
            <span>R</span>
            <span>E</span>
            <span>C</span>
            <span>I</span>
            <span>P</span>
            <span>E</span>
          </h1>
        </div>
        <form onSubmit={this.changeMeal}>
          <input value={this.state.userInput} onChange={this.changeUserInput}></input>
          <button onClick={this.changeMeal}></button>
        </form>
      </header>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setRecipes: recipes => dispatch(setRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(Header)