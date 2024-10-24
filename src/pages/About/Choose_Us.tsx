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
          <h1 className="text-center text-2xl md:text-[40px] font-semibold">
            Why clients choose us?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 md:pt-16 gap-6">
          {chooseUsData?.map((data) => (
            <div
              className="max-w-[312px] flex flex-col items-center justify-center mx-auto hover:scale-90 transition-all shadow-md rounded-md py-14 md:py-[63px] px-[25px] text-center"
              key={data?.id}
            >
              <img
                src={data?.img}
                alt="img"
                className="object-content size-10 md:size-[64px]  mx-auto"
              />
              <h1 className="py-4 text-[20px] md:text-2xl font-semibold font-opensans">
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
