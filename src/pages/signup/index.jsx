import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../assets/icons/icon.svg";
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={Icon} alt="Doable" className="w-14 m-auto" />
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
