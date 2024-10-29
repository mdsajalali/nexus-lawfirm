import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";

interface breadcrumbsProps {
  bread_text: string;
  bread_link: string;
}

const Breadcrumbs = ({ bread_text, bread_link }: breadcrumbsProps) => {
  return (
    <div className="flex items-center gap-1  font-opensans">
      <Link to="/" className="text-[14px]">
        Home
      </Link>
      <PiGreaterThan size={12} />
      <Link to={`/${bread_link}`} className="text-[14px] capitalize">
        {bread_text}
      </Link>
    </div>
  );
};

export default Breadcrumbs;
