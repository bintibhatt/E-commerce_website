import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductCardGrid from "./ProductCardGrid";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useProduct } from "./ProductContext";

function ProductCategory() {
  const [products, setProducts] = useState([]);
  const { pCategory } = useParams();
  const navigate = useNavigate();
  const productUse = useProduct();

  useEffect(() => {
    productUse.setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${pCategory}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pCategory, productUse]);

  function handleProductInfo(pId) {
    navigate(`/products/${pId}`);
  }

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/dashboard")}
      >
        Back
      </Button>
      <h2>List of products</h2>
      <div className="product_card_div">
        {products.map((product) => (
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
  );
}

export default ProductCategory;
