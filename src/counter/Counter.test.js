import { shallow } from "enzyme";
import Counter from "./Counter";
import Message from "./Message";

test("check all css class is present or not ", function () {
  const wrapper = shallow(<Counter />);

  expect(wrapper.exists(".incrementButton")).toEqual(true);
});

test("After Click Class name  ", function () {
  const wrapper = shallow(<Counter />);
  let Number = wrapper.find(`.number-0`).length;
  expect(Number).toEqual(1);

  //this is for Click the button
  wrapper.find("button").simulate("click");
  expect(wrapper.find(`.number-1`).length).toEqual(1);
  wrapper.find("button").simulate("click");
  expect(wrapper.find(`.number-2`).length).toEqual(1);
});
//we check the Message Component div msg
test("Dive Test", () => {
  const wrapper = shallow(<Counter />);
  expect(wrapper.find(Message).dive().find(".msg").length).toBe(1);
});
