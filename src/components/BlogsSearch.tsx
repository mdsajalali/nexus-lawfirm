import { CiSearch } from "react-icons/ci";
interface BlogsSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
const BlogsSearch = ({ searchQuery, setSearchQuery }: BlogsSearchProps) => {
  return (
    <div className="flex items-center justify-between rounded-md border bg-white px-4 py-[10px]">
      <input
        type="text"
        placeholder="Search by title"
        className="w-full text-[14px] text-[#D0D4D6] outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CiSearch size={20} className="cursor-pointer text-[#3D4C56]" />
    </div>
  );
};

export default BlogsSearch;
