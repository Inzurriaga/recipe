import React, { Component } from "react"

export default class RecipeCard extends Component {

  mapIngredients = () => {
    let ingredients = []
    for(var i = 1; i < 21; i++){
      if(this.props.info[`strIngredient${i}`]){
        ingredients.push(
          <div className="ingredient-position">
            <p>{this.props.info[`strIngredient${i}`]}</p>
            <p>{this.props.info[`strMeasure${i}`]}</p>
          </div>
        )
      }
    }
    return ingredients
  }

  render(){
    const ingredients = this.mapIngredients()
    return(
      <article className="recipe-card-container">
        <svg
          className={this.props.svgClass}
          xmlns="http://www.w3.org/2000/svg"
          width="150mm"
          height="50mm"
          viewBox="0 0 150 55">
          <g
            transform="translate(0,-242)">
          <path
            d="m 0,297 c 0,0 0.31935133,-49.16065 30,-50 29.680649,-0.83935 59.287708,-0.83935 90,0 30.71229,0.83935 30,50 30,50 z"/>
          </g>
        </svg>
        <section className="recipe-card-grid">
          <article className="recipe-card-ingredients">
            <div className="labels">
              <h2>Ingredients</h2>
            </div>
            <div className="ingredient-position-labels">
              <h3>Items</h3>
              <h3>Measurements</h3>
            </div>
            {
              ingredients
            }
          </article>
          <article className="recipe-card-image">
          <img src={this.props.info.strMealThumb} alt="hello"/>
          </article>
          <article className="recipe-card-directions">
            <div className="labels">
              <h2>Directions</h2>
            </div>
              <p>{this.props.info.strInstructions}</p>
          </article>
        </section>
      </article>
    )
  }
}