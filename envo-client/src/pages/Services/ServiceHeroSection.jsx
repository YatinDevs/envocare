import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const serviceHeroContent = [
  {
    image:
      "https://images.unsplash.com/photo-1579444815308-5279fbb0a2fc?q=80&w=2070&auto=format&fit=crop",
    title: "Engineering Excellence in Every Project",
    description:
      "We provide world-class engineering solutions for sustainable infrastructure and development.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528312857526-24d53b75bfdd?q=80&w=2070&auto=format&fit=crop",
    title: "Innovative Environmental Services",
    description:
      "Revolutionizing environmental consultancy with cutting-edge solutions for a greener planet.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514382728316-420220a5d96b?q=80&w=2070&auto=format&fit=crop",
    title: "Sustainable Water & Energy Solutions",
    description:
      "Offering advanced water treatment and renewable energy strategies for a better tomorrow.",
  },
];

const ServiceHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image, title, description } = serviceHeroContent[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceHeroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + serviceHeroContent.length) % serviceHeroContent.length
    );
  };

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden rounded-bl-[40%] md:rounded-bl-[20%] rounded-tr-[40%] md:rounded-tr-[20%]">
      {/* Background Image with Overlay */}
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: `url(${image})` }}
      ></motion.div>

      {/* Left Arrow Button */}
      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 md:left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Text Content with Transitions */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200"
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
            href="/assets/Envocare_Service_Brochure.pdf"
            download="Envocare_Service_Brochure.pdf"
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            DOWNLOAD SERVICE BROCHURE
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceHeroSection;
