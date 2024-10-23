import { MdOutlineNavigateNext } from "react-icons/md";

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
      <h1 className="font-semibold text-2xl">Categories</h1>
      <div className="pt-5">
        {categories.map((category) => (
          <h1
            key={category}
            className={`flex items-center py-[3px] text-[14px] cursor-pointer ${
              selectedCategory === category ? "text-secondary" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <MdOutlineNavigateNext size={22} className="text-secondary" />
            <span className="hover:text-secondary transition-all duration-300">
              {category}
            </span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
