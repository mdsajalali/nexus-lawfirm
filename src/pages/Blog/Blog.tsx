import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SharedNavbar from "../../shared/SharedNavbar";
import banner from "/images/blog/blog_banner.png";
import ScheduleConsultation from "../../shared/ScheduleConsultation";
import Container from "../../shared/Container";
import HeroSidebar from "../../components/HeroSidebar";
import BlogCard from "../../components/BlogCard";
import BlogsSidebar from "../../shared/BlogsSidebar";

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

const BlogComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/single-blog.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Blog[] = await response.json();

        const filteredBlog = data.find((item) => item.id === Number(id));

        if (filteredBlog) {
          setBlog(filteredBlog);
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Employment Law Rights"
        bread_text="Blogs"
        bread_link="blogs"
      />

      <HeroSidebar />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-20 font-opensans lg:py-[100px]">
          <div className="col-span-1 lg:col-span-8 xl:col-span-9">
            {blog ? (
              <BlogCard blog={blog} />
            ) : (
              <div className="font-opensans text-center py-5">Loading...</div>
            )}
          </div>
          <div className="col-span-1 lg:col-span-4 xl:col-span-3">
            <BlogsSidebar />
          </div>
        </div>
      </Container>
      <ScheduleConsultation />
    </>
  );
};

export default BlogComponent;
