import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Google from "../../assets/icons/google.svg";
import Logo from "../../assets/icons/logo";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn, googleSignIn } = useAuthContext();
  const [incorrectAuth, setIncorrectAuth] = useState();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      navigate("/board");
    } catch (error) {
      if ((error.message = "auth/invalid-credential")) {
        setIncorrectAuth("Incorrect Email or Password");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/board");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main>
      <div className="bg-gray-50 text-[#232323] h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo
            textFill={"#232323"}
            iconFill={"#232323"}
            style={"mx-auto mb-6  h-[30px] max-h-[100px]"}
          />
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
            Sign In
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <button
            aria-label="Continue with google"
            role="button"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1"
          >
            <img src={Google} />
            <span
              onClick={handleGoogleSignIn}
              className="ml-4 text-base font-medium"
            >
              Continue with Google
            </span>
          </button>
          <div className="flex w-full items-center justify-between pt-5">
            <hr className="w-full bg-gray-400" />
            <p className="px-2.5 text-base font-medium leading-4 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                {" "}
                Email{" "}
              </label>
              <div className="mt-2">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary-600">
                  <input
                    name="email"
                    placeholder="Enter email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base  text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="mt-2">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary-600">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base  text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>

                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {!errors.password && !errors.email && incorrectAuth && (
                  <span className="text-sm text-red-500">
                    Incorrect email or password
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-600 px-4 py-2 text-sm/6 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="cursor-pointer font-semibold hover:font-bold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
