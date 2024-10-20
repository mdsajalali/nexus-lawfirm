import client_banner from "../images/client_banner.png";
import Container from "../shared/Container";

import user from "../images/client-satisfaction/user.svg";
import multiple_user from "../images/client-satisfaction/multiple_user.svg";
import book from "../images/client-satisfaction/book.svg";
import verify from "../images/client-satisfaction/verify.svg";
const ClientSatisfactionRate = () => {
  return (
    // <div className="relative">
    //   <img
    //     src={client_banner}
    //     alt="Client Banner"
    //     className="w-full h-[307px] md:h-[432px]  object-cover"
    //   />
    <div
      className="relative w-full h-[307px] md:h-[432px] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${client_banner})` }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full   text-white">
        <Container>
          <div className="grid gap-7 md:gap-[137px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
            <div>
              <img
                className="md:w-[41px] w-[30px] h-[31px] md:h-[42px] mx-auto"
                src={verify}
                alt="verify"
              />
              <h1 className="text-[32px] md:text-[48px]  font-bold">25</h1>
              <p className="text-[13px] md:text-[16px] font-opensans">
                Years of Legal Expertise
              </p>
            </div>
            <div>
              <img
                className="md:w-[41px] w-[30px] h-[31px] md:h-[42px] mx-auto"
                src={multiple_user}
                alt="multiple user"
              />
              <h1 className="text-[32px] md:text-[48px]  font-bold">95%</h1>
              <p className="text-[13px] md:text-[16px] font-opensans">
                Client Satisfaction Rate
              </p>
            </div>
            <div>
              <img
                className="md:w-[41px] w-[30px] h-[31px] md:h-[42px] mx-auto"
                src={book}
                alt="book"
              />
              <h1 className="text-[32px] md:text-[48px]  font-bold">5000+</h1>
              <p className="text-[13px] md:text-[16px] font-opensans">
                Cases Successfully Resolved
              </p>
            </div>
            <div>
              <img
                className="md:w-[41px] w-[30px] h-[31px] md:h-[42px] mx-auto"
                src={user}
                alt="user"
              />
              <h1 className="text-[32px] md:text-[48px]  font-bold">20+</h1>
              <p className="text-[13px] md:text-[16px] font-opensans">
                Professional Attorneys
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClientSatisfactionRate;
