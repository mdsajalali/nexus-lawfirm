import SharedNavbar from "../../shared/SharedNavbar";
import banner from "/images/blogs/blogs_banner.png";
import BlogsCard from "../../components/BlogsCard";
import Container from "../../shared/Container";
import BlogsPagination from "../../components/BlogsPagination";
import ScheduleConsultation from "../../shared/ScheduleConsultation";
import HeroSidebar from "../../components/HeroSidebar";
import useBlogs from "../../hooks/useBlogs";
import useBlogStore from "../../store/BlogsStore";
import BlogsSidebar from "../../shared/BlogsSidebar";
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
  const { blogs } = useBlogs();
  const {
    searchQuery,
    selectedCategory,
    activePage,
    setActivePage,
    blogsPerPage,
  } = useBlogStore();

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
  const { setSearchQuery } = useBlogStore();

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
        <div className="grid grid-cols-1 gap-6 py-10 font-opensans lg:grid-cols-12 lg:py-[100px]">
          <div className="col-span-1 lg:col-span-8 xl:col-span-9">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 className="text-2xl font-semibold md:text-[40px]">
                Our Blogs
              </h1>
              {/* Blog Search */}
              <div className="block lg:hidden">
                <BlogsSearch
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 py-[50px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
            <BlogsSidebar />
          </div>
        </div>
      </Container>
      <ScheduleConsultation />
    </>
  );
};

export default Blogs;
