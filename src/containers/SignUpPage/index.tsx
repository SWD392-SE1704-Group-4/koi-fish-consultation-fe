import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { GoogleOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./index.css";
import { requestSignUp } from "../../features/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import { useSnackbar } from "notistack";
import { selectAuthInfo } from "../../features/auth/auth.selectors";
import { setAuthErrorAction, setSignUpStatusAction } from "../../features/auth";
const nameRegex = /^[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỲỴỶỸ\s]{1,20}$/;
// Define the validation schema using yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  tel: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  firstName: yup.string()
    .required("First Name is required")
    .matches(nameRegex, "First Name should contain only Vietnamese letters, no special symbols, and be one word up to 20 characters"),
  lastName: yup.string()
    .required("Last Name is required")
    .matches(nameRegex, "Last Name should contain only Vietnamese letters, no special symbols, and be one word up to 20 characters"),
});

const SignUp: React.FC = () => {
  const authInfo = useSelector(selectAuthInfo);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (authInfo.error) {
      enqueueSnackbar({ message: authInfo.error, variant: "error", autoHideDuration: 2000 })
    }
    dispatch(setAuthErrorAction(null))
  }, [authInfo?.error]);

  useEffect(() => {
    if (authInfo.signUpStatus) {
      enqueueSnackbar({ message: authInfo.signUpStatus, variant: "success", autoHideDuration: 2000 })
      navigate('/login')
    }
    dispatch(setSignUpStatusAction(null))
  }, [authInfo?.signUpStatus]);

  const onSubmit = (data: any) => {
    const password = data.password;
    const email = data.email;
    const phoneNumber = formatPhoneNumber(data.tel);
    const firstName = data.firstName;
    const lastName = data.lastName;
    dispatch(requestSignUp({ password, email, phoneNumber, firstName, lastName }))
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign up to Fengshui Koi</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="input-container">
            <label>Email Address *</label>
            <input
              type="text"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          {/* First and Last Name Inputs */}
          <div className="wrapper-input-name">
            <div className="input-container name">
              <label>First Name *</label>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName.message}</p>
              )}
            </div>

            <div className="input-container name">
              <label>Last Name *</label>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="input-container">
            <label>Phone Number *</label>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("tel")}
            />
            {errors.tel && (
              <p className="error-message">{errors.tel.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="input-container">
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
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit">Sign Up</button>

          {/* Divider */}
          <Divider orientation="center" style={{ borderColor: "grey" }}>
            <span id="sign-up">or Sign in with</span>
          </Divider>

          {/* Google Sign In */}
          <button className="google-login">
            <GoogleOutlined /> Sign In with Google
          </button>
        </form>

        {/* Back to Home Page */}
        <p className="back-to-home">
          <Link to="/">Back to Home Page</Link>
        </p>
        {/* Back to Home Page */}
        <p className="back-to-home">
          <Link to="/login">Back to login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
