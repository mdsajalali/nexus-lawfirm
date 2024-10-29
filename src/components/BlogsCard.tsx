import { Link } from "react-router-dom";
import {motion} from "framer-motion"

interface Blog {
  img: string;
  category: string;
  title: string;
  desc: string;
  user: string;
  user_name: string;
  date: string;
  id: string;
}

interface BlogsCardProps {
  blog: Blog;
  idx: number
}

const BlogsCard = ({ blog, idx }: BlogsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="rounded-lg border"
    >
      <Link to={`/blog/${blog.id}`}>
        <img src={blog.img} alt="Blog" className="h-auto w-full" />
      </Link>
      <h3 className="px-3 pb-2 pt-4 text-sm md:text-base">{blog.category}</h3>
      <Link to={`/blog/${blog.id}`}>
        <h1 className="cursor-pointer px-3 text-lg font-semibold transition-all duration-300 hover:text-secondary md:text-xl">
          {blog.title}
        </h1>
      </Link>
      <Link to={`/blog/${blog.id}`}>
        <p className="line-clamp-2 px-3 py-2 text-base leading-6">
          {blog.desc}
        </p>
      </Link>
      <div className="flex items-center gap-2 px-3 pb-4 pt-2">
        <img
          src={blog.user}
          alt="User"
          className="h-6 w-6 rounded-full object-cover"
        />

        <div className="text-xs md:text-sm">
          <Link to={`/blog/${blog.id}`}>
            <span>{blog.user_name}</span>
          </Link>
          / <span>{blog.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogsCard;
