import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogHeroContent = [
  {
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop",
    title: "Stay Updated with the Latest Insights",
    description:
      "Explore expert opinions, industry trends, and thought-provoking articles from our team.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36fd?q=80&w=2070&auto=format&fit=crop",
    title: "Discover New Ideas & Innovations",
    description:
      "Dive deep into our knowledge base and enrich your understanding with our well-researched blogs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587613755643-89c1636df571?q=80&w=2070&auto=format&fit=crop",
    title: "Expand Your Horizons with Expert Content",
    description:
      "Our writers bring you the latest in technology, business, and sustainability.",
  },
];

const BlogHeroSection = ({ onSearch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { image, title, description } = blogHeroContent[currentIndex];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogHeroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + blogHeroContent.length) % blogHeroContent.length
    );
  };

  return (
    <div className="relative shadow-2xl w-full h-[500px] md:h-[600px] flex items-center justify-center text-white overflow-hidden rounded-bl-[30%] md:rounded-bl-[15%] rounded-tr-[30%] md:rounded-tr-[15%]">
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
        className="hidden md:flex absolute left-6 md:left-16 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-6 md:right-16 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
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

        {/* Search Bar */}
        <motion.div
          className="mt-6 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for articles..."
            className="px-4 py-3 text-white rounded-l-md w-80 border border-gray-300"
          />
          <button
            onClick={() => onSearch(searchTerm)}
            className="px-5 py-3 bg-blue-600 rounded-r-md text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogHeroSection;
