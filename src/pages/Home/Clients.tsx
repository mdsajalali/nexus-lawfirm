import client_banner from "../../images/clients/client_bg.png";
import client_one from "../../images/clients/client_one.png";
import client_two from "../../images/clients/client_two.png";
import client_three from "../../images/clients/client_three.png";
import quote_icon from "../../images/clients/quote_icon.svg";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoStar } from "react-icons/io5";

const Clients = () => {
  return (
    <div className="relative">
      <img
        src={client_banner}
        alt="Hero Banner"
        className="w-full lg:h-[650px] h-[460px] object-cover"
      />
      <div className="absolute right-0 py-10 lg:py-[100px] top-0 z-[9999] w-full text-white">
        <h1 className="md:text-2xl text-[20px] lg:text-[40px] font-semibold text-center">
          What Our Clients Say
        </h1>
        <section className="md:py-[60px] py-10 xl:px-0   px-4">
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
                  className="w-full h-[290px] text-black bg-white rounded-md  px-6 py-10"
                  key={client.id}
                >
                  <div className="flex items-center gap-1">
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                    <IoStar className="text-secondary" />
                  </div>
                  <h3 className="lg:pt-[36px] py-8 lg:pb-[46px] text-[16px] font-opensans">
                    {client.desc}
                  </h3>

                  <div className="flex items-center justify-between relative">
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
                      className="absolute w-16 md:w-20 md:h-[62px] md:-bottom-[27px] -bottom-[17px] right-0"
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
