import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blogs/blogs_banner.png";
import { useEffect, useState } from "react";
import BlogsCard from "../../components/BlogsCard";
import Container from "../../shared/Container";
import BlogsPagination from "../../components/BlogsPagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Our Blogs"
        bread_text="Blogs"
        bread_link="blogs"
      />
      <Container>
        <div className="grid grid-cols-12 gap-6 py-20 font-opensans lg:py-[100px]">
          <div className="col-span-8">
            <h1 className="text-2xl font-semibold md:text-[40px]">Our Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 py-[50px]">
              {blogs.length > 0 ? (
                blogs
                  .slice(0, 6)
                  .map((blog, idx) => <BlogsCard key={idx} blog={blog} />)
              ) : (
                <p>No blogs available.</p>
              )}
            </div>
            {/* Blog Pagination */}
            <BlogsPagination />
          </div>
          <div className="col-span-4">
            <h1>Another Content</h1>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
