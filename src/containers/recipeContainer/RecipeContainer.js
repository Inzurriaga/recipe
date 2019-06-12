import React, { Component } from "react"
import { connect } from "react-redux"
import RecipeCard from "../recipeCard/RecipeCard"

export class RecipeContainer extends Component {

  checkForRecipes = () => {
    if(this.props.recipes.meals){
        return this.props.recipes.meals.map(meal => {
        return <RecipeCard key={meal.idMeal} info={meal}/>
      })
    }else{
      return(
        <div>
          <h2>no recipe found</h2>
        </div>
      )
    }
  }
  render(){
    const recipes = this.checkForRecipes()
    return(
      <section className="recipe-container">
        {
          recipes
        }
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeContainer)