import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

const BlogForm = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5 mt-10">
        <BsTwitterX
          size={20}
          className="hover:text-secondary transition-all cursor-pointer"
        />
        <BsLinkedin
          size={20}
          className="hover:text-secondary transition-all cursor-pointer"
        />
        <FaFacebook
          size={20}
          className="hover:text-secondary transition-all cursor-pointer"
        />
        <BsInstagram
          size={20}
          className="hover:text-secondary transition-all cursor-pointer"
        />
        <IoIosLink
          size={20}
          className="hover:text-secondary transition-all cursor-pointer"
        />
      </div>
      <div className="    max-w-[560px] relative">
        <h1 className="text-2xl text-white md:text-[40px] font-semibold ">
          Leave a comment
        </h1>
        <form>
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name*"
              className="border border-[#8A9399] rounded p-3 w-full font-opensans outline-none text-[12px] md:text-[14px] text-black"
              required
            />
            <input
              type="email"
              placeholder="Email address*"
              className="border border-[#8A9399] rounded p-3 w-full font-opensans outline-none text-[12px] mt-1 md:mt-0 md:text-[14px] text-black"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              placeholder="Type your message here"
              className="border border-[#8A9399] rounded p-3 font-opensans outline-none text-[12px] md:text-[14px] text-black"
              required
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white border-[#8A9399] rounded border text-black transition-all hover:bg-primary py-[14px] px-16 md:px-7 hover:text-white text-[14px] md:text-[18px] font-semibold font-opensans"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
