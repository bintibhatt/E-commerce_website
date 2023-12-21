import React from "react";
import { useProduct } from "../Products/ProductContext";

function ManageCart() {
  const { productCart } = useProduct();

  return (
    <div>
      <h2>Manage Cart</h2>
      <p>Product Count in Cart: {productCart.productCount}</p>
    </div>
  );
}

export default ManageCart;
