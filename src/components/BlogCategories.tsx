import { MdOutlineNavigateNext } from "react-icons/md";

const BlogCategories = () => {
  return (
    <div>
      <h1 className=" font-semibold text-2xl">Categories</h1>
      <div className="pt-5">
        <h1 className="flex items-center  text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            All
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Criminal Law
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Family Law
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Business Law
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Estate Planning
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Immigration Law
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Personal Injury
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]  text-[14px] cursor-pointer ">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Employment Law
          </span>
        </h1>
        <h1 className="flex items-center  py-[3px]   text-[14px] cursor-pointer ">
          <MdOutlineNavigateNext size={22} className="text-secondary" />
          <span className=" hover:text-secondary transition-all duration-300">
            Real Estate Law
          </span>
        </h1>
      </div>
    </div>
  );
};

export default BlogCategories;
