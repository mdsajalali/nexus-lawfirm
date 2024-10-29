import family_law from "/images/practice-area/family_law.svg";
import business_law from "/images/practice-area/business_law.svg";
import estate_planning_law from "/images/practice-area/estate_planning_law.svg";
import criminal_law from "/images/practice-area/criminal_law.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {motion} from "framer-motion"

const PracticeAreasCard = () => {
  return (
    <div className="grid grid-cols-1 gap-10  px-4 pt-10 md:pt-20 lg:grid-cols-2 xl:px-0">
      <div className="mx-auto max-w-[519px]">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-opensans text-2xl font-semibold md:text-start md:text-[40px]"
        >
          Practice Areas
        </motion.h1>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-3 text-center font-opensans text-[16px] leading-[20px] md:py-10 md:text-start md:text-[20px] md:leading-[30px]"
        >
          Our experienced attorneys specialize in a diverse range of legal
          fields, ensuring that no matter your legal needs, you receive expert
          guidance and effective solutions.
        </motion.p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          pagination={true}
          spaceBetween={24}
          loop={true}
          speed={400}
          autoplay={{ delay: 1500 }}
          slidesPerView={1}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {practiceAreaData?.map((data) => (
            <SwiperSlide
              key={data.id}
              className="max-w-[424px] rounded-md bg-primary p-10 text-center font-opensans   text-white md:h-[380px] md:px-[73px] md:py-[55px]"
            >
              <img
                src={data?.img}
                alt="img"
                className="mx-auto h-[56px] w-[56px] object-cover"
              />
              <h1 className="pt-3 text-2xl font-semibold">{data?.title}</h1>
              <p className="h-40 py-7 font-[16px] leading-[24px] md:h-auto">
                {data?.desc}
              </p>
              <div className="flex items-center justify-center">
                <button className="flex items-center gap-2 text-[18px] transition-all hover:text-secondary">
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

export default PracticeAreasCard;

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
    id: 3,
    img: business_law,
    title: "Business Law",
    desc: "Offering strategic advice and representation for businesses in all stages, from startup to litigation.",
  },
  {
    id: 4,
    img: estate_planning_law,
    title: "Estate Planning",
    desc: "Safeguard your future with customized wills and trusts for comprehensive estate management.",
  },
];
