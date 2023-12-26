import React from "react";
import { useProduct } from "../Products/ProductContext";
import CartCounter from "./CartCounter";

function ManageCart() {
  const { productCart } = useProduct();

  console.log(productCart);

  return (
    <div>
      <h2>Manage Cart</h2>
      <div>
        {productCart?.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                Id: {item.id} <CartCounter pId={item.id} />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default ManageCart;
