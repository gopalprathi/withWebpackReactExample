import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "@babel/polyfill";
// import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
// import { render } from "@testing-library/react";
import Login from "./Login";
import Home from "../Home/Home";

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

const wrapper = shallow(<Login />);
describe("tests for Login.js", () => {
  it("renders the comoponent", () => {
    expect(wrapper).toBeTruthy();
    // console.log("Wrapper", wrapper.debug());
  });

  it("should render the label", () => {
    const label = wrapper.find("label");
    const labelText = label.text();
    // \u00a0 is the unix code translation for &nbsp;
    expect(labelText).toBe("Username: \u00a0");
  });

  it("should render the input tag", () => {
    const input = wrapper.find("input");
    expect(input).toBeTruthy();
  });

  it("should render the button", () => {
    const button = wrapper.find("button");
    const buttonText = button.text();
    expect(buttonText).toBe("Login");
  });

  it("should render the home component once the button is clicked", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    const homeWrapper = shallow(<Home />);
    // const buttonText = button.text();
    expect(homeWrapper).toBeTruthy();
  });
});
