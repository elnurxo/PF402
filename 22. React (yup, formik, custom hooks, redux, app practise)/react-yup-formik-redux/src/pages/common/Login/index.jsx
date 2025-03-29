import { Link } from "react-router";
import { useFormik } from "formik";
import loginSchema from "../../../validations/loginSchema";
import authController from "../../../services/api/authApi";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { useAuth } from "../../../services/context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  }, [user, navigate]);
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      const response = await authController.login(values);
      if (!response.isLogged) {
        enqueueSnackbar(response.message, {
          autoHideDuration: 1500,
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        actions.resetForm();
      } else {
        enqueueSnackbar(response.message, {
          autoHideDuration: 1500,
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
        login(values);
        if (response.data[0].role == "admin") {
          navigate("/admin");
        } else if (response.data[0].role === "customer") {
          navigate("/cars");
        }
        actions.resetForm();
      }
    },
    validationSchema: loginSchema,
  });
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome Back
          </h1>

          <form
            onSubmit={loginFormik.handleSubmit}
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter email"
                />
                {loginFormik.errors.email && loginFormik.touched.email && (
                  <span className="block text-red-500 text-xs pl-2 mt-2">
                    {loginFormik.errors.email}
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

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter password"
                />
                {loginFormik.errors.password &&
                  loginFormik.touched.password && (
                    <span className="block text-red-500 text-xs pl-2 mt-2">
                      {loginFormik.errors.password}
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
                loginFormik.isSubmitting ||
                !loginFormik.dirty ||
                Object.getOwnPropertyNames(loginFormik.errors).length
              }
              type="submit"
              className={`block w-full rounded-lg px-5 py-3 text-sm font-medium text-white ${
                !loginFormik.dirty ||
                loginFormik.isSubmitting ||
                Object.getOwnPropertyNames(loginFormik.errors).length
                  ? "bg-indigo-200"
                  : "bg-indigo-600"
              }`}
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-500">
              No account?{" "}
              <Link className="underline" to={"/register"}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
