import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../services/cognito/Authenticate";
import { requestAuth } from "../../features/auth/auth.actions";
import { selectIsLoggedIn } from "../../features/auth/auth.selectors";

// Define the validation schema using yup
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Set up react-hook-form with yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      const username = data.username;
      const password = data.password;
      dispatch(requestAuth({ username, password }));
    } catch (err) {
      console.log(err)
    }
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign in to Fengshui Koi</h2>

        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email Input */}
          <label>Username *</label>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}

          {/* Password Input */}
          <div className="password-container">
            <label>Password *</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            <span
              className="password-toggle-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          {errors.password && <p className="error-message">{errors.password.message}</p>}

          {/* Forgot Password */}
          <div className="remember-forgot">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          {/* Sign In Button */}
          <button type="submit">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <Divider orientation="center" style={{ borderColor: "grey" }}>
          <span id="sign-up">or Sign in with</span>
        </Divider>

        {/* Google Sign In Button */}
        <button type="button" className="google-login">
          <GoogleOutlined /> Sign In with Google
        </button>

        {/* Sign Up and Back to Home Links */}
        <p className="signup">
          <span>Don't have an account?</span> <Link to="/sign-up">Sign Up</Link>
        </p>
        <p className="back-to-home">
          <Link to="/">Back to Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
