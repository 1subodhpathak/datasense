// //src/components/FeaturedCourses.tsx
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useSwipeable } from "react-swipeable";

// const FeaturedCourses = () => {
//   const courses = [
//     {
//       id: 1,
//       title: "Machine Learning",
//       description:
//         "Learn the fundamentals of machine learning and how to build real-world applications.",
//       image: "/assets/courses/data-science.jpg",
//     },
//     {
//       id: 2,
//       title: "Data Analytics",
//       description:
//         "Dive into data analysis, visualization, and decision-making with our comprehensive course.",
//       image: "/assets/courses/data-science.jpg",
//     },
//     {
//       id: 3,
//       title: "Artificial Intelligence",
//       description:
//         "Explore the world of artificial intelligence and its applications in this advanced course.",
//       image: "/assets/courses/data-science.jpg",
//     },
//     {
//       id: 4,
//       title: "Cloud Computing",
//       description:
//         "Learn cloud architecture, services, and management in this beginner-friendly course.",
//       image: "/assets/courses/data-science.jpg",
//     },
//     {
//       id: 5,
//       title: "Web Development",
//       description:
//         "Master front-end and back-end development in our full-stack web development course.",
//       image: "/assets/courses/data-science.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? courses.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === courses.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//   });

//   return (
//     <section className="bg-gray-50 py-5 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//           Explore Our Courses
//         </h2>
//         <div
//           {...swipeHandlers}
//           className="relative flex items-center overflow-hidden"
//         >
//           {/* Navigation Arrows */}
//           <button
//             onClick={handlePrev}
//             className="hidden sm:flex absolute left-2 z-10 items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform -translate-y-1/2 top-1/2"
//           >
//             &#8249;
//           </button>

//           {/* Carousel Content */}
//           <motion.div
//             className="flex transition-transform duration-500 ease-in-out"
//             animate={{ x: -currentIndex * 100 + "%" }}
//             style={{ width: `${courses.length * 100}%` }}
//           >
//             {courses.map((course) => (
//               <div key={course.id} className="min-w-full flex-shrink-0 p-4">
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//                   <div className="relative h-48 sm:h-64 aspect-w-16 aspect-h-9">
//                     <img
//                       src={course.image}
//                       alt={course.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {course.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4">{course.description}</p>
//                     <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//                       Explore Course
//                       <svg
//                         className="ml-2 h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17 8l4 4m0 0l-4 4m4-4H3"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           <button
//             onClick={handleNext}
//             className="hidden sm:flex absolute right-2 z-10 items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform -translate-y-1/2 top-1/2"
//           >
//             &#8250;
//           </button>
//         </div>

//         {/* Indicators */}
//         <div className="flex justify-center space-x-2 mt-4">
//           {courses.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full ${
//                 currentIndex === index ? "bg-blue-600" : "bg-gray-400"
//               } transition-all duration-300`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCourses;

import { motion } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Machine Learning",
      description:
        "Learn the fundamentals of machine learning and how to build real-world applications.",
      image: "/assets/courses/data-science.jpg",
    },
    {
      id: 2,
      title: "Data Analytics",
      description:
        "Dive into data analysis, visualization, and decision-making with our comprehensive course.",
      image: "/assets/courses/data-science.jpg",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description:
        "Explore the world of artificial intelligence and its applications in this advanced course.",
      image: "/assets/courses/data-science.jpg",
    },
    {
      id: 4,
      title: "Cloud Computing",
      description:
        "Learn cloud architecture, services, and management in this beginner-friendly course.",
      image: "/assets/courses/data-science.jpg",
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "Master front-end and back-end development in our full-stack web development course.",
      image: "/assets/courses/data-science.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <section className="bg-gray-50 py-5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Explore Our Courses
        </h2>
        <div
          {...swipeHandlers}
          className="relative flex items-center overflow-hidden"
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-2 z-10 items-center justify-center w-10 h-10"
            style={{
              backgroundColor: "#00B8BB",
              color: "white",
              borderRadius: "50%",
            }}
          >
            &#8249;
          </button>

          {/* Carousel Content */}
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            animate={{ x: -currentIndex * 100 + "%" }}
            style={{
              width: "100%",
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="w-full flex-shrink-0 px-4" 
                style={{ flexBasis: "100%" }} 
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative h-48 sm:h-64 aspect-w-16 aspect-h-9">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <button
                      className="inline-flex items-center px-4 py-2 rounded-md transition-colors"
                      style={{
                        backgroundColor: "#00B8BB",
                        color: "white",
                      }}
                    >
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
              </div>
            ))}
          </motion.div>

          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-2 z-10 items-center justify-center w-10 h-10"
            style={{
              backgroundColor: "#00B8BB",
              color: "white",
              borderRadius: "50%",
            }}
          >
            &#8250;
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#00B8BB]" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
