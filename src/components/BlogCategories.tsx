import { MdOutlineNavigateNext } from "react-icons/md";
import {motion} from "framer-motion"

interface BlogCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const categories = [
    "All",
    "Criminal Law",
    "Family Law",
    "Business Law",
    "Estate Planning",
    "Immigration Law",
    "Personal Injury",
    "Employment Law",
    "Real Estate Law",
  ];

  return (
    <div>
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Categories
      </motion.h1>
      <div className="pt-5">
        {categories.map((category, idx) => (
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.2 }}
            viewport={{ once: true }}
            key={category}
            className={`flex cursor-pointer items-center py-[3px] text-[14px] ${
              selectedCategory === category ? "text-secondary" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <MdOutlineNavigateNext size={22} className="text-secondary" />
            <span className="transition-all duration-300 hover:text-secondary">
              {category}
            </span>
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
