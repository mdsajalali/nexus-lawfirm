import recent_blog_one from "../images/blogs/recent-blogs/recent_blog_one.png";
import recent_blog_two from "../images/blogs/recent-blogs/recent_blog_two.png";
import recent_blog_three from "../images/blogs/recent-blogs/recent_blog_three.png";
import { IoMdTime } from "react-icons/io";
const RecentBlogs = () => {
  return (
    <div className="pt-10 pb-[100px]">
      <h1 className="text-2xl font-semibold  ">Recent Blogs</h1>
      <div>
        {recentBlogsData.map((blog) => (
          <div key={blog.id} className="flex pt-5 items-center gap-6 ">
            <img
              src={blog.img}
              alt="img"
              className="size-[88px] object-cover"
            />
            <div>
              <h1 className="text-[16px] hover:text-secondary transition-all duration-300 cursor-pointer font-semibold">
                {blog.title}
              </h1>
              <div className="flex items-center gap-1 pt-3 text-[12px]">
                <IoMdTime size={15} className="text-secondary" />{" "}
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;

const recentBlogsData = [
  {
    id: 1,
    img: recent_blog_one,
    title: "What You Need to Know About Child Custody",
    date: "11 July, 2024",
  },
  {
    id: 2,
    img: recent_blog_two,
    title: "Protect Your Business with Strong Contracts",
    date: "06 July, 2024",
  },
  {
    id: 3,
    img: recent_blog_three,
    title: "Understanding Rights After a Personal Injury",
    date: "01 July, 2024",
  },
];
