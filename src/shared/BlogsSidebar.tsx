import BlogCategories from "../components/BlogCategories";
import BlogsSearch from "../components/BlogsSearch";
import RecentBlogs from "../components/RecentBlogs";
import useBlogs from "../hooks/useBlogs";
import useBlogStore from "../store/BlogsStore";

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

const BlogsSidebar = () => {
  const { recentBlogs } = useBlogs();
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } =
    useBlogStore();
  return (
    <>
      {/* Blog Search */}
      <div className="hidden lg:block">
        <BlogsSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      {/* Recent Blogs */}
      <div className="pb-[100px] pt-10">
        <h1 className="text-2xl font-semibold">Recent Blogs</h1>
        {recentBlogs.map((blog: BlogProps) => (
          <RecentBlogs key={blog.id} blog={blog} />
        ))}
      </div>
      <BlogCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
};

export default BlogsSidebar;
