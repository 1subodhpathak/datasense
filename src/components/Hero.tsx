// //src/components/Hero.tsx
// import { Button } from "./ui/button";
// // import WaveBackground from './WaveBackground';

// const Hero = () => {

//   return (
//     <div id="hero" className="relative min-h-screen bg-transparent">
//       {/* <WaveBackground /> */}
//       <video
//         className="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline // For mobile compatibility
//         src="/assets/background.mp4" // Adjust path accordingly
//       ></video>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
//         <div className="text-center space-y-8 sm:space-y-12">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
//             <span className="block text-gray-900">Master Data Science with</span>
//             <span className="block mt-2" style={{ color: '#00B8BB' }}>Industry Experts</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
//             Learn from professionals, build real projects, and accelerate your career in data science with hands-on experience.
//           </p>

//           {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
//             <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 text-white hover:bg-blue-700">
//               Explore Courses
//             </Button>
//             <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
//               View Demo
//             </Button>
//           </div> */}

// <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
//             <Button 
//               className="w-full sm:w-auto text-lg px-8 py-6 text-white hover:bg-[#15A3C7]"
//               style={{ backgroundColor: '#00B8BB' }}
//             >
//               Explore Courses
//             </Button>
//             <Button 
//               variant="outline" 
//               className="w-full sm:w-auto text-lg px-8 py-6"
//               style={{ borderColor: '#00B8BB', color: '#00B8BB' }}
//             >
//               View Demo
//             </Button>
//           </div>

//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-12 max-w-3xl mx-auto text-center">
//             {[
//               ['10K+', 'Active Learners'],
//               ['50+', 'Expert Instructors'],
//               ['95%', 'Success Rate'],
//             ].map(([stat, label]) => (
//               <div key={label} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
//                 <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#00B8BB' }}>{stat}</div>
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


import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="fixed inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/background.mp4"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-white">Master Data Science with</span>
            <span className="block mt-2 text-[#00B8BB]">Industry Experts</span>
          </h1>
          
          <p className="max-w-2xl mx-auto mt-8 text-lg sm:text-xl text-white/90">
            Learn from professionals, build real projects, and accelerate your career in 
            data science with hands-on experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12">
            <Button 
              className="w-full sm:w-auto text-lg px-8 py-6 text-white hover:bg-[#15A3C7] transition-colors"
              style={{ backgroundColor: '#00B8BB' }}
            >
              Explore Courses
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-sm 
                         hover:bg-white/20 transition-colors border-2"
              style={{ borderColor: '#00B8BB', color: 'white' }}
            >
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-12 max-w-3xl mx-auto">
            {[
              ['10K+', 'Active Learners'],
              ['50+', 'Expert Instructors'],
              ['95%', 'Success Rate'],
            ].map(([stat, label]) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 
                                        border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-[#00B8BB]">
                  {stat}
                </div>
                <div className="text-sm sm:text-base text-white/80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;