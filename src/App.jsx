import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects></Projects>
        <Resume />
        <Education></Education>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";

// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//       {/* Full-height background that adjusts to the content */}
//       <div className="fixed top-0 left-0 -z-10 w-full min-h-screen h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

//       {/* The content */}
//       <div className="container mx-auto px-8 min-h-screen">
//         <Navbar />
//         <Hero />
//         <About />
//         {/* Ensure there's enough content for scrolling */}
//         <div className="mt-10">
//           <div className="h-[200vh]"></div> {/* This is for testing scroll */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
