import React from "react";
import { Outlet } from "react-router-dom";

function ProductList() {
  return (
    <div className="product_div">
      <Outlet />
    </div>
  );
}

export default ProductList;
