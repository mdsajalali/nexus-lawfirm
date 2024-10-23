import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const BlogsPagination = () => {
  const totalPages = 5;
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  const isBackDisabled = activePage === 1;
  const isNextDisabled = activePage === totalPages;

  return (
    <div className="flex items-center justify-center gap-[6px]">
      <button
        className={`flex items-center gap-1 border rounded-md py-1 px-2 text-[14px] transition-all ${
          isBackDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primary hover:text-white"
        }`}
        onClick={() => handlePageChange(activePage - 1)}
        disabled={isBackDisabled}
      >
        <MdOutlineNavigateBefore /> Back
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`border rounded-md py-1 px-3 text-[14px] transition-all ${
            activePage === index + 1
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`flex items-center gap-1 border rounded-md py-1 px-2 text-[14px] transition-all ${
          isNextDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primary hover:text-white"
        }`}
        onClick={() => handlePageChange(activePage + 1)}
        disabled={isNextDisabled}
      >
        Next <MdOutlineNavigateNext />
      </button>
    </div>
  );
};

export default BlogsPagination;
