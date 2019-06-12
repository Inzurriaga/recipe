import React from 'react';
import { App } from './App';
import { shallow } from "enzyme";

const mockSetRecipes = jest.fn();

describe("App", () => {

  describe("App", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <App setRecipes={mockSetRecipes}/>
      );
    })

    it("should match snap shot", () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe("mapDispatchToProps", () => {

  })
})
