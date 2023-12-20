import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import StoreIcon from "@mui/icons-material/Store";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  function getAllProducts() {
    navigate("/products");
  }

  function getByCategory(value) {
    navigate(`/products/category/${value}`);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        endIcon={<StoreIcon />}
        onClick={getAllProducts}
      >
        Show All Products
      </Button>
      <div className="dashboard_category">
        <section className="heading_section">
          <h2>Shop by Category </h2>
          <ArrowForwardIosIcon />
        </section>
        <section className="body_section">
          {categories.map((category) => (
            <div key={category} className="category_div">
              <Button
                variant="contained"
                onClick={() => getByCategory(category)}
              >
                {category}
              </Button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
