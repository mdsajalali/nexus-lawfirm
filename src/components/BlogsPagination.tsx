import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface BlogsPaginationProps {
  totalPages: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

const BlogsPagination = ({
  totalPages,
  activePage,
  onPageChange,
}: BlogsPaginationProps) => {
  const isBackDisabled = activePage === 1;
  const isNextDisabled = activePage === totalPages;

  return (
    <div className="flex items-center justify-center gap-[6px]">
      <button
        className={`flex items-center gap-1 rounded-md border px-2 py-1 text-[14px] transition-all ${
          isBackDisabled
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-primary hover:text-white"
        }`}
        onClick={() => onPageChange(activePage - 1)}
        disabled={isBackDisabled}
      >
        <MdOutlineNavigateBefore /> Back
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`rounded-md border px-3 py-1 text-[14px] transition-all ${
            activePage === index + 1
              ? "bg-primary text-white"
              : "hover:bg-primary hover:text-white"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`flex items-center gap-1 rounded-md border px-2 py-1 text-[14px] transition-all ${
          isNextDisabled
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-primary hover:text-white"
        }`}
        onClick={() => onPageChange(activePage + 1)}
        disabled={isNextDisabled}
      >
        Next <MdOutlineNavigateNext />
      </button>
    </div>
  );
};

export default BlogsPagination;
