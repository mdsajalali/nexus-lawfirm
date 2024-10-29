import { FaRegUser } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import BlogForm from "./BlogForm";
import { motion } from "framer-motion";

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
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={blog.img}
        alt="Blog"
        className=" object-covers  h-[392px] w-full rounded-md"
      />
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 md:justify-start md:gap-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <FaRegUser className="text-secondary" />
          <span className="text-sm">{blog.name}</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <div className="h-3 w-3 rounded-full bg-secondary" />
          <span className="text-sm">{blog.category}</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <MdOutlineAccessTime className="text-secondary" />
          <span className="text-sm">{blog.date}</span>
        </motion.div>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Introduction
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.intro}
        </motion.p>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Wage and Hour Rights
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.wage_rights[0].desc}
        </motion.p>
        <ul className="list-disc pl-5">
          {blog.wage_rights[0].rights.map((right, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.5 }}
              viewport={{ once: true }}
              className="text-sm"
              key={index}
            >
              {right}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Harassment Prevention
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.harassment_prevention}
        </motion.p>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Discrimination Protection
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.discrimination_protection}
        </motion.p>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Workplace Safety
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.workplace_safety}
        </motion.p>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Family and Medical Leave
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.family_medical_leave}
        </motion.p>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          What to Do if Your Rights Are Violated
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.violated[0].desc}
        </motion.p>
        <ul className="list-disc pl-5">
          {blog.violated[0].rights.map((right, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.5 }}
              viewport={{ once: true }}
              className="text-sm"
              key={index}
            >
              {right}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="py-2">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg font-bold"
        >
          Conclusion
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {blog.conclusion}
        </motion.p>
      </div>

      {/* Blog Form */}
      <BlogForm />
    </div>
  );
};

export default BlogCard;
