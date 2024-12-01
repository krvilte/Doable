import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/icons/google.svg";
import Logo from "../../assets/icons/logo";
import Close from "../../assets/icons/close";

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
      <div className="text-[#232323] bg-gray-50 h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="container flex justify-end p-2">
          <Link to={"/"}>
            <Close stroke={"#dc2626"} sWidth={"2.5"} style={"size-6"} />
          </Link>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to={"/"}>
            <Logo
              textFill={"#232323"}
              iconFill={"#232323"}
              style={"mx-auto mb-6  h-[30px] max-h-[100px]"}
            />
          </Link>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
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
                <div className="relative flex flex-col overflow-hidden rounded-md border-2 transition focus-within:border-primary-400">
                  <input
                    name="email"
                    type="email"
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
                  className="block text-sm/6 font-medium"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="mt-2">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary-400">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be 8 characters",
                      },
                    })}
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base  text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
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
                className="flex w-full justify-center rounded-md bg-primary-400 px-4 py-2 text-sm/6 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="cursor-pointer font-semibold hover:font-bold"
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
