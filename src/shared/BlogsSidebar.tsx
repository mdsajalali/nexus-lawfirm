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
      <BlogsSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
    </>
  );
};

export default BlogsSidebar;
