//src/components/Hero.tsx
import { Button } from "./ui/button";
import WaveBackground from './WaveBackground';

const Hero = () => {

  return (
    <div id="hero" className="relative min-h-screen bg-transparent">
      <WaveBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center space-y-8 sm:space-y-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-gray-900">Master Data Science with</span>
            <span className="block mt-2" style={{ color: '#00B8BB' }}>Industry Experts</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Learn from professionals, build real projects, and accelerate your career in data science with hands-on experience.
          </p>

          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 text-white hover:bg-blue-700">
              Explore Courses
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
              View Demo
            </Button>
          </div> */}

<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Button 
              className="w-full sm:w-auto text-lg px-8 py-6 text-white hover:bg-[#15A3C7]"
              style={{ backgroundColor: '#00B8BB' }}
            >
              Explore Courses
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto text-lg px-8 py-6"
              style={{ borderColor: '#00B8BB', color: '#00B8BB' }}
            >
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
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#00B8BB' }}>{stat}</div>
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