import React from 'react';
import RecipeCard from './RecipeCard';
import { shallow } from "enzyme";

const mockInfo = {
  strMeal: "pizza",
  strMealThumb: "google.com",
  strInstructions: "add salt"
};

describe("RecipeCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <RecipeCard info={mockInfo}/>
    );
  })

  it("should match snap shot", () => {
    expect(wrapper).toMatchSnapshot();
  })
})