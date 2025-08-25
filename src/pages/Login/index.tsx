import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser, type ApiError } from "../../api/api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<ApiError | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const data = await loginUser(loginFormData);

      setError(null);
      localStorage.setItem("loggedin", String(true));

      if (data) {
        // if the user was redirected here because they weren't logged in
        const redirectPath = location.state?.from?.pathname || "/host";
        navigate(redirectPath, { replace: true });
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError);
    } finally {
      setStatus("idle");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section className="bg-[#FFF7ED] min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto">
        <div className="w-full bg-white rounded-lg shadow-md  sm:max-w-md xl:p-0 ">
          {location.state?.message && (
            <h3 className="login-first text-center py-8 text-red-500 text-2xl font-bold tracking-wide">
              {location.state.message}
            </h3>
          )}

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl">
              Sign in to your account
            </h1>
            {error?.message && (
              <h3 className="login-first text-center py-8 text-red-500 text-2xl font-bold tracking-wide">
                {error.message}
              </h3>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-zinc-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={loginFormData.email}
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-zinc-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  value={loginFormData.password}
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg focus:ring-zinc-600 focus:border-zinc-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-zinc-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-zinc-500 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-zinc-800 hover:underlin"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-700 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer transition duration-200 ease-in-out "
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Signing in" : "Sign in"}
              </button>
              <p className="text-sm font-light text-zinc-500 dark:text-zinc-700">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-zinc-900 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
