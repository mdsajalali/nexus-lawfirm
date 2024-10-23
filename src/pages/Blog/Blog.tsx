import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blog/blog_banner.png";
import ScheduleConsultation from "../ScheduleConsultation";
import BlogCategories from "../../components/BlogCategories";
import RecentBlogs from "../../components/RecentBlogs";
import { CiSearch } from "react-icons/ci";
import Container from "../../shared/Container";
import HeroSidebar from "../../components/HeroSidebar";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Understanding Employment Law Rights"
        bread_text="Blogs"
        bread_link="blogs"
      />

      {/* Hero Sidebar */}
      <HeroSidebar />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-20 font-opensans lg:py-[100px]">
          <div className="col-span-1 lg:col-span-8 xl:col-span-9">
            {/* Single Blog Show Here */}
            <BlogCard />
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-3">
            <div className="border flex items-center justify-between rounded-md px-4 py-[10px] bg-white">
              <input
                type="text"
                placeholder="Search"
                className="text-[#D0D4D6] text-[14px] outline-none w-full"
              />
              <CiSearch size={20} className="text-[#3D4C56] cursor-pointer" />
            </div>
            {/* Recent Blogs */}
            <RecentBlogs />
            {/* Blog Categories */}
            <BlogCategories />
          </div>
        </div>
      </Container>
      {/* Schedule Consultation */}
      <ScheduleConsultation />
    </>
  );
};

export default Blog;
