import family_law from "../images/practice-area/family_law.svg";
import criminal_law from "../images/practice-area/criminal_law.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PracticeAreas = () => {
  return (
    <div className="pt-[170px] grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="max-w-[519px] mx-auto">
        <h1 className="text-[40px] font-semibold font-opensans">
          Practice Areas
        </h1>
        <p className="text-[20px] leading-[30px] py-10 font-opensans">
          Our experienced attorneys specialize in a diverse range of legal
          fields, ensuring that no matter your legal needs, you receive expert
          guidance and effective solutions.
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {practiceAreaData?.map((data) => (
            <SwiperSlide
              key={data.id}
              className="bg-primary max-w-[424px] rounded-md h-[380px] text-center text-white py-[55px] px-[73px] font-opensans"
            >
              <img
                src={data?.img}
                alt="img"
                className="w-[56px] h-[56px] object-cover mx-auto"
              />
              <h1 className="pt-3 text-2xl font-semibold">{data?.title}</h1>
              <p className="py-7 font-[16px] leading-[24px]">{data?.desc}</p>
              <div className="flex items-center justify-center">
                <button className="flex text-[18px] hover:text-secondary transition-all items-center gap-2">
                  Read more <FaArrowRightLong size={15} />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PracticeAreas;

const practiceAreaData = [
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
];
