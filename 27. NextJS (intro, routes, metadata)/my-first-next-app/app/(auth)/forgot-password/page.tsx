export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your email to receive password reset instructions.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}
