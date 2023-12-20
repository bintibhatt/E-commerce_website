import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductInfo() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div className="product_info_div">
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/products")}
      >
        Back
      </Button>
      <h2>Product Information</h2>
      <div className="productInfo">
        <h2> {product.title}</h2>
        {/* <img src={product.images[0]} alt={product.images[0]} /> */}
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <h3>Price: ${product.price}</h3>
      </div>
    </div>
  );
}

export default ProductInfo;
