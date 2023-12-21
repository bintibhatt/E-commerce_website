/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useProduct } from "./ProductContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CartCounter from "../Cart/CartCounter";

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
        productUse.setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        productUse.setIsLoading(false);
      });
  }, [productId]);

  function handleImageChange() {}

  return (
    <>
      <div className="product_info_div">
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => {
            navigate(-1, { search: `?product_id=${productId}` });
          }}
        >
          Back
        </Button>
        <h2>Product Information</h2>
        {productUse.isLoading ? (
          <Box sx={{ width: "1000", height: "1000", display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className="productInfo">
            <div className="productInfo_images">
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <div className="productImages" onClick={handleImageChange}>
                {product.images?.map((image, index) => (
                  <img key={index} src={image} alt={`Product ${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="productInfo_content">
              <p>{product.id}</p>
              <h3> {product.description}</h3>
              <h3> ${product.price}</h3>
              <ul>
                <li>
                  <p>Category: {product.category}</p>
                </li>
                <li>
                  <p>Brand: {product.brand}</p>
                </li>
                <li>
                  <p>Discount: {product.discountPercentage}%</p>
                </li>
                <li>
                  <p>Rating: {product.rating}</p>
                </li>
                <li>
                  <p>Stock: {product.stock} units</p>
                </li>
              </ul>
              <h4>Add to Cart:</h4>
              <CartCounter pId={productId} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductInfo;
