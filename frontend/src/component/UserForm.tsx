import React from "react";

import { FormProps, BaseFormData } from "../types/FormTypes.types";

const UserForm: React.FC<FormProps<BaseFormData>> = ({ register, errors }) => {
  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default UserForm;
