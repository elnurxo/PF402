import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import loginValidationSchema from "../../validations/loginValidation";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { post } from "../../services/commonRequest";
import { API_BASE_URL, endpoints } from "../../services/api";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get a specific query parameter by name
  const message = searchParams.get("message");
  const errorMessage = searchParams.get("error");

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        autoHideDuration: 2000,
        variant: "success",
      });
    }
  }, [message]);

  useEffect(() => {
    if (errorMessage) {
      enqueueSnackbar("Google Sign In failed!", {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        autoHideDuration: 2000,
        variant: "error",
      });
    }
  }, [errorMessage]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, actions) => {
      const { email, password } = values;
      //send login request
      try {
        const res: {
          statusCode?: number;
          message: string;
          token?: string;
        } = await post(`${endpoints.auth}/login`, {
          email,
          password,
        });
        if (res.statusCode == 401) {
          enqueueSnackbar(res.message, {
            autoHideDuration: 2000,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            variant: "error",
          });
        } else {
          enqueueSnackbar(res.message, {
            autoHideDuration: 2000,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            variant: "success",
          });
          //set token
          if (res.token) {
            const decoded: {
              role: string;
              email: string;
              fullName: string;
              profileImage: string;
              id: string;
              iat: Date;
              exp: Date;
            } = jwtDecode(res.token);
            localStorage.setItem("token", JSON.stringify(res.token));

            dispatch(
              setUser({
                id: decoded.id,
                email: decoded.email,
                role: decoded.role,
                fullName: decoded.fullName,
                profileImage: decoded.profileImage,
                token: res.token,
              })
            );

            if (decoded.role === "admin") {
              navigate("/admin");
            } else if (
              decoded.role === "customer" ||
              decoded.role === "vendor"
            ) {
              navigate("/shop");
            }
          }
        }
      } catch (error) {
        console.log("error: ", error);
      }
      actions.resetForm();
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome Back
        </h2>

        <button
          onClick={() => {
            window.location.href = `${API_BASE_URL}/auth/google`;
          }}
          className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-blue-50 transition mb-6"
        >
          <FcGoogle size={22} />
          <span className="text-sm font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              or sign in with email
            </span>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-sm">
                {formik.errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={
              formik.isSubmitting ||
              !formik.dirty ||
              Object.entries(formik.errors).length > 0
            }
            className="w-full py-3 disabled:bg-blue-400 disabled:cursor-not-allowed cursor-pointer bg-blue-600 text-white font-semibold rounded-xl transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link
            to="/auth/forgot-password"
            className="text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </p>

        <p className="text-center text-sm text-gray-500 mt-1">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
