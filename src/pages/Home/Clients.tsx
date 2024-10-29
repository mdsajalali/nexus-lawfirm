import client_banner from "/images/clients/client_bg.png";
import client_one from "/images/clients/client_one.png";
import client_two from "/images/clients/client_two.png";
import client_three from "/images/clients/client_three.png";
import quote_icon from "/images/clients/quote_icon.svg";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <div className="relative">
      <img
        src={client_banner}
        alt="Hero Banner"
        className="h-[460px] w-full object-cover lg:h-[650px]"
      />
      <div className="absolute right-0 top-0 w-full py-10 text-white lg:py-[100px]">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[20px] font-semibold md:text-2xl lg:text-[40px]"
        >
          What Our Clients Say
        </motion.h1>
        <section className="px-4 py-10 md:py-[60px]   xl:px-0">
          <div>
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              speed={400}
              autoplay={{ delay: 1500 }}
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
                  slidesPerView: 3,
                },
              }}
            >
              {clients_data.map((client) => (
                <SwiperSlide
                  className="h-[290px] w-full rounded-md bg-white px-6  py-10 text-black"
                  key={client.id}
                >
                  <div className="flex items-center gap-1">
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                  </div>
                  <h3 className="py-8 font-opensans text-[16px] lg:pb-[46px] lg:pt-[36px]">
                    {client.desc}
                  </h3>

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={client.img}
                        alt="client"
                        className="size-[56px] object-cover"
                      />
                      <div>
                        <h1 className="font-opensans text-[16px] font-semibold">
                          {client.name}
                        </h1>
                        <p className="font-opensans text-[16px]">
                          {client.location}
                        </p>
                      </div>
                    </div>
                    <img
                      src={quote_icon}
                      alt="quote"
                      className="absolute -bottom-[17px] right-0 w-16 md:-bottom-[27px] md:h-[62px] md:w-20"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;

const clients_data = [
  {
    id: 1,
    desc: "“The team was incredibly supportive and professional throughout my case. Their expertise made all the difference.”",
    img: client_one,
    name: "Sarah Thompson",
    location: "New York",
  },
  {
    id: 2,
    desc: "“I couldn’t have asked for better representation. They provided clear guidance and worked hard for a successful outcome.”",
    img: client_two,
    name: "Michael Johnson",
    location: "Los Angeles",
  },
  {
    id: 3,
    desc: "“The team at Nexus Law Firm handled my case with care and professionalism. I’m grateful for their support and worked hard for a successful outcome.”",
    img: client_three,
    name: "Emily Davis",
    location: "Chicago",
  },
  {
    id: 4,
    desc: "“I couldn’t have asked for better representation. They provided clear guidance and worked hard for a successful outcome.”",
    img: client_two,
    name: "Michael Johnson",
    location: "Los Angeles",
  },
];
