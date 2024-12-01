import { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Eisenhower Matrix?",
      answer:
        "The Eisenhower Matrix is a task management tool that helps you prioritize tasks based on their urgency and importance. It divides tasks into four categories: Do, Decide, Delegate, and Delete.",
    },
    {
      question: "How do I start using the app?",
      answer:
        "To get started, simply create an account or sign in. Once you’re logged in, you can begin adding tasks to any of the four sections: Do, Decide, Delegate, or Delete. Each section helps you categorize tasks according to their priority level.",
    },
    {
      question: "How do I organize my tasks efficiently?",
      answer:
        "The app’s layout makes it easy to manage your tasks. As you create tasks, you can drag and drop them between the categories to adjust priorities. Each section—Do, Decide, Delegate, and Delete—helps you quickly see what’s most urgent and important.",
    },
    {
      question: "Is this app free to use?",
      answer:
        "Yes, the app is free to use. However, we are exploring premium features to enhance productivity further in the future.",
    },
    {
      question: "Can I sync my tasks across devices?",
      answer:
        "Yes, your tasks are synchronized in real time. You can access your tasks from any device with your account.",
    },
    {
      question: "How does real-time synchronization work?",
      answer:
        "Real-time synchronization means that any changes you make to your tasks (adding, editing, or deleting) will instantly reflect across all devices you're logged into, so you always have the most up-to-date information.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are answers to some of the most common questions about the
            Doable app.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200">
              <button
                className="w-full text-left py-3 px-6 text-gray-800 font-semibold focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {activeIndex === index && (
                <div className="py-3 px-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
