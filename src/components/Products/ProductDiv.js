import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCardGrid from "./ProductCardGrid";
import { useProduct } from "./ProductContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function ProductDiv({ products }) {
  const navigate = useNavigate();

  const productUse = useProduct();

  function handleProductInfo(pId) {
    navigate(`${pId}`);
  }

  return (
    <>
      {productUse.isLoading ? (
        <Box sx={{ width: "1000", height: "1000", display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <h2>List of products</h2>
          <div className="product_card_div">
            {productUse.products.map((product) => (
              <div
                key={product.id}
                id="product_card"
                onClick={() => handleProductInfo(product.id)}
              >
                <ProductCardGrid
                  pTitle={product.title}
                  pImg={product.images}
                  pDesc={product.description}
                  pCategory={product.category.name}
                  pPrice={product.price}
                  pId={product.id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDiv;
