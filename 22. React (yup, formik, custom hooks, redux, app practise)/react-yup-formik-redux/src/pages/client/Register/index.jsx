import { Link } from "react-router";
import { useFormik } from "formik";
import registerSchema from "../../../validations/registerSchema";
import User from "../../../classes/User";
import authController from "../../../services/api/authApi";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { useAuth } from "../../../services/context/AuthContext";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  }, [user, navigate]);

  const registerFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async (values, actions) => {
      const newUser = new User(values.fullName, values.email, values.password);
      const response = await authController.register(newUser);
      if (response.message == "duplicate email") {
        enqueueSnackbar("email already taken!", {
          autoHideDuration: 2400,
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        registerFormik.values.email = "";
      } else {
        enqueueSnackbar("user registered successfully!", {
          autoHideDuration: 2400,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        navigate("/login");
        actions.resetForm();
      }
    },
    validationSchema: registerSchema,
  });
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get start to Rental your Car
          </h1>

          <form
            onSubmit={registerFormik.handleSubmit}
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign up your account
            </p>
            {/* full name input */}
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>

              <div className="relative">
                <input
                  id="fullName"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.fullName}
                  onBlur={registerFormik.handleBlur}
                  name="fullName"
                  type="text"
                  className="w-full rounded-lg border-red-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter Full Name"
                />
                {registerFormik.errors.fullName &&
                  registerFormik.touched.fullName && (
                    <span className="block text-red-500 text-xs pl-2 mt-2">
                      {registerFormik.errors.fullName}
                    </span>
                  )}
              </div>
            </div>
            {/* email input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={registerFormik.values.email}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  name="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter email"
                />
                {registerFormik.errors.email &&
                  registerFormik.touched.email && (
                    <span className="block text-red-500 text-xs pl-2 mt-2">
                      {registerFormik.errors.email}
                    </span>
                  )}
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* password input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.password}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter password"
                />
                {registerFormik.errors.password &&
                  registerFormik.touched.password && (
                    <span className="block text-red-500 text-xs pl-2 mt-2">
                      {registerFormik.errors.password}
                    </span>
                  )}
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* repeat password input */}
            <div>
              <label htmlFor="repeat-password" className="sr-only">
                Repeat Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  id="repeat-password"
                  name="repeatPassword"
                  value={registerFormik.values.repeatPassword}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Repeat password"
                />
                {registerFormik.errors.repeatPassword &&
                  registerFormik.touched.repeatPassword && (
                    <span className="block text-red-500 text-xs pl-2 mt-2">
                      {registerFormik.errors.repeatPassword}
                    </span>
                  )}
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button
              disabled={
                registerFormik.isSubmitting ||
                !registerFormik.dirty ||
                Object.getOwnPropertyNames(registerFormik.errors).length
              }
              type="submit"
              className={`block w-full rounded-lg px-5 py-3 text-sm font-medium text-white ${
                !registerFormik.dirty ||
                registerFormik.isSubmitting ||
                Object.getOwnPropertyNames(registerFormik.errors).length
                  ? "bg-indigo-200"
                  : "bg-indigo-600"
              }`}
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link className="underline" to={"/login"}>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
