import { shallow } from "enzyme";
import ChatPage from "./ChatPage";

describe("ChatPage", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<ChatPage debug />);

    expect(component).toMatchSnapshot();
  });
});
