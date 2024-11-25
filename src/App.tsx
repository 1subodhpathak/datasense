//src/App.tsx
import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preheader from "./pages/Preheader";
import FeaturedCourses from "./components/FeaturedCourses";

function App() {
  const [showPreheader, setShowPreheader] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the Preheader after 3 seconds
    const timer = setTimeout(() => {
      setShowPreheader(false);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {showPreheader ? (
        <Preheader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <FeaturedCourses />
        </>
      )}
    </div>
  );
}

export default App;
