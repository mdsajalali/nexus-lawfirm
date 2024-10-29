import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface TAttorneyCard {
  name: string;
  title: string;
  image: string;
  id: number;
}

const AttorneyCard = ({ name, title, image, id }: TAttorneyCard) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: id * 0.2 }}
    viewport={{ once: true }}
  >
    <Link to={`/attorneys/${id}`} className="group relative">
      <div className="absolute right-2 top-2 hidden transition-opacity duration-300 ease-in-out group-hover:block">
        <div className="flex size-6 items-center justify-center rounded-full bg-secondary p-[6px] md:h-8 md:w-8 md:p-0">
          <BsTwitterX />
        </div>
        <div className="my-2 flex size-6 items-center justify-center rounded-full bg-secondary p-[6px] md:h-8 md:w-8 md:p-0">
          <BsLinkedin />
        </div>
        <div className="flex size-6 items-center justify-center rounded-full bg-secondary p-[6px] md:h-8 md:w-8 md:p-0">
          <FaFacebookF />
        </div>
      </div>
      <img src={image} alt={name} className="rounded-md" />
      <div className="absolute inset-0 flex items-end justify-center pb-4 text-white md:pb-[55px]">
        <div className="text-center">
          <h1 className="font-opensans text-[13px] font-semibold md:text-2xl">
            {name}
          </h1>
          <p className="pt-1 font-opensans text-[10px] font-semibold md:pt-2 md:text-[16px]">
            {title}
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default AttorneyCard;
