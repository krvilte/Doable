import React from "react";
import imageSrc from "../../assets/images/02.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image or Illustration */}
          <div className="w-full md:w-1/2">
            <img
              src={imageSrc}
              alt="Eisenhower Matrix Illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Simplify Your Task Management with Doable
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed mb-4">
              <b>Doable</b> makes task prioritization effortless by helping you
              organize your tasks using the proven <b>Eisenhower Matrix</b>.
              With Doable, you’ll always know what to focus on, eliminating
              stress and boosting your productivity.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed mb-4">
              Whether it’s personal goals or professional projects, Doable
              ensures you stay on track with its intuitive, user-friendly
              interface. Stay productive, stay focused, and get things done—one
              task at a time.
            </p>
            <a
              href="#features"
              className="inline-block px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-md text-lg transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
