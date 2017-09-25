import { Envelope } from "../index";

describe("App", () => {
  it("should be able to run tests", () => {
    expect(1 + 2).toEqual(3);
  });
});

describe("Envelope", () => {
  it("renders without chrashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Envelope />, div);
  });
});
