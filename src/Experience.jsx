import React from "react";
import html from "../public/html.png";
import css from "../public/css.jpg";
import javascript from "../public/javascript.png";
import Bootstrap from "../public/boot.png";
import Nodejs from "../public/nodejs.png";
import reactjs from "../public/reactjs.png";
import mongoDB from "../public/mongodb.jpg";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: Bootstrap, name: "Responsive Bootstrap" },
    { id: 5, logo: Nodejs, name: "Node.js" },
    { id: 6, logo: reactjs, name: "ReactJS" },
    { id: 7, logo: mongoDB, name: "MongoDB" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-8 my-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        SKILL SETS
      </h1>
      <p className="text-center text-lg mb-10 text-gray-700">
      Over the last 2 years, I’ve focused extensively on front-end development      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border rounded-xl bg-white shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mb-3"
            />
            <div className="text-xl font-semibold text-gray-800">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
