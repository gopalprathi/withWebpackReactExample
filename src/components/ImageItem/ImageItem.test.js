import React from "react";
import { unmountComponentAtNode } from "react-dom";
import "@babel/polyfill";
import { shallow } from "enzyme";
import ImageItem from "./ImageItem";

let container = null;

beforeEach(() => {
  // Setting up Dom element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exit
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const wrapper = shallow(<ImageItem />);
describe("tests for ImageItem.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
  });
});
