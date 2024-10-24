import SharedNavbar from "../../shared/SharedNavbar";
import banner from "/images/privacy_policy_banner.png";
import PrivacyPolicyCard from "../../components/PrivacyPolicyCard";

const PrivacyPolicy = () => {
  return (
    <>
      <SharedNavbar
        banner={banner}
        title="Privacy Policy"
        bread_text="Privacy Policy"
        bread_link="privacy-policy"
      />
      <PrivacyPolicyCard />
    </>
  );
};

export default PrivacyPolicy;
