import React from "react";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <spam className="text-gray-700 font-medium">US</spam>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] border rounded-3xl"
          src={assets.about_image}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Our story begins with a passion for creating something new and
            innovative. We believe that the best ideas come from collaboration
            and creativity. Our team is made up of talented individuals who are
            dedicated to bringing their ideas to life.
          </p>
          <p>
            We are a team of passionate individuals who are dedicated to
            creating something new and innovative. We believe that the best
            ideas come from collaboration and creativity.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to create a world where technology and creativity come
            together to make a positive impact on society.
          </p>
        </div>
      </div>
      <div className="text-xl my-4 text-center pt-10 text-gray-500 mb-5 ">
        <p>
          WHY <span className="text-grey-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 gap-3">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-3xl">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-3xl">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-3xl">
          <b>Personalization:</b>
          <p>
            Tailred recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
