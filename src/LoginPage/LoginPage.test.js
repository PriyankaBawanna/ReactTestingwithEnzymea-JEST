import { shallow } from "enzyme";
import LoginPage from "./LoginPage";

describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "Priyanka" },
    });
    expect(wrapper.state("username")).toEqual("Priyanka");
  });
  it("password check", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "Priyanka123" },
    });
    expect(wrapper.state("password")).toEqual("Priyanka123");
  });
  it("login check with right data", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "Priyanka" },
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "Priyanka123" },
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("isLogined")).toBe(true);
  });
  it("login check with wrong data", () => {
    wrapper = shallow(<LoginPage />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "Priyanka" },
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "Priyanka1234" },
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("isLogined")).toBe(false);
  });
});
