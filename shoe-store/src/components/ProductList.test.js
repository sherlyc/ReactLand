import React from "react";
import Enzyme, { shallow } from "enzyme";
import ProductList from "./ProductList";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {
  //This is run before every test
  mockProducts = [
    { id: 1, name: "Mock Product 1", brand: "MockBrandA" },
    { id: 2, name: "Mock Product 2", brand: "MockBrandB" },
    { id: 3, name: "Mock Product 3", brand: "MockBrandC" }
  ];

  productSelectFn = productSelected =>
    console.log("You selected", productSelected);

  wrapper = shallow(
    <ProductList products={mockProducts} onProductSelect={productSelectFn} />
  );
});

it("should render a list of products as an unordered list", () => {
  expect(wrapper.find("li").length).toEqual(mockProducts.length); //3
});

it("should display the product name in each `<li>` element", () => {
  const firstElement = wrapper.find("li").first();
  //Check that the product name is contained somewhere in this element
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it("should display the brand name in each `<li>` element", () => {
  const firstElement = wrapper.find("li").first();
  //check that the brand name is contained somewhere in this element
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});
