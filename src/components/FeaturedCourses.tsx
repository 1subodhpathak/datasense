// // export default FeaturedCourses;

import { motion } from "framer-motion";
import { useState } from "react";

const FeaturedCourses = () => {

  const courses = [
        {
          id: 1,
          title: "Machine Learning",
          description: "Learn the fundamentals of machine learning and how to build real-world applications.",
          image: "/featured-course-1.jpg",
        },
        {
          id: 2,
          title: "Data Analytics",
          description: "Dive into data analysis, visualization, and decision-making with our comprehensive course.",
          image: "/featured-course-2.jpg",
        },
        {
          id: 3,
          title: "Artificial Intelligence",
          description: "Explore the world of artificial intelligence and its applications in this advanced course.",
          image: "/featured-course-4.jpg",
        },
        {
          id: 4,
          title: "Cloud Computing",
          description: "Learn cloud architecture, services, and management in this beginner-friendly course.",
          image: "/featured-course-4.jpg",
        },
        {
          id: 5,
          title: "Web Development",
          description: "Master front-end and back-end development in our full-stack web development course.",
          image: "/featured-course-3.jpg",
        },
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === courses.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform -translate-y-1/2 top-1/2"
          >
            &#8249;
          </button>

          <motion.div
            className="flex transition-transform duration-300 gap-8"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 50 + "%" }}
            style={{ width: `${courses.length * 50}%` }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="min-w-[50%] bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48 md:h-64">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Explore Course
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform -translate-y-1/2 top-1/2"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

