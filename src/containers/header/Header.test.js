import React from 'react';
import { Header } from './Header';
import { shallow } from "enzyme";

const mockSetRecipes = jest.fn();

describe("Header", () => {

  describe("Header", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Header setRecipes={mockSetRecipes}/>
      );
    })

    it("should match snap shot", () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe("mapDispatchToProps", () => {

  })
})