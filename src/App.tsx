//src/App.tsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preheader from "./pages/Preheader";
import DataSenseChat from "./components/DataSenseChat";
import DataSenseAssistant from "./pages/DataSenseAssistant";
// import ChatBot from "./components/Chatbot";
// import FeaturedCourses from "./components/FeaturedCourses";

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

  // return (
  //   <div className="relative min-h-screen">
  //     {showPreheader ? (
  //       <Preheader />
  //     ) : (
  //       <>
  //         <Navbar />
  //         {/* <Hero /> */}
  //         {/* <FeaturedCourses /> */}
  //         {/* <ChatBot /> */}
  //         {/* <DataSenseChat /> */}
  //         <main className="relative">
  //           <Hero />
  //           <DataSenseChat />
  //         </main>
  //       </>
  //     )}
  //   </div>
  // );
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        {showPreheader ? (
          <Preheader />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="relative">
                    <Hero />
                    <DataSenseChat />
                  </main>
                </>
              }
            />
            <Route path="/datasense-assistant" element={<DataSenseAssistant />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );

}

export default App;
