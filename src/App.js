import React from "react";

import Summary from "./components/Summary";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import About from "./components/About";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Summary />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
