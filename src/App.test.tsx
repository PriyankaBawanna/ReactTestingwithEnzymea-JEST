import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For App", () => {
  it("should render button", () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find("#ClickMe");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Click Me");
  });
  test("check Input element is render properly or not ", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(".name")).toEqual(true);
  });
});
test("Check Counter Component is render or Not ", () => {
  const wrapper = shallow(<App />);
  let result = wrapper.find("Counter").exists();
  expect(result).toBe(true);
});
//Snap Shot
// test("snapshots", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper).toMatchSnapshot();
// });
