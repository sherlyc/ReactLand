import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";

function Stamp() {
  return <div className="stamp">Stamp</div>;
}

function AddressLabel({ mailingLabel, className }) {
  var { name, addressLine1, addressLine2 } = mailingLabel;
  return (
    <div className={`mailingLabel ${className}`}>
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}

AddressLabel.propTypes = {
  mailingLabel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired
  }).isRequired
};

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <AddressLabel className="to-label" mailingLabel={fromPerson} />
      <AddressLabel className="from-label" mailingLabel={toPerson} />
      <Stamp />
    </div>
  );
}

Envelope.propTypes = {
  toPerson: PropTypes.object,
  fromPerson: PropTypes.object
};

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
