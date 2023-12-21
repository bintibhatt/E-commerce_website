import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/LogIn";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile/Profile";
import Home from "./components/Home";
import { AuthProvider } from "./authentication/Auth";
import { ProtectedRoute } from "./authentication/ProtectedRoute";
import ProductList from "./components/Products/ProductsList";
import ProductInfo from "./components/Products/ProductInfo";
import ProductDiv from "./components/Products/ProductDiv";
import { ProductProvider } from "./components/Products/ProductContext";
import ProductCategory from "./components/Products/ProductCategory";
import ManageCart from "./components/Cart/ManageCart";

function MainPage() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/products" element={<ProductList />}>
            <Route index element={<ProductDiv />} />
            <Route
              path="/products/category/:pCategory"
              element={<ProductCategory />}
            />
            <Route path="/products/:productId" element={<ProductInfo />} />
          </Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/cart" element={<ManageCart />}></Route>
        </Routes>
      </ProductProvider>
    </AuthProvider>
  );
}

export default MainPage;
