import React from "react";
import PropTypes from "prop-types";

export default function AddressLabel({ mailingLabel, className }) {
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
