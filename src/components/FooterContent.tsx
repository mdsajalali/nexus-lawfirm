import Container from "../shared/Container";

const FooterContent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#12212B] text-white py-[21px] md:py-[36px] font-opensans ">
      <Container>
        <div className="md:flex md:text-start text-center items-center justify-between">
          <div className="md:flex items-center gap-20">
            <h1 className="text-[10px] md:text-[12px]">Terms of Service</h1>
            <h2 className="text-[10px] md:text-[12px] md:py-0 py-2">Privacy Policy</h2>
          </div>
          <div>
            <p className="text-[10px] md:text-[12px]">
              © {currentYear} Nexus Law Firm. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterContent;
