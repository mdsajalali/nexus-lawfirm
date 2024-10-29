import BlogCategories from "../components/BlogCategories";
import BlogsSearch from "../components/BlogsSearch";
import RecentBlogs from "../components/RecentBlogs";
import useBlogs from "../hooks/useBlogs";
import useBlogStore from "../store/BlogsStore";
import {motion} from "framer-motion"

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
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden lg:block"
      >
        <BlogsSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </motion.div>
      {/* Recent Blogs */}
      <div className="pb-[100px] pt-10">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold"
        >
          Recent Blogs
        </motion.h1>
        {recentBlogs.map((blog: BlogProps, idx: number) => (
          <RecentBlogs key={blog.id} blog={blog} idx={idx} />
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
