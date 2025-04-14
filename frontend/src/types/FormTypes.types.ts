import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

export interface BaseFormData {
  email: string;
  password: string;
  terms?: string;
}

export interface VendorFormData extends BaseFormData {
  companyName: string;
}

export interface FormProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface ForgotPasswordModalProps {
  show: boolean;
  handleClose: () => void;
}

export interface ForgotPasswordFormInputs {
  email: string;
}