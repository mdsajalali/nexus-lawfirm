import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blogs/blogs_banner.png";
import { useEffect, useState } from "react";
import BlogsCard from "../../components/BlogsCard";
import Container from "../../shared/Container";
import BlogsPagination from "../../components/BlogsPagination";
import RecentBlogs from "../../components/RecentBlogs";
import { CiSearch } from "react-icons/ci";
import BlogCategories from "../../components/BlogCategories";
import ScheduleConsultation from "../ScheduleConsultation";

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
          <div className="col-span-9">
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
          <div className="col-span-3">
            <div className="border flex items-center justify-between rounded-md px-4 py-[10px] bg-white">
              <input
                type="text"
                placeholder="Search"
                className="text-[#D0D4D6] text-[14px] outline-none w-full"
              />
              <CiSearch size={20} className="text-[#3D4C56] cursor-pointer" />
            </div>
            {/* Recent Blogs */}
            <RecentBlogs />
            {/* Blog Categories */}
            <BlogCategories />
          </div>
        </div>
      </Container>
      {/* Schedule Consultation */}
      <ScheduleConsultation />
    </>
  );
};

export default Blogs;
