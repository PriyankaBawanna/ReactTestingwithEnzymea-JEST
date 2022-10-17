import { shallow } from "enzyme";
import SnapshotTestEx from "./SnapshotTestEx";

test("snapShot Testing ", () => {
  const wrapper = shallow(<SnapshotTestEx />);
  expect(wrapper).toMatchSnapshot();
});
