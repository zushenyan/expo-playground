import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password length should be at least 6 characters")
    .required("Required")
});
