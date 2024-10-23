import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blogs/blogs_banner.png";
import { useEffect, useState } from "react";
import BlogsCard from "../../components/BlogsCard";
import Container from "../../shared/Container";
import BlogsPagination from "../../components/BlogsPagination";
import RecentBlogs from "../../components/RecentBlogs";
import BlogCategories from "../../components/BlogCategories";
import ScheduleConsultation from "../ScheduleConsultation";
import HeroSidebar from "../../components/HeroSidebar";
import BlogsSearch from "../../components/BlogsSearch";

interface BlogProps {
  img: string;
  category: string;
  title: string;
  desc: string;
  user: string;
  user_name: string;
  date: string;
  id: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePage, setActivePage] = useState<number>(1);
  const blogsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastBlog = activePage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Our Blogs"
        bread_text="Blogs"
        bread_link="blogs"
      />
      <HeroSidebar />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-20 font-opensans lg:py-[100px]">
          <div className="col-span-1 lg:col-span-8 xl:col-span-9">
            <h1 className="text-2xl font-semibold md:text-[40px]">Our Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-[50px]">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog, idx) => (
                  <BlogsCard key={idx} blog={blog} />
                ))
              ) : (
                <p className="col-span-full text-center">No blogs available.</p>
              )}
            </div>
            <BlogsPagination
              totalPages={totalPages}
              activePage={activePage}
              onPageChange={setActivePage}
            />
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-3">
            <BlogsSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <RecentBlogs />
            <BlogCategories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
      </Container>
      <ScheduleConsultation />
    </>
  );
};

export default Blogs;