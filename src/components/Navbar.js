import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../authentication/Auth";
import ProfileButton from "./Profile/ProfileButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Badge } from "@mui/icons-material";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "700" : "450",
  };
};
export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <nav className="primary-nav">
        <p className="website_name" onClick={() => navigate("/dashboard")}>
          E-commerce
        </p>
        <div className="mainNavDiv">
          {!auth.cookie ? (
            <NavLink className="NavLink" style={navLinkStyles} to="/">
              <div className="sectionDashboardName">
                <p>Home </p>
                <HomeIcon />
              </div>
            </NavLink>
          ) : (
            <>
              <NavLink
                className="NavLink"
                style={navLinkStyles}
                to="/dashboard"
              >
                <div className="sectionDashboardName">
                  <p>Dashboard </p>
                  <DashboardIcon />
                </div>
              </NavLink>
              <NavLink className="NavLink" style={navLinkStyles} to="/cart">
                <div className="sectionDashboardName">
                  <p>Cart </p>
                  {/* <Badge color="secondary" badgeContent="1"> */}
                  <ShoppingCartIcon />
                  {/* </Badge> */}
                </div>
              </NavLink>
            </>
          )}

          <ProfileButton
            navLinkStyles={navLinkStyles}
            auth={auth}
            handleLogout={handleLogout}
          />
          {!auth.user && (
            <NavLink className="NavLink" style={navLinkStyles} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </nav>
      <Divider />
    </>
  );
};
