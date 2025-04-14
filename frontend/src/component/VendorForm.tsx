import React from "react";
import { FormProps, VendorFormData } from "../types/FormTypes.types";

const VendorForm: React.FC<FormProps<VendorFormData>> = ({
  register,
  errors,
}) => {
  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Type your company name"
        {...register("companyName", { required: "Company name is required" })}
      />
      {errors.companyName && (
        <p className="text-danger">{errors.companyName.message}</p>
      )}

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Type your email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Type your password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && (
        <p className="text-danger">{errors.password.message}</p>
      )}
    </>
  );
};

export default VendorForm;
