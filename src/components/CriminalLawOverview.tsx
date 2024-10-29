import Container from "../shared/Container";
import criminal_law_img from "/images/criminal_law_img.png";

const CriminalLawOverview = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 place-items-center gap-5 py-10 font-opensans md:grid-cols-2 md:gap-10 md:py-20 lg:gap-[146px]">
        <div>
          <h1 className="text-2xl font-semibold md:text-[40px]">Overview</h1>
          <div>
            <p className=" py-5 text-[18px] leading-6 md:text-[18px] md:leading-[30px]">
              Criminal law encompasses a range of offenses from minor
              infractions to serious felonies. At Nexus Law Firm, we understand
              that being charged with a crime can be a life-altering experience.
            </p>
            <p className=" py-5 text-[18px] leading-6 md:text-[18px] md:leading-[30px]">
              Our team is dedicated to protecting your rights and ensuring you
              receive a fair trial.
            </p>
            <p className=" py-5 text-[18px] leading-6 md:text-[18px] md:leading-[30px]">
              We are experienced in handling various criminal cases, including
              drug offenses, assault, theft, and more, providing knowledgeable
              defense strategies tailored to each situation.
            </p>
          </div>
        </div>
        <div>
          <img src={criminal_law_img} alt="img" className="object-cover" />
        </div>
      </div>
      <div className="font-opensans">
        <h1 className="text-[20px] font-semibold md:text-[40px]">
          Our Approach
        </h1>
        <p className="pb-20 pt-5 text-[16px] leading-5 md:pb-[100px] md:pt-9 md:text-[18px] md:leading-[30px]">
          Our approach to criminal law is comprehensive and client-focused. We
          begin by conducting a thorough investigation of the circumstances
          surrounding your case. This involves gathering evidence, interviewing
          witnesses, and scrutinizing police reports. We prioritize open
          communication with our clients, keeping you informed about every step
          of the legal process. Our defense strategies are built on a solid
          understanding of the law and a commitment to achieving the best
          possible outcome for you, whether that means negotiating plea deals or
          representing you in court.
        </p>
      </div>
    </Container>
  );
};

export default CriminalLawOverview;
