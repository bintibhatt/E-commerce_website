import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../authentication/Auth";
import ProfileButton from "./Profile/ProfileButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "800" : "450",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <nav className="primary-nav">
        <div>
          {!auth.cookie ? (
            <NavLink className="NavLink" style={navLinkStyles} to="/">
              Home
            </NavLink>
          ) : (
            <NavLink className="NavLink" style={navLinkStyles} to="/dashboard">
              <div className="sectionDashboardName">
                <p>Dashboard </p>
                <DashboardIcon />
              </div>
            </NavLink>
          )}
        </div>
        <div className="profileNavDiv">
          {/* <ShoppingCartIcon /> */}
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
