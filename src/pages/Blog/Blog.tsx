import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blog/blog_banner.png";
import ScheduleConsultation from "../../shared/ScheduleConsultation";
import Container from "../../shared/Container";
import HeroSidebar from "../../components/HeroSidebar";
import BlogCard from "../../components/BlogCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlogsSidebar from "../../shared/BlogsSidebar";

interface BlogItem {
  id: number;
}

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch("/blog.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const filteredBlog = id
          ? data.find((item: BlogItem) => item.id === parseInt(id))
          : undefined;

        if (filteredBlog) {
          setBlog(filteredBlog);
        } else {
          console.error("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="font-opensans text-center py-5">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="font-opensans text-center py-5">Blog not found.</div>
    );
  }

  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Understanding Employment Law Rights"
        bread_text="Blogs"
        bread_link="blogs"
      />

      {/* Hero Sidebar */}
      <HeroSidebar />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-20 font-opensans lg:py-[100px]">
          <div className="col-span-1 lg:col-span-8 xl:col-span-9">
            {/* Single Blog Show Here */}
            <BlogCard blog={blog} />
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-3">
            <BlogsSidebar />
          </div>
        </div>
      </Container>
      {/* Schedule Consultation */}
      <ScheduleConsultation />
    </>
  );
};

export default Blog;
