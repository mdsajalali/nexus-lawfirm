interface Blog {
  img: string;
  category: string;
  title: string;
  desc: string;
  user: string;
  user_name: string;
  date: string;
}

interface BlogsCardProps {
  blog: Blog;
}

const BlogsCard = ({ blog }: BlogsCardProps) => {
  return (
    <div className="border rounded-lg  p-1">
      <img src={blog.img} alt="Blog" className="w-full h-auto" />
      <h3 className="pt-4 pb-2 text-sm md:text-base">{blog.category}</h3>
      <h1 className="text-lg md:text-xl cursor-pointer font-semibold hover:text-secondary duration-300 transition-all">
        {blog.title}
      </h1>
      <p className="py-2 text-base leading-6 line-clamp-2">{blog.desc}</p>
      <div className="flex items-center gap-2 pt-2">
        <img
          src={blog.user}
          alt="User"
          className="w-6 object-cover h-6 rounded-full"
        />
        <div className="text-xs md:text-sm">
          <span>{blog.user_name}</span> / <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
