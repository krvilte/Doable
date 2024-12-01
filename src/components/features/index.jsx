import { FaTasks, FaClock, FaChartPie, FaUserCheck } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTasks className="text-blue-600 w-14 h-14" />,
      title: "Task Management",
      description:
        "Organize your tasks effectively using our intuitive Eisenhower Matrix layout.",
    },
    {
      icon: <FaClock className="text-green-600 w-14 h-14" />,
      title: "Time Prioritization",
      description:
        "Focus on tasks that matter most and prioritize them with ease.",
    },
    {
      icon: <FaChartPie className="text-orange-600 w-14 h-14" />,
      title: "Progress Tracking",
      description:
        "Track your progress and visualize your achievements over time.",
    },
    {
      icon: <FaUserCheck className="text-purple-600 w-14 h-14" />,
      title: "User Friendly",
      description:
        "Enjoy a seamless and intuitive experience with our user-friendly interface.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600 mb-12">
          Discover how our Eisenhower Matrix app helps you stay organized,
          focused, and productive.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
