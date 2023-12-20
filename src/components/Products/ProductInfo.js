import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useProduct } from "./ProductContext";

function ProductInfo() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();
  const productUse = useProduct();

  useEffect(() => {
    productUse.setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId, productUse]);

  function handleImageChange() {}

  return (
    <div className="product_info_div">
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(`/products?product_id=${productId}`)}
      >
        Back
      </Button>
      <h2>Product Information</h2>
      <div className="productInfo">
        <div className="productInfo_images">
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <div className="productImages" onClick={handleImageChange}>
            {product.images?.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="productInfo_content">
          <h3> {product.description}</h3>
          <h3> ${product.price}</h3>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock} units</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
