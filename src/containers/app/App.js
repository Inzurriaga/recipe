import React, { Component } from 'react';
import { connect } from "react-redux";
import { setRecipes } from "../../redux/actions"
import Header from "../header/Header";
import RecipeContainer from "../recipeContainer/RecipeContainer";

export class App extends Component {

  componentDidMount = async () => {
    const response = await  fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const recipes = await response.json();
    console.log(recipes)
    this.props.setRecipes(recipes)
  }

  render(){
    return (
      <div className="App">
        <Header></Header>
        <RecipeContainer></RecipeContainer>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setRecipes: recipes => dispatch(setRecipes(recipes))
})

export default connect(null, mapDispatchToProps)(App);
