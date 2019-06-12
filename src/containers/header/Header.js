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
          <button onClick={this.changeMeal}>
          <svg width="26px" height="29px" viewBox="0 0 26 29" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Search" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(1.000000, 1.000000)" fill="#ae0015" fillRule="nonzero">
                          <path d="M17.5185815,17.4073633 L24.5896493,24.4784311 C24.9801736,24.8689554 24.9801736,25.5021204 24.5896493,25.8926447 L23.1754357,27.3068582 C22.7849114,27.6973825 22.1517464,27.6973825 21.7612221,27.3068582 L14.6901543,20.2357904 C14.29963,19.8452661 14.29963,19.2121011 14.6901543,18.8215769 L16.1043679,17.4073633 C16.4948922,17.016839 17.1280572,17.016839 17.5185815,17.4073633 Z M10.5,21 C4.70101013,21 0,16.2989899 0,10.5 C0,4.70101013 4.70101013,0 10.5,0 C16.2989899,0 21,4.70101013 21,10.5 C21,16.2989899 16.2989899,21 10.5,21 Z M10.5,18 C14.6421356,18 18,14.6421356 18,10.5 C18,6.35786438 14.6421356,3 10.5,3 C6.35786438,3 3,6.35786438 3,10.5 C3,14.6421356 6.35786438,18 10.5,18 Z" id="Oval"></path>
                      </g>
                  </g>
              </svg>
          </button>
        </form>
      </header>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setRecipes: recipes => dispatch(setRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(Header)