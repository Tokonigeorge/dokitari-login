import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});
