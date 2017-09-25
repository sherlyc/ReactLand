import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Envelope from "./components/Envelope";

var returnLabel = {
  name: "Uther Pendragon",
  addressLine1: "123 The Castle.",
  addressLine2: "Kingdom, Camelot"
};

var recipientLabel = {
  name: "Prince Arthur",
  addressLine1: "85 Triple Goddess Lane.",
  addressLine2: "Isle of The Blessed, Albion"
};

ReactDOM.render(
  <Envelope toPerson={recipientLabel} fromPerson={returnLabel} />,
  document.getElementById("root")
);
