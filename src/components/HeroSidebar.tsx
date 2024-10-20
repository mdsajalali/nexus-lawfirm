import { BiMessage, BiPhone } from "react-icons/bi";

const HeroSidebar = () => {
  return (
    <div className="  hidden md:flex items-center gap-1 flex-col absolute bottom-0 right-3">
      <div className="bg-primary p-2 hover:bg-white transition-all cursor-pointer rounded-full ">
        <BiPhone size={22} className="text-secondary" />
      </div>
      <div className="bg-primary p-2 hover:bg-white transition-all cursor-pointer rounded-full ">
        <BiMessage size={22} className="text-secondary" />
      </div>
    </div>
  );
}

export default HeroSidebar