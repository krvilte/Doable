import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-100 to-white py-32 md:py-40 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight mb-4">
            Take Control of Your Tasks with the{" "}
            <span className="text-primary-600">Eisenhower Matrix</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 relative z-10">
            Stay organized, prioritize your tasks, and accomplish your goals
            with ease. Focus on what truly matters.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              to={"/signup"}
              className="px-8 py-4 text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-md text-lg font-medium transition duration-300"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-8 py-4 text-black/60 bg-black/10 hover:bg-black/20 rounded-lg shadow-md text-lg font-medium transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image/illustration
              alt="Eisenhower Matrix Illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Background Circle */}
      <div className="absolute inset-0 bg-teal-300 opacity-30 rounded-full -z-10"></div>
    </section>
  );
};

export default HeroSection;
