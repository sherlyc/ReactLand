import React from "react";
import ReactDOM from "react-dom";
import Envelope from "../components/Envelope";

const returnLabel = {
  name: "Uther Pendragon",
  addressLine1: "123 The Castle.",
  addressLine2: "Kingdom, Camelot"
};

const recipientLabel = {
  name: "Prince Arthur",
  addressLine1: "85 Triple Goddess Lane.",
  addressLine2: "Isle of The Blessed, Albion"
};

describe("App", () => {
  it("should be able to run tests", () => {
    expect(1 + 2).toEqual(3);
  });
});

describe("Envelope", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Envelope toPerson={recipientLabel} fromPerson={returnLabel} />,
      div
    );
  });
});
