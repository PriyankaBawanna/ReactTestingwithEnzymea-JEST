import { shallow } from "enzyme";
import { text } from "stream/consumers";
import From from "./From";

test("Test State", () => {
  const wrapper = shallow(<From />);

  wrapper.find(".changeBtn").simulate("click"); //simulate means click the Button
  let result = wrapper.find("p").text();
  expect(result).toBe("Noo");
});

text("Test Change State", () => {
  const wrapper = shallow(<From />);
  const btn = wrapper.find("button").last(); //It will be pick the Last button Of the component
  btn.simulate("click", {
    target: {
      getAttribute: function () {
        return btn.props()["data-gender"];
      },
    },
  });
  expect(wrapper.find(".box .female").length).toEqual(1);
});

test("Promises Check ", async () => {
  const wrapper = shallow(<From />);
  const btn = wrapper.find("button").last();
  const events = {
    target: {
      getAttribute: function () {
        return btn.props()["data-gender"];
      },
    },
  };
  await btn.props().onClick(events);
  expect(wrapper.find(".box.female").length).toEqual(1);
});
