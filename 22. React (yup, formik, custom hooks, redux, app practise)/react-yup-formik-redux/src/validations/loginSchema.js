import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

export default loginSchema;
