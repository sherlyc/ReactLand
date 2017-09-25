import React from "react";
import PropTypes from "prop-types";
import AddressLabel from "./AddressLabel";
import Stamp from "./Stamp";

export default function Envelope({ toPerson, fromPerson }) {
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
