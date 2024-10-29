import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
interface BlogProps {
  img: string;
  title: string;
  date: string;
  id: string;
}

interface RecentBlogsProps {
  blog: BlogProps;
}
const RecentBlogs = ({ blog }: RecentBlogsProps) => {
  return (
    <div>
      <div key={blog.id} className="flex items-center gap-6 pt-5 ">
        <Link to={`/blog/${blog.id}`}>
          <img
            src={blog.img}
            alt="img"
            className="object-content h-[88px] w-[150px]"
          />
        </Link>
        <div>
          <Link to={`/blog/${blog.id}`}>
            <h1 className="cursor-pointer text-[16px] font-semibold transition-all duration-300 hover:text-secondary">
              {blog.title}
            </h1>
          </Link>
          <div className="flex items-center gap-1 pt-3 text-[12px]">
            <IoMdTime size={15} className="text-secondary" />
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
