import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "The Future of Sustainable Urban Infrastructure: Trends & Innovations",
    content: "Full content about urban infrastructure trends...",
    image: "https://via.placeholder.com/600",
  },
  {
    id: 2,
    title:
      "How to Achieve Zero Liquid Discharge (ZLD) in Industrial Wastewater Treatment",
    content: "Detailed article on ZLD implementation...",
    image: "https://via.placeholder.com/600",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <ContentWrapper>
      <div className="p-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
        <p className="mt-2 text-gray-700">{blog.content}</p>
      </div>
    </ContentWrapper>
  );
};

export default BlogDetails;
