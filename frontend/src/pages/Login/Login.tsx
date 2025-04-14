import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPasswordModal from "../../component/ForgotPasswordModal";
import { Link } from "react-router-dom";
import { BaseFormData } from "../../types/FormTypes.types";

function Login() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BaseFormData>();

  const onSubmit = (data: BaseFormData) => {
    console.log("Form Data:", data);
    alert("Login successful!");
    reset();
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="w-50 d-flex flex-column align-items-center justify-content-center">
          <h2 className="fw-bold">Welcome Back</h2>
          <p>Go ahead and login below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-100">
            {/* Email Input */}
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Type your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}

            {/* Password Input */}
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Type your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            {/* Forgot Password */}
            <p
              className="text-primary cursor-pointer"
              style={{ width: "fit-content", cursor: "pointer" }}
              onClick={() => setShowModal(true)}
            >
              Forgot Password?
            </p>

            {/* Terms Checkbox */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="me-2"
                  {...register("terms" as any, {
                    required: "You must agree to the terms",
                  })}
                />
                <span>I agree to terms and services</span>
              </div>
            </div>
            {errors.terms && (
              <p className="text-danger">{(errors.terms as any)?.message}</p>
            )}

            {/* Login Button */}
            <button type="submit" className="btn btn-secondary w-100">
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side Branding */}
      <div
        className="col-md-6 d-flex align-items-center justify-content-center text-white bg-image"
        style={{
          backgroundImage: "url(signUpBg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center w-50">
          <img
            src="https://c3093a5abab386b0d9690b47b31abedb.cdn.bubble.io/f1709042887076x661658487365572900/Workplace-light.svg"
            alt=""
          />
          <h2 className="fw-bold">EventPlanner Pro</h2>
          <p>
            Welcome to EventPlanner Pro, Simplifying event planning, handling
            every detail with ease.
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showModal && (
        <ForgotPasswordModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      )}
    </div>
  );

}

export default Login;
