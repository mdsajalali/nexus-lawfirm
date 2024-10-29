import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import {motion} from "framer-motion"

const BlogForm = () => {
  return (
    <div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-5 mt-10 flex items-center gap-3"
      >
        <BsTwitterX
          size={20}
          className="cursor-pointer transition-all hover:text-secondary"
        />
        <BsLinkedin
          size={20}
          className="cursor-pointer transition-all hover:text-secondary"
        />
        <FaFacebook
          size={20}
          className="cursor-pointer transition-all hover:text-secondary"
        />
        <BsInstagram
          size={20}
          className="cursor-pointer transition-all hover:text-secondary"
        />
        <IoIosLink
          size={20}
          className="cursor-pointer transition-all hover:text-secondary"
        />
      </motion.div>
      <div className="    relative max-w-[560px]">
        <h1 className="text-2xl font-semibold text-white md:text-[40px] ">
          Leave a comment
        </h1>
        <form>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-4 flex flex-col gap-[10px] md:flex-row md:gap-4"
          >
            <input
              type="text"
              placeholder="Your name*"
              className="w-full rounded border border-[#8A9399] p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
              required
            />
            <input
              type="email"
              placeholder="Email address*"
              className="mt-1 w-full rounded border border-[#8A9399] p-3 font-opensans text-[12px] text-black outline-none md:mt-0 md:text-[14px]"
              required
            />
          </motion.div>
          <div className="mb-4 flex flex-col">
            <motion.textarea
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              placeholder="Type your message here"
              className="rounded border border-[#8A9399] p-3 font-opensans text-[12px] text-black outline-none md:text-[14px]"
              required
              rows={4}
            ></motion.textarea>
          </div>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            type="submit"
            className="rounded border border-[#8A9399] bg-white px-16 py-[14px] font-opensans text-[14px] font-semibold text-black transition-all hover:bg-primary hover:text-white md:px-7 md:text-[18px]"
          >
            Comment
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
