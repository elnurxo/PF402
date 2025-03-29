import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  fullName: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(4)
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .required(),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ).required(),
});

export default registerSchema;
