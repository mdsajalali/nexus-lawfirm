import SharedNavbar from "../../shared/SharedNavbar";
import about_hero from "../../images/about/about_hero.png";

const About = () => {
  return (
    <>
      <SharedNavbar banner={about_hero} title="About Us" bread_text="about" bread_link="about" />
    </>
  );
};

export default About;
