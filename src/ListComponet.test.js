import ListComponent from "./ListComponent";
import Enzyme, { shallow } from "enzyme";
test("Check all class and  id exist or not  ", () => {
  const wrapper = shallow(<ListComponent />);
  const buttonElement = wrapper.find(".submitBtn");
  expect(buttonElement).toHaveLength(2);

  const listDiv = wrapper.find(".mainCls");
  //   expect(listDiv).toHaveLength(1);
  expect(wrapper.exists(".mainCls")).toEqual(true);
  console.log(listDiv.debug());

  const list = wrapper.find(".liCls");
  expect(list).toHaveLength(3);

  const divTesting = wrapper.find(".someClass");
  expect(divTesting).toHaveLength(1);
});

//state() can only be called on class component
// test("Check State in The Component ", () => {
//   const wrapper = shallow(<ListComponent />);
//   expect(wrapper.state()).toEqual({ name: "Priyanka" });
// });

test("Html messageCheck ", () => {
  const wrapper = shallow(<ListComponent />);
  expect(
    wrapper.contains([
      <div className="someClass">
        <h1>Hello User</h1>
      </div>,
    ])
  ).toEqual(true);
});

//check the value of key
test("key test", () => {
  const wrapper = shallow(<ListComponent />);
  expect(wrapper.find(".liCls").at(0).key()).toBe("angular");
});

test("check Child case", () => {
  const wrapper = shallow(<ListComponent />);
  expect(wrapper.find(".number").childAt(0).type()).toBe("span");
  expect(wrapper.find(".number").childAt(1).type()).toBe("span");
});
