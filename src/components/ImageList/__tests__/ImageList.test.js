import React from "react";
import { unmountComponentAtNode } from "react-dom";
import "@babel/polyfill";
import { shallow } from "enzyme";
import ImageList from "../ImageList";
import ImageItem from "../../ImageItem/ImageItem";
import mockData from "./mockData.json";

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

// const wrapper = shallow(<Home />);
describe("tests for ImageList.js", () => {
  it("renders the component ImageItem if props is provided and mapping the data", () => {
    const props = {
      data: mockData,
      deleteImageHandler: jest.fn()
    }
    const wrapper = shallow(<ImageList {...props} />);
    // console.log("ImageList debug", wrapper.debug());
  });
  it("renders the component ImageItem if props is provided with blank", () => {
    const props = {
      data: '',
      deleteImageHandler: ''
    }
    const wrapper = shallow(<ImageList {...props} />);
    // console.log("ImageList debug", wrapper.debug());
    // console.log("ImageList is", wrapper.debug());
    // isEmptyRender checks for null return.
    // console.log("Wrapper is",wrapper.type());
    expect(wrapper.type()).toBeNull();
  });
});


//Testing jest just for example
// describe("Examining the syntax of Jest tests", () => {
//     it("sums numbers", () => {
//         expect(1 + 2).toBe(3);
//     });
// });