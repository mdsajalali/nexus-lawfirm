import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blogs/blogs_banner.png";
import { useState } from "react";
import BlogsCard from "../../components/BlogsCard";
import Container from "../../shared/Container";
import BlogsPagination from "../../components/BlogsPagination";
import RecentBlogs from "../../components/RecentBlogs";
import BlogCategories from "../../components/BlogCategories";
import ScheduleConsultation from "../ScheduleConsultation";
import HeroSidebar from "../../components/HeroSidebar";
import BlogsSearch from "../../components/BlogsSearch";
import useBlogs from "../../hooks/useBlogs";

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
  const { blogs, recentBlogs, isLoading } = useBlogs();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePage, setActivePage] = useState<number>(1);
  const blogsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (isLoading)
    return <div className="text-center my-5 font-opensans">Loading...</div>;

  const filteredBlogs = blogs.filter((blog: BlogProps) => {
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
                currentBlogs.map((blog: BlogProps, idx: number) => (
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
            {/* Recent Blogs */}
            <div className="pt-10 pb-[100px]">
              <h1 className="text-2xl font-semibold">Recent Blogs</h1>
              {recentBlogs.map((blog: BlogProps) => (
                <RecentBlogs key={blog.id} blog={blog} />
              ))}
            </div>

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
