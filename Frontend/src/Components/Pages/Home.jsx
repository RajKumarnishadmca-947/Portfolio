import React from "react";
import Skills from "../Pages/Skills"
import Projects from "../Pages/Projects"
import About from "../Pages/About"
import Contact from "./Contact";
import Certification from "./Certification"
import "../../App.css";
import { Link} from "react-router-dom";

const Home = () => {
  
  return (
    <div>
      <div className="home-container">
        {/* Left Section */}
        <div className="home-left">
          <p className="welcome">HELLO WELCOME TO MY SITE</p>
          <h1>I'm <span>RAJ KUMAR</span></h1>
          <h2 className="role">A <span>MERN Stack Developer</span>  &</h2>
          <h2>ML Engineer</h2>
          <p className="desc">
            I build modern web applications using MongoDB, Express, React
            and Node.js. Passionate about creating scalable and beautiful
            web solutions.
          </p>
          <div className="buttons">
            <Link className="btn1" to="/projects">Projects</Link>
            <Link to="/contact" className="btn2">Contact Me</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="home-right">
          <img src="/portfolio_Image_copy.jpeg" alt="profile" className="profile-img"/>
        </div>
      </div>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Certification></Certification>
    </div>
  );
};

export default Home;