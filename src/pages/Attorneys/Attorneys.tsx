import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/attorneys/attorneys_banner.png";

const Attorneys = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Our Legal Team"
        bread_text="Attorneys"
        bread_link="attorneys"
      />
    </>
  );
};

export default Attorneys;
