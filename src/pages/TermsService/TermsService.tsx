import SharedNavbar from "../../shared/SharedNavbar";
import banner from "../../images/terms_service_banner.png";
import TermsServiceCard from "../../components/TermsServiceCard";

const TermsService = () => {
  return (
    <div>
      <SharedNavbar
        banner={banner}
        title="Terms Of Service"
        bread_text="Terms Of Service"
        bread_link="terms-service"
      />
      <TermsServiceCard />
    </div>
  );
};

export default TermsService;
