import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/contact_banner.png";
import ContactInfo from "../../components/ContactInfo";
import ScheduleConsultation from "../../shared/ScheduleConsultation";
import SocialContact from "../../components/SocialContact";

const Contact = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Contact Us"
        bread_text="Contact"
        bread_link="contact"
      />
      <ContactInfo />
      <SocialContact />
      <ScheduleConsultation />
    </>
  );
};

export default Contact;
