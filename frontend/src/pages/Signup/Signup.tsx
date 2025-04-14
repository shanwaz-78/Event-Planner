import React, { useState } from "react";
import { useForm, UseFormRegister, FieldErrors } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import VendorForm from "../../component/VendorForm";
import UserForm from "../../component/UserForm";
import { Link } from "react-router-dom";
import { BaseFormData, VendorFormData } from "../../types/FormTypes.types"; 

function SignUp() {
  const [role, setRole] = useState<"user" | "vendor">("user");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BaseFormData | VendorFormData>();

  const onSubmit = (data: BaseFormData | VendorFormData) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset(); // Reset form after submission
  };

  return (
    <div
      className="container-fluid d-flex"
      style={{ overflow: "none", height: "100vh" }}
    >
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="w-50 d-flex flex-column align-items-center justify-content-center">
          <h2 className="fw-bold">Create an account</h2>
          <p>Select vendor or user to setup your profile</p>

          {/* Role Selection Buttons */}
          <div className="btn-group mb-3 d-flex align-items-center gap-4">
            <button
              className={`btn ${role === "vendor" ? "btn-dark" : "btn-light"}`}
              onClick={() => setRole("vendor")}

              style={{
                border: "1px solid rgba(229,229,229,1)",
                borderRadius: "5px",
              }}

            >
              I'm a vendor
            </button>
            <button
              className={`btn ${role === "user" ? "btn-dark" : "btn-light"}`}
              onClick={() => setRole("user")}

              style={{
                border: "1px solid rgba(229,229,229,1)",
                borderRadius: "5px",
              }}
            >
              I'm a user
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-100">
            {role === "vendor" ? (

              <VendorForm
                register={register as UseFormRegister<VendorFormData>}
                errors={errors as FieldErrors<VendorFormData>}
              />
            ) : (
              <UserForm
                register={register as UseFormRegister<BaseFormData>}
                errors={errors as FieldErrors<BaseFormData>}
              />

            )}

            {/* Checkbox */}
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                className="me-2"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
              />
              <span>I agree to terms and services</span>
            </div>
            {errors.terms && (
              <p className="text-danger">{(errors.terms)?.message}</p>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-secondary w-100">
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-3">
            Already have an account? <Link to="/login">Log In</Link>
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
    </div>
  );
}

export default SignUp;
