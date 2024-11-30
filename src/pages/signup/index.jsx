import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/icons/google.svg";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, googleSignIn } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      signUp(data.email, data.password);
      navigate("/board");
    } catch (error) {
      console.error(error.message);
      navigate("/board");
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
      <div className="bg-gray-50 h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 590.1 169.16"
            className="w-24 h-auto m-auto mb-8"
          >
            <g id="Layer_1" dataName="Layer 1">
              <path
                d="M260.06,39.18V130a2.93,2.93,0,0,1-3.24,3.24H245.71a2.93,2.93,0,0,1-3.24-3.24v-6.66c-4.86,6.17-12.16,9.89-22.12,9.89-18.2,0-33.23-15.64-33.23-35.92s15-35.92,33.23-35.92c10,0,17.26,3.72,22.12,9.88V39.18a2.93,2.93,0,0,1,3.24-3.24h11.11A2.93,2.93,0,0,1,260.06,39.18ZM242.47,97.29c0-11.45-8-19.22-18.88-19.22s-18.88,7.77-18.88,19.22,8,19.22,18.88,19.22S242.47,108.74,242.47,97.29Z"
                fill="#f43f5e"
              />
              <path
                d="M268.38,97.29a36.06,36.06,0,1,1,36.06,35.92A35.65,35.65,0,0,1,268.38,97.29Zm54.53,0c0-11-8-18.81-18.47-18.81S286,86.25,286,97.29s8,18.81,18.47,18.81S322.91,108.33,322.91,97.29Z"
                fill="#f43f5e"
              />
              <path
                d="M374.65,61.37c15.07,0,27.75,9,27.75,26.72v40c0,2.08-1.16,5.08-3.24,5.08h-10.7a2.93,2.93,0,0,1-3.24-3.24v-4.51c-3.92,4.78-9.83,7.74-18.47,7.74-12.14,0-23-7.12-23-21.44s10.84-21.43,23-21.43c8.64,0,14.55,2.58,18.47,6V89.11c0-8.08-4.09-11.45-10.57-11.45-5.14,0-8.93,2.14-10.08,5.83-.72,1.84-1.44,2.89-3.38,2.89H350.28c-2.07,0-3.37-1.16-3.23-3.37,1.7-13.94,13.63-21.64,27.6-21.64Zm10.57,50.41c0-5.25-4.77-8.49-12.51-8.49s-11.35,3.58-11.35,8.49,3.61,8.48,11.35,8.48S385.22,116.68,385.22,111.78Z"
                fill="#f43f5e"
              />
              <path
                d="M485.6,97.29c0,20.28-15,35.92-33.24,35.92-9.95,0-17.25-3.72-22.12-9.89V130a2.93,2.93,0,0,1-3.24,3.24H415.89a2.92,2.92,0,0,1-3.23-3.24V39.18a2.93,2.93,0,0,1,3.24-3.24H427a2.92,2.92,0,0,1,3.23,3.24V71.25c4.87-6.16,12.17-9.88,22.12-9.88C470.56,61.37,485.6,77,485.6,97.29Zm-17.59,0c0-11.45-8.05-19.22-18.88-19.22s-18.89,7.77-18.89,19.22,8.05,19.22,18.89,19.22S468,108.74,468,97.29Z"
                fill="#f43f5e"
              />
              <path
                d="M493.91,130V39.15a2.92,2.92,0,0,1,3.24-3.21h11.11a2.92,2.92,0,0,1,3.24,3.21V130a2.92,2.92,0,0,1-3.24,3.21H497.15A2.92,2.92,0,0,1,493.91,130Z"
                fill="#f43f5e"
              />
              <path
                d="M590.1,97.36c0,1.46-.11,2.83-.21,4.19a3.12,3.12,0,0,1-3.47,3h-48.2c2.39,9.69,9.75,14.11,18.48,14.11a17.12,17.12,0,0,0,12.44-5,5.45,5.45,0,0,1,4-1.8l10.91-.11c2.35,0,3.65,1.5,2.66,3.55-5.15,11.49-16.33,17.89-30.23,17.89-22.19,0-36.54-15.54-36.54-35.92s14.69-35.92,36.13-35.92C576.19,61.37,590.1,77.25,590.1,97.36Zm-17.58-6.65c-2-9.74-9.2-13.56-16.58-13.56-9.32,0-15.7,5-17.79,13.56Z"
                fill="#f43f5e"
              />
              <path
                d="M161.27,0H7.89A7.89,7.89,0,0,0,0,7.89v103a5.58,5.58,0,0,0,5.58,5.58h0a5.58,5.58,0,0,0,5.58-5.58V89.7a3.38,3.38,0,0,1,3.39-3.38H47a32.94,32.94,0,0,1,32.94,32.94v5.68A32.94,32.94,0,0,1,47,157.88H14.55a3.38,3.38,0,0,1-3.39-3.38V133.32a5.58,5.58,0,0,0-5.58-5.58h0A5.58,5.58,0,0,0,0,133.32v28a7.89,7.89,0,0,0,7.89,7.89H161.27a7.89,7.89,0,0,0,7.89-7.89V7.89A7.89,7.89,0,0,0,161.27,0Z"
                fill="#f43f5e"
              />
            </g>
          </svg>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create Account
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
              className="ml-4 text-base font-medium text-gray-700"
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
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                {" "}
                Email{" "}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email..."
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm/6"
                />
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
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password..."
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be 8 characters",
                    },
                  })}
                  className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-rose-600 px-4 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            <Link
              to={"/login"}
              className="cursor-pointer font-semibold text-rose-600 hover:text-rose-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Signup;
