import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold ">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px] border rounded-3xl"
          src={assets.contact_image}
          alt=""
        ></img>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            <a href="#map-section" className="text-blue-500 hover:underline">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </a>
          </p>
          <p className="text-gray-500">
            Tel:{" "}
            <a
              href="tel:+14155550132"
              className="text-blue-500 hover:underline"
            >
              (415) 555-0132
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:mk@gmail.com"
              className="text-blue-500 hover:underline"
            >
              mk@gmail.com
            </a>
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at PRESCRIPTION
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm rounded-full hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      {/* Map Section */}
      <div id="map-section" className="flex justify-center mb-10">
        <iframe
          title="Google Map Location"
          className="w-full max-w-2xl h-80 border rounded-3xl mt-2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093295!2d-122.41941558468172!3d37.774929779759594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815477299dfb%3A0x6c7b6fce16a7da35!2s54709%20Willms%20Station%2C%20Washington%2C%20USA!5e0!3m2!1sen!2sus!4v1693502149234!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
