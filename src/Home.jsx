import React from "react";
import pic from "../public/1.png";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-6 md:px-12 py-20"
        style={{
          background: "linear-gradient(135deg, #ff9a8b 0%, #ff6a00 100%)", // Updated gradient
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4 order-2 md:order-1">
            <h1 className="text-4xl font-extrabold text-center text-white">
              Welcome to Vansh's Portfolio
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center text-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-white">
                Hello, I'm a{" "}
              </h2>
              <ReactTyped
                className="text-3xl md:text-5xl font-bold text-yellow-300"
                strings={["Creative", "Developer", "Innovative", "Programmer"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <p className="text-lg md:text-xl text-center text-gray-200">
              Passionate about building interactive web applications using React, Node.js, and MongoDB. Seeking challenging roles to create innovative solutions and drive impactful projects.
            </p>
            <div className="flex flex-col items-center md:flex-row md:justify-between mt-8">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                <div className="flex space-x-6 justify-center">
                  <a href="https://www.instagram.com/vansh_kushwaha__?igsh=NHIwOXVmbXU1d2V6" target="_blank" rel="noopener noreferrer">
                    <GrInstagram className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/vansh-kushwaha-71640a25b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
                  </a>
                  <a href="https://github.com/vanshkushwaha8" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
                  </a>
                </div>
              </div>
              <div className="space-y-2 text-center mt-6 md:mt-0">
                <h3 className="text-xl font-semibold text-white">Currently Working On</h3>
                <div className="flex space-x-6 justify-center">
                  <SiMongodb className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
                  <FaReact className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
                  <FaNodeJs className="text-3xl text-white hover:text-yellow-400 transition duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end order-1">
            <img src={pic} className="rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-lg" alt="profile" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://drive.google.com/file/d/1SIaREEot_53llUUUCuRSWWOAcit76AuW/view?usp=sharing" // Updated link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-500 text-white text-lg font-bold rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
    </>
  );
}

export default Home;
