// //src/components/Hero.tsx
// // import { useState, useEffect } from 'react';
// import { Button } from "./ui/button";
// import WaveBackground from './WaveBackground';

// const Hero = () => {
//   // const [isInView, setIsInView] = useState(false);

//   // useEffect(() => {
//   //   // Add scrolling trigger animations
//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       entries.forEach((entry) => {
//   //         if (entry.isIntersecting) {
//   //           setIsInView(true);
//   //         }
//   //       });
//   //     },
//   //     { threshold: 0.5 }
//   //   );

//   //   const heroSection = document.getElementById('hero');
//   //   if (heroSection) {
//   //     observer.observe(heroSection);
//   //   }

//   //   return () => {
//   //     if (heroSection) {
//   //       observer.unobserve(heroSection);
//   //     }
//   //   };
//   // }, []);

//   return (
//     <div className={`relative overflow-hidden}`}>
//       <WaveBackground />
//       {/* Decorative background */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"/>
//         <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/30 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4"/>
//         <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/30 blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/4"/>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
//         <div className="text-center space-y-8 sm:space-y-12">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
//             <span className="block text-gray-900">Master Data Science with</span>
//             <span className="block text-blue-600 mt-2">Industry Experts</span>
//           </h1>
          
//           <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
//             Learn from professionals, build real projects, and accelerate your career in data science with hands-on experience.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
//             <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 text-white hover:bg-blue-700">
//               Explore Courses
//             </Button>
//             <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
//               View Demo
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-12 max-w-3xl mx-auto text-center">
//             {[
//               ['10K+', 'Active Learners'],
//               ['50+', 'Expert Instructors'],
//               ['95%', 'Success Rate'],
//             ].map(([stat, label]) => (
//               <div key={label} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
//                 <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat}</div>
//                 <div className="text-sm sm:text-base text-gray-600">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import WaveBackground from './WaveBackground';

const Hero = () => {
  // const [isInView, setIsInView] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsInView(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const heroSection = document.getElementById('hero');
  //   if (heroSection) {
  //     observer.observe(heroSection);
  //   }

  //   return () => {
  //     if (heroSection) {
  //       observer.unobserve(heroSection);
  //     }
  //   };
  // }, []);

  return (
    <div id="hero" className="relative min-h-screen bg-transparent">
      <WaveBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center space-y-8 sm:space-y-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-gray-900">Master Data Science with</span>
            <span className="block text-blue-600 mt-2">Industry Experts</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Learn from professionals, build real projects, and accelerate your career in data science with hands-on experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 text-white hover:bg-blue-700">
              Explore Courses
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-12 max-w-3xl mx-auto text-center">
            {[
              ['10K+', 'Active Learners'],
              ['50+', 'Expert Instructors'],
              ['95%', 'Success Rate'],
            ].map(([stat, label]) => (
              <div key={label} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat}</div>
                <div className="text-sm sm:text-base text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;