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
    <div className="border rounded-lg">
      <Link to={`/blog/${blog.id}`}>
        <img src={blog.img} alt="Blog" className="w-full h-auto" />
      </Link>
      <h3 className="pt-4 pb-2 px-3 text-sm md:text-base">{blog.category}</h3>
      <Link to={`/blog/${blog.id}`}>
        <h1 className="text-lg md:text-xl cursor-pointer px-3 font-semibold hover:text-secondary duration-300 transition-all">
          {blog.title}
        </h1>
      </Link>
      <Link to={`/blog/${blog.id}`}>
        <p className="py-2 text-base px-3 leading-6 line-clamp-2">{blog.desc}</p>
      </Link>
      <div className="flex px-3 items-center gap-2 pt-2 pb-4">
        <img
          src={blog.user}
          alt="User"
          className="w-6 object-cover h-6 rounded-full"
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
