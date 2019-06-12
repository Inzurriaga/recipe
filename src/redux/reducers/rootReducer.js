import { combineReducers } from "redux"
import { recipeRecuder } from "./recipesRecuder"

export const rootReducer = combineReducers({
  recipes: recipeRecuder
})