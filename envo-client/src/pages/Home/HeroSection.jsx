import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroContent = [
  {
    image:
      "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop",
    title: "Innovating a Sustainable Future",
    description:
      "Creating eco-friendly solutions for wastewater management and sustainable infrastructure.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop",
    title: "Revolutionizing Engineering & Environment",
    description:
      "Leading the way in green industry innovations and environmental sustainability.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop",
    title: "Committed to Green Energy Solutions",
    description:
      "Advancing renewable energy and resource efficiency for a cleaner world.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image, title, description } = heroContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  return (
    <div className="relative shadow-xl w-full h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden rounded-b-[20%] md:rounded-b-[15%]">
      {/* Background Image with Overlay */}
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60"
        style={{ backgroundImage: `url(${image})` }}
      ></motion.div>

      {/* Left Arrow Button */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Text Content with Transitions */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/assets/Envocare_Company_Profile.pdf"
            download="Envocare_Profile.pdf"
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            DOWNLOAD PROFILE
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
