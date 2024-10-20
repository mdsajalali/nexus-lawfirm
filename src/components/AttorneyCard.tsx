import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

interface TAttorneyCard {
  name: string;
  title: string;
  image: string;
}

const AttorneyCard = ({ name, title, image }: TAttorneyCard) => (
  <div className="relative group">
    <div className="absolute hidden group-hover:block right-2 top-2 transition-opacity duration-300 ease-in-out">
      <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
        <BsTwitterX />
      </div>
      <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center my-2 justify-center">
        <BsLinkedin />
      </div>
      <div className="bg-secondary rounded-full md:w-8 size-6 p-[6px] md:p-0 md:h-8 flex items-center justify-center">
        <FaFacebookF />
      </div>
    </div>
    <img src={image} alt={name} className="rounded-md" />
    <div className="absolute inset-0 pb-4 md:pb-[55px] flex items-end justify-center text-white">
      <div className="text-center">
        <h1 className="text-[13px] md:text-2xl font-semibold font-opensans">
          {name}
        </h1>
        <p className="md:pt-2 pt-1 text-[10px] md:text-[16px] font-semibold font-opensans">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default AttorneyCard;
