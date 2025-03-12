import { useState, useMemo } from "react";
import { Card, Row, Col, Pagination, Empty } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogList = ({ searchQuery }) => {
  const blogs = [
    {
      id: 1,
      title:
        "The Future of Sustainable Urban Infrastructure: Trends & Innovations",
      description: "Exploring the latest trends in urban sustainability...",
      image:
        "https://plus.unsplash.com/premium_photo-1671808063413-8ba034318f46?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 2,
      title:
        "How to Achieve Zero Liquid Discharge (ZLD) in Industrial Wastewater Treatment",
      description: "A deep dive into ZLD techniques and benefits...",
      image:
        "https://plus.unsplash.com/premium_photo-1671808063413-8ba034318f46?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "The Role of Rainwater Harvesting in Solving India’s Water Crisis",
      description: "How rainwater harvesting can mitigate water scarcity...",
      image:
        "https://plus.unsplash.com/premium_photo-1671808063413-8ba034318f46?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 4,
      title:
        "Why Green Building Certification Matters: GRIHA vs. IGBC Explained",
      description:
        "Understanding the importance of green building standards...",
      image:
        "https://plus.unsplash.com/premium_photo-1671808063413-8ba034318f46?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 5,
      title:
        "Understanding Environmental Impact Assessment (EIA) & How It Affects Your Project",
      description: "Everything you need to know about EIA regulations...",
      image:
        "https://plus.unsplash.com/premium_photo-1671808063413-8ba034318f46?q=80&w=1469&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Top Challenges in Wastewater Management & How to Overcome Them",
      description:
        "Identifying and solving key wastewater management issues...",
      image:
        "https://plus.unsplash.com/premium_photo-1675624629079-e4bc75b079ac?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "How Smart Waste Management Can Reduce Pollution in Cities",
      description: "The role of IoT and AI in modern waste management...",
      image:
        "https://plus.unsplash.com/premium_photo-1679607581922-ba5c2558669b?q=80&w=1315&auto=format&fit=crop",
    },
    {
      id: 8,
      title:
        "The Importance of Fire Safety Audits in Commercial & Industrial Buildings",
      description: "Why fire safety audits are essential for businesses...",
      image:
        "https://plus.unsplash.com/premium_photo-1683133347572-b948b2e85971?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  // Filtering blogs based on search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, blogs]);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6 mt-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        EnvoCare Consulting Pvt. Ltd. - BLOG
      </h1>

      {/* Display message if no blogs match the search */}
      {filteredBlogs.length === 0 ? (
        <div className="flex justify-center">
          <Empty description="No blogs found matching your search." />
        </div>
      ) : (
        <>
          <Row gutter={[24, 24]}>
            {paginatedBlogs.map((blog, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-48 object-cover"
                      />
                    }
                    className="rounded-lg shadow-lg overflow-hidden"
                  >
                    <h2 className="text-lg font-semibold">{blog.title}</h2>
                    <p className="text-gray-600 mb-3">{blog.description}</p>
                    <Link to={`/blog/${blog.id}`} className="text-blue-500">
                      Read More →
                    </Link>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredBlogs.length}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BlogList;
