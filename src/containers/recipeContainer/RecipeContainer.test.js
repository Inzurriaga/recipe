import React from 'react';
import { RecipeContainer } from './RecipeContainer';
import { shallow } from "enzyme";

const mockRecipes = [];

describe("RecipeContainer", () => {

  describe("RecipeContainer", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <RecipeContainer recipes={mockRecipes}/>
      );
    })

    it("should match snap shot", () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe("mapStateToProps", () => {

  })
})