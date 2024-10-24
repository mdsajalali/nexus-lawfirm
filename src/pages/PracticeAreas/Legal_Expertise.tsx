import HeroSidebar from "../../components/HeroSidebar";
import business_law from "/images/practice-area/business_law.svg";
import criminal_law from "/images/practice-area/criminal_law.svg";
import employment_law from "/images/practice-area/employment_law.svg";
import estate_planning_law from "/images/practice-area/estate_planning_law.svg";
import family_law from "/images/practice-area/family_law.svg";
import immigration_law from "/images/practice-area/immigration_law.svg";
import personal_injury from "/images/practice-area/personal_injury.svg";
import real_estate_law from "/images/practice-area/real_estate_law.svg";
import Container from "../../shared/Container";
const Legal_Expertise = () => {
  return (
    <Container>
      {/* Sidebar icons */}
      <div className="xl:block hidden">
        <HeroSidebar />
      </div>
      <div className="py-10 md:py-[100px]">
        <div className="text-center max-w-[804px] mx-auto">
          <h1 className="text-2xl md:text-[40px] font-semibold">
            Our Legal Expertise
          </h1>
          <p className="text-[16px] md:text-[20px] leading-[30px] font-opensans my-5">
            Explore the diverse areas of law in which we provide dedicated,
            expert representation. We offer personalized solutions for each of
            our clients' unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6  mt-10">
          {legalExpertisData?.map((data) => (
            <div
              key={data.id}
              className="bg-white max-w-[424px] rounded-md  text-center hover:bg-primary hover:text-white transition-all hover:scale-95  border border-[#D0D4D6] pt-10 pb-5 px-5 duration-300  font-opensans"
            >
              <img
                src={data?.img}
                alt="img"
                className="size-10 md:size-[56px] mx-auto"
              />
              <h1 className="pt-3 text-[20px] md:text-2xl font-semibold">
                {data?.title}
              </h1>
              <p className="py-4 md:py-7 text-[14px] md:text-[16px] leading-5 md:leading-[24px]">
                {data?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Legal_Expertise;

const legalExpertisData = [
  {
    id: 1,
    img: criminal_law,
    title: "Criminal Law",
    desc: "Protecting your rights with a strong, strategic defense in criminal matters. Guiding through the process.",
  },
  {
    id: 2,
    img: family_law,
    title: "Family Law",
    desc: "Providing sensitive legal support for family-related issues, including custody, divorce and adoption.",
  },
  {
    id: 3,
    img: business_law,
    title: "Business Law ",
    desc: "Offering strategic advice and representation for businesses in all stages, from startup to litigation.",
  },
  {
    id: 4,
    img: estate_planning_law,
    title: "Estate Planning ",
    desc: "Safeguard your future with customized wills and trusts for comprehensive estate management.",
  },
  {
    id: 5,
    img: immigration_law,
    title: "Immigration Law",
    desc: "Navigating the complexities of immigration with expertise and compassionate guidance.",
  },
  {
    id: 6,
    img: personal_injury,
    title: "Personal Injury",
    desc: "Advocating for your rights and seeking fair compensation for your injuries.",
  },
  {
    id: 7,
    img: employment_law,
    title: "Employment Law",
    desc: "Protecting employees and employers with advice on workplace disputes and legal matters.",
  },
  {
    id: 8,
    img: real_estate_law,
    title: "Real Estate Law",
    desc: "Ensuring seamless and secure transactions in property buying, selling and development.",
  },
];
