import InputApplication from "./InputAppliaction";
import { shallow } from "enzyme";
test("Input From Application", () => {
  const wrapper = shallow(<InputApplication />);

  //Find Element Through text
  const heading = wrapper.find("h1").text();
  expect(heading).toBe("Input From Application");

  //Find Input Box
  const inputFiled = wrapper.exists(".inputFrom");
  expect(inputFiled).toEqual(true);

  const inputBox = wrapper.find(".inputBox");
  expect(inputBox).toHaveLength(2);

  const buttonSub = wrapper.find("button").text();
  expect(buttonSub).toBe("Submit");
});
