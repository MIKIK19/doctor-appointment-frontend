import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showPrivacyPolicy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPrivacyPolicy]);

  // Close modal when Escape key is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      closePrivacyPolicy();
    }
  };

  useEffect(() => {
    if (showPrivacyPolicy) {
      window.addEventListener("keydown", handleKeyPress);
    } else {
      window.removeEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showPrivacyPolicy]);

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const closePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  const handleBackdropClick = (e) => {
    // Close the modal if the backdrop is clicked
    if (e.target === e.currentTarget) {
      closePrivacyPolicy();
    }
  };

  // Helper function for navigation links
  const NavigationLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
    {
      name: "Privacy policy",
      path: "/privacy-policy",
      onClick: handlePrivacyPolicyClick,
    },
  ];

  return (
    <div className="md:mx-10 relative">
      {/* Privacy Policy Popup */}
      {showPrivacyPolicy && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
          onClick={handleBackdropClick} // Close on backdrop click
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative animate-fadeIn overflow-hidden transition-transform transform">
            <h2
              id="privacy-policy-title"
              className="text-2xl font-bold text-center mb-4 text-blue-600"
            >
              Privacy Policy
            </h2>
            <div className="overflow-y-auto max-h-[60vh] px-4">
              <p className="text-sm text-gray-600 leading-6 mb-6 text-justify">
                We value your privacy and are committed to protecting your
                personal data. This Privacy Policy explains how we collect, use,
                and share your information when you use our website. We may
                collect personal information such as your name, email address,
                and browsing activity. This data is used to improve our services
                and provide you with a better experience. We will not share your
                data with third parties without your consent unless required by
                law.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition focus:outline-none shadow-lg"
                onClick={closePrivacyPolicy}
                aria-label="Close Privacy Policy"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            praesentium excepturi temporibus nesciunt aliquam vero
            necessitatibus perferendis sequi corporis reprehenderit quasi sunt
            voluptate animi voluptates, nam quo optio quod assumenda.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {NavigationLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => {
                  if (link.onClick) {
                    link.onClick();
                  } else {
                    navigate(link.path);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="cursor-pointer hover:text-blue-600"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a
                href="tel:+1912345678"
                className="cursor-pointer hover:text-blue-600"
              >
                +1-912345678
              </a>
            </li>
            <li>
              <a 
                href="mailto:MK@gmail.com"
                className="cursor-pointer hover:text-blue-600"
              >
                mikiyaskokeb@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?q=123+Main+Street,+City,+Country"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-blue-600"
              >
                123 Main Street, City, Country
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; 2025 MIKI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
