import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Projects />
    </div>
  );
};

export default Home;
