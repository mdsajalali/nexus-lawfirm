import { Link } from "react-router-dom";

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
}

const BlogsCard = ({ blog }: BlogsCardProps) => {
  return (
    <div className="rounded-lg border">
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
    </div>
  );
};

export default BlogsCard;
