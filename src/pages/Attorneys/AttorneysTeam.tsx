import AttorneyCard from "../../components/AttorneyCard";
import HeroSidebar from "../../components/HeroSidebar";
import Container from "../../shared/Container";
import attorney_one from "/images/our-teams/attorney_one.png";
import attorney_two from "/images/our-teams/attorney_two.png";
import attorney_three from "/images/our-teams/attorney_three.png";
import attorney_four from "/images/our-teams/attorney_four.png";
import attorney_five from "/images/our-teams/attorney_five.png";
import attorney_six from "/images/our-teams/attorney_six.png";
import attorney_seven from "/images/our-teams/attorney_seven.png";
import attorney_eight from "/images/our-teams/attorney_eight.png";
import attorney_nine from "/images/our-teams/attorney_nine.png";
import attorney_ten from "/images/our-teams/attorney_ten.png";
import attorney_eleven from "/images/our-teams/attorney_eleven.png";
import attorney_twelve from "/images/our-teams/attorney_twelve.png";

const AttorneysTeam = () => {
  return (
    <Container>
      {/* Sidebar icons */}
      <div className="xl:block hidden">
        <HeroSidebar />
      </div>
      <div className="py-10 md:py-20">
        <div className="text-center max-w-[804px] mx-auto">
          <h1 className="text-2xl md:text-[40px] font-semibold">
            Meet Our Legal Experts
          </h1>
          <p className="text-[16px] md:text-[20px] leading-5 md:leading-[30px] font-opensans my-3 md:my-5">
            Our team of highly skilled attorneys is dedicated to providing
            exceptional legal services across various practice areas. Get to
            know the professionals who will be handling your case.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 pt-4 md:pt-8 ">
          {attorneys?.map((attorney) => (
            <AttorneyCard key={attorney.id} {...attorney} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AttorneysTeam;

const attorneys = [
  {
    id: 1,
    name: "John Doe",
    title: "Criminal Law Attorney",
    image: attorney_one,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Family Law Attorney",
    image: attorney_two,
  },
  {
    id: 3,
    name: "Robert Brown",
    title: "Business Law Specialist",
    image: attorney_three,
  },
  {
    id: 4,
    name: "Emily Johnson",
    title: "Estate Planning Attorney",
    image: attorney_four,
  },
  {
    id: 5,
    name: "Laura Green",
    title: "Juvenile Defense Attorney",
    image: attorney_five,
  },
  {
    id: 6,
    name: "Christopher Lee",
    title: "Business Law Attorney",
    image: attorney_six,
  },
  {
    id: 7,
    name: "Samantha Harris",
    title: "Employment Law Specialist",
    image: attorney_seven,
  },
  {
    id: 8,
    name: "James Clark",
    title: "Medical Malpractice Attorney",
    image: attorney_eight,
  },
  {
    id: 9,
    name: "Olivia Martinez",
    title: "Estate Planning Attorney",
    image: attorney_nine,
  },
  {
    id: 10,
    name: "Daniel Thompson",
    title: "Real Estate Law Attorney",
    image: attorney_ten,
  },
  {
    id: 11,
    name: "Isabella Robinson",
    title: "Immigration Law Specialist",
    image: attorney_eleven,
  },
  {
    id: 12,
    name: "Matthew Wright",
    title: "Criminal Defense Attorney",
    image: attorney_twelve,
  },
];
