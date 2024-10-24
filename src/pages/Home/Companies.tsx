import company_one from "/images/companies/company_one.png";
import company_two from "/images/companies/company_two.png";
import company_three from "/images/companies/company_three.png";
import company_four from "/images/companies/company_four.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Container from "../../shared/Container";

const companies = [
  { src: company_one, alt: "Company One" },
  { src: company_two, alt: "Company Two" },
  { src: company_three, alt: "Company Three" },
  { src: company_four, alt: "Company Four" },
  { src: company_two, alt: "Company Two" },
  { src: company_three, alt: "Company Three" },
];

const Companies = () => {
  return (
    <Container>
      <div className="py-7">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          speed={400}
          autoplay={{ delay: 1800 }}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {companies.map((item) => (
            <SwiperSlide
              className="flex justify-center items-center "
              key={item.alt}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-[110px] md:w-[201px] h-5 md:h-[46px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Companies;
