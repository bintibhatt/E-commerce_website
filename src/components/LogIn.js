import React, { useState } from "react";
import data from "../json/users.json";
import { useAuth } from "../authentication/Auth";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  //----------for material Ui password field------
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //----------for material Ui password field------

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleLogin() {
    const userExist = data.find(
      (userData) =>
        userData.username === user.username &&
        userData.password === user.password
    );

    if (userExist) {
      auth.login(user);
      navigate("/dashboard");
    } else {
      alert("User doesn't exist! Please add the user!");
      navigate("/login");
    }
  }

  return (
    <div className="login_div">
      <div className="login_card">
        <h3>Login</h3>
        <TextField
          id="outlined-multiline-flexible"
          className="login_input_field"
          label="username"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          multiline
        />
        <br></br>
        {/* <TextField
          id="outlined-multiline-flexible"
          className="login_input_field"
          type="password"
          label="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          multiline
          size="small"
        /> */}
        <FormControl sx={{ width: "22ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            className="login_input_field"
            label="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </FormControl>

        <br></br>
        <Button
          variant="contained"
          onClick={handleLogin}
          className="login_button"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
