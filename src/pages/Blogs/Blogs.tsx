import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/blogs/blogs_banner.png"

const Blogs = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Our Blogs"
        bread_text="Blogs"
        bread_link="blogs"
      />
    </>
  );
};

export default Blogs;
