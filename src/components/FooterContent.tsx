import Container from "../shared/Container";

const FooterContent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#12212B] py-[21px] font-opensans text-white md:py-[36px] ">
      <Container>
        <div className="items-center justify-between text-center md:flex md:text-start">
          <div className="items-center gap-20 md:flex">
            <h1 className="text-[10px] md:text-[12px]">Terms of Service</h1>
            <h2 className="py-2 text-[10px] md:py-0 md:text-[12px]">
              Privacy Policy
            </h2>
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
