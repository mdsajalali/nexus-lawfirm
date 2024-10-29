import Container from "../../shared/Container";
import experienced_attorneys from "/images/about/choose_us/experienced_attorneys.svg";
import client_focused_service from "/images/about/choose_us/client_focused_service.svg";
import proven_results from "/images/about/choose_us/proven_results.svg";
import book from "/images/about/choose_us/book.svg";

const Choose_Us = () => {
  return (
    <Container>
      <div className="  py-20 md:py-20">
        <div>
          <h1 className="text-center text-2xl font-semibold md:text-[40px]">
            Why clients choose us?
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 md:pt-16 lg:grid-cols-3 xl:grid-cols-4">
          {chooseUsData?.map((data) => (
            <div
              className="mx-auto flex max-w-[312px] flex-col items-center justify-center rounded-md px-[25px] py-14 text-center shadow-md transition-all hover:scale-90 md:py-[63px]"
              key={data?.id}
            >
              <img
                src={data?.img}
                alt="img"
                className="object-content mx-auto size-10  md:size-[64px]"
              />
              <h1 className="py-4 font-opensans text-[20px] font-semibold md:text-2xl">
                {data?.title}
              </h1>
              <p className="font-opensans text-[14px] md:text-[16px]">
                {data?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Choose_Us;

const chooseUsData = [
  {
    id: 1,
    img: experienced_attorneys,
    title: "Experienced Attorneys",
    desc: "Decades of legal expertise to guide your case.",
  },
  {
    id: 2,
    img: client_focused_service,
    title: "Client-Focused Service",
    desc: "We prioritize your needs and keep you informed.",
  },
  {
    id: 3,
    img: proven_results,
    title: "Proven Results",
    desc: "A strong record of successful outcomes for our clients.",
  },
  {
    id: 4,
    img: book,
    title: "Open Communication",
    desc: "Clear communication and honesty throughout the process.",
  },
];
