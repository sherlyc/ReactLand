import React from "react";

function ProductList(props) {
  return (
    <ul>
      {props.products.map(product => <li key={product.id}>{product.name}</li>)}
    </ul>
  );
}

export default ProductList;
