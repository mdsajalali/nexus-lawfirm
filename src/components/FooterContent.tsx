import { Link } from "react-router-dom";
import Container from "../shared/Container";

const FooterContent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#12212B] py-[21px] font-opensans text-white md:py-[36px] ">
      <Container>
        <div className="items-center justify-between text-center md:flex md:text-start">
          <div className="items-center gap-20 md:flex">
            <Link to="/terms" className="text-[10px] md:text-[12px] md:mr-0 mr-3 hover:underline">
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="py-2 text-[10px] md:py-0 md:text-[12px] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <p className="text-[10px] md:text-[12px]">
              © {currentYear}{" "}
              <Link to="/" className="hover:underline">
                Nexus Law Firm
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;
