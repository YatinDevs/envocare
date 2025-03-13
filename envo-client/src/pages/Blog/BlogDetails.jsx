import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "antd";
import {
  CheckCircleOutlined,
  ExperimentOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const blogs = [
  {
    id: 1,
    title:
      "The Future of Sustainable Urban Infrastructure: Trends & Innovations",
    content: {
      introduction: `Urbanization is accelerating at an unprecedented rate, with more than 68% of the global population expected to live in cities by 2050. This rapid growth presents numerous challenges, including resource scarcity, pollution, waste management, and transportation issues. To address these challenges, sustainable urban infrastructure is emerging as the key to building environmentally friendly, resilient, and efficient cities.`,
      sections: [
        {
          heading: "What is Sustainable Urban Infrastructure?",
          text: "Sustainable urban infrastructure refers to environmentally responsible and resource-efficient urban planning that ensures efficient use of energy and resources, reduction in carbon footprint, minimized waste generation and pollution, and resilient urban development for climate change adaptation.",
        },
        {
          heading: "The Importance of Sustainable Infrastructure in Cities",
          text: "Environmental Benefits: Reduces pollution, conserves resources, and enhances biodiversity. Economic Growth: Increases property value, creates green jobs, and reduces long-term costs. Improved Quality of Life: Provides better public spaces, cleaner air, and improved urban mobility. Climate Resilience: Helps cities withstand extreme weather conditions and natural disasters.",
        },
        {
          heading: "Key Trends Shaping the Future of Urban Infrastructure",
          items: [
            "Smart Cities & IoT Integration",
            "Green Building & Sustainable Construction",
            "Renewable Energy Integration",
            "Water Conservation & Smart Water Management",
            "Waste Management & Circular Economy",
            "Sustainable Transportation & Mobility Solutions",
          ],
        },
        {
          heading: "Innovations in Urban Infrastructure Development",
          text: "3D Printing in Construction, Biodegradable Building Materials, and Self-Healing Roads are some cutting-edge innovations reshaping how cities are built and maintained.",
        },
        {
          heading:
            "Challenges in Implementing Sustainable Urban Infrastructure",
          items: [
            "High Initial Investment Costs",
            "Lack of Government Policies & Regulations",
            "Limited Public Awareness & Adoption",
            "Technological & Implementation Barriers",
          ],
        },
        {
          heading: "Case Studies of Successful Sustainable Urban Projects",
          items: [
            "Singapore’s Smart Nation Project",
            "Copenhagen’s Green City Plan",
            "Curitiba, Brazil’s Sustainable Urban Planning",
          ],
        },
        {
          heading: "Future Outlook: What Lies Ahead?",
          items: [
            "AI-Powered Smart City Technologies",
            "100% Renewable Energy-Powered Cities",
            "Self-Sustaining & Regenerative Urban Spaces",
            "Circular Economy & Waste-Free Societies",
          ],
        },
        {
          heading: "Conclusion",
          text: "Sustainable urban infrastructure is no longer an option but a necessity. Investing in green technology, smart systems, and renewable energy will transform cities into thriving, eco-friendly hubs.",
        },
      ],
    },
    image:
      "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 2,
    title:
      "How to Achieve Zero Liquid Discharge (ZLD) in Industrial Wastewater Treatment",
    content: "Detailed article on ZLD implementation...",
    image: "https://source.unsplash.com/featured/?water,treatment",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <ContentWrapper>
      <motion.div
        className="p-6 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-700">{blog.content.introduction}</p>
        {blog.content.sections.map((section, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              title={
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
              }
              bordered={false}
              className="shadow-md"
            >
              {section.text && <p className="text-gray-700">{section.text}</p>}
              {section.items && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-700 flex items-center space-x-2"
                    >
                      <CheckCircleOutlined className="text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </ContentWrapper>
  );
};

export default BlogDetails;
