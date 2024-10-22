import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/contact_banner.png";
import ContactInfo from "../../components/ContactInfo";
import ScheduleConsultation from "../ScheduleConsultation";

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
      <ScheduleConsultation />
    </>
  );
};

export default Contact;
