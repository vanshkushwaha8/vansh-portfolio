import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-600">YOU WANT TO KNOW ME SCROLL DOWN</h1>
      
      <div className="mb-12 text-center">
        <p className="text-lg text-gray-800 mb-6">
        I Vansh Kushwaha, and I’m 
in my final year of Computer Science and Engineering at 
Centurion University, Odisha. Over the last two years, I’ve 
focused extensively on front-end development, gaining 
hands-on experience with HTML5, CSS, JavaScript, 
Responsive Bootstrap, Material Design.I’ve also worked 
with Node.js, React, and MongoDB as part of the MERN 
Stack.         </p>
      </div>

      <table className="w-full border-separate border-spacing-4">
        <tbody>
          {/* Education & Training */}
          <tr>
            <td className="font-semibold text-xl text-white bg-green-500 py-2 px-4 rounded-t-lg" colSpan="2">EDUCATION </td>
          </tr>
          <tr>
            <td className="font-medium text-blue-800 bg-blue-100 border border-blue-200 p-4 rounded-lg">
              B.Tech
            </td>
            <td className="text-gray-700 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            CENTURION UNIVERSITY OF TECHNOLOGY MANAGEMENT (2021 - 2025) 
            B.Tech in Computer Science and Engineering (CSE) Expected Graduation: [May - 2025 ]            </td>
          </tr>
          
          <tr>
            <td className="font-semibold text-xl text-white bg-purple-500 py-2 px-4 rounded-t-lg" colSpan="2">ACHIEVEMENTS</td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-purple-100 border border-purple-200 p-4 rounded-lg" colSpan="2">
            Accenture UK - Developer and Technology Job Simulation 
            ForageForage Issued Feb 2024 Credential ID - nHz4SLZ5dywHX6XQ9.             </td>
          </tr>
          <tr>
            <td className="text-gray-800 bg-purple-50 border border-purple-200 p-4 rounded-lg" colSpan="2">
            Lyft - Back-End Engineering Job Simulation 
            ForageForage Issued Feb 2024 Credential ID - 375GfA4dJgYfozs4Z.             </td>
          </tr>

          {/* Mission Statement */}
          {/* <tr>
            <td className="font-semibold text-xl text-white bg-teal-500 py-2 px-4 rounded-t-lg" colSpan="2">Mission Statement</td>
          </tr> */}
          {/* <tr>
            <td className="text-gray-800 bg-teal-100 border border-teal-200 p-4 rounded-lg" colSpan="2">
              My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and make a positive impact on the digital landscape. I am dedicated to continuous learning and growth, always seeking new challenges and opportunities to expand my expertise.
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default About;
