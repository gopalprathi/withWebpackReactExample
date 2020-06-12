import React from "react";
import { unmountComponentAtNode } from "react-dom";
import "@babel/polyfill";
import { shallow } from "enzyme";
import Home from "./Home";

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

const wrapper = shallow(<Home />);
describe("tests for Home.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render the button", () => {
    const button = wrapper.find("button");
    const buttonText = button.text();
    expect(buttonText).toBe("Logout");
  });

  it("should render the h1", () => {
    const label = wrapper.find("h1");
    const labelText = label.text();
    expect(labelText).toBe("Image Gallery");
  });
});
