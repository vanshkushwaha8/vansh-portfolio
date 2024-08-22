import React, { useRef } from 'react';
import youtube from '../public/youtube.png';
import instagram from '../public/instagram.png';
import twitter from '../public/twitter.png';
import facebookicon from '../public/facebook-icon.png';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ix0x2s', 'template_0vxmnmj', form.current, 'Za2nD_gUMfjcsSq_U')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent");
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contactPage" className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      <div id="contact" className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-4 text-center text-teal-600">Contact Me</h1>
        <p className="text-base text-gray-700 mb-6 text-center">
          I'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        
        <form className="flex flex-col space-y-6" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            className="text-gray-800 bg-gray-100 p-4 w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition duration-300"
            name="from_name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="text-gray-800 bg-gray-100 p-4 w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition duration-300"
            name="from_email"
          />
          <textarea
            name="message"
            className="text-gray-800 bg-gray-100 p-4 w-full rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition duration-300"
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <button
            className="bg-teal-500 text-white py-3 px-6 rounded-full mt-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="w-10 h-10 object-cover transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-10 h-10 object-cover transition-transform transform hover:scale-110" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-10 h-10 object-cover transition-transform transform hover:scale-110" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookicon} alt="Facebook" className="w-10 h-10 object-cover transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
