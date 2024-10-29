import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface breadcrumbsProps {
  bread_text: string;
  bread_link: string;
}

const Breadcrumbs = ({ bread_text, bread_link }: breadcrumbsProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex items-center gap-1  font-opensans"
    >
      <Link to="/" className="text-[14px]">
        Home
      </Link>
      <PiGreaterThan size={12} />
      <Link to={`/${bread_link}`} className="text-[14px] capitalize">
        {bread_text}
      </Link>
    </motion.div>
  );
};

export default Breadcrumbs;
