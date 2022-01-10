import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Login debug />);

    expect(component).toMatchSnapshot();
  });
});
