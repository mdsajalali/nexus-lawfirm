import { FaRegUser } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import BlogForm from "./BlogForm";

interface WageRights {
  desc: string;
  rights: string[];
}

interface Violated {
  desc: string;
  rights: string[];
}

interface Blog {
  id: number;
  img: string;
  name: string;
  date: string;
  category: string;
  intro: string;
  wage_rights: WageRights[];
  harassment_prevention: string;
  discrimination_protection: string;
  workplace_safety: string;
  family_medical_leave: string;
  violated: Violated[];
  conclusion: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div>
      <img
        src={blog.img}
        alt="Blog"
        className=" object-covers  h-[392px] w-full rounded-md"
      />
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 md:justify-start md:gap-4">
        <div className="flex items-center gap-2">
          <FaRegUser className="text-secondary" />
          <span className="text-sm">{blog.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-secondary" />
          <span className="text-sm">{blog.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineAccessTime className="text-secondary" />
          <span className="text-sm">{blog.date}</span>
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Introduction</h1>
        <p>{blog.intro}</p>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Wage and Hour Rights</h1>
        <p>{blog.wage_rights[0].desc}</p>
        <ul className="list-disc pl-5">
          {blog.wage_rights[0].rights.map((right, index) => (
            <li className="text-sm" key={index}>
              {right}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Harassment Prevention</h1>
        <p>{blog.harassment_prevention}</p>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Discrimination Protection</h1>
        <p>{blog.discrimination_protection}</p>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Workplace Safety</h1>
        <p>{blog.workplace_safety}</p>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Family and Medical Leave</h1>
        <p>{blog.family_medical_leave}</p>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">
          What to Do if Your Rights Are Violated
        </h1>
        <p>{blog.violated[0].desc}</p>
        <ul className="list-disc pl-5">
          {blog.violated[0].rights.map((right, index) => (
            <li className="text-sm" key={index}>
              {right}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2">
        <h1 className="text-lg font-bold">Conclusion</h1>
        <p>{blog.conclusion}</p>
      </div>

      {/* Blog Form */}
      <BlogForm />
    </div>
  );
};

export default BlogCard;
