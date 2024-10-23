import { CiSearch } from "react-icons/ci";
interface BlogsSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
const BlogsSearch = ({ searchQuery, setSearchQuery }: BlogsSearchProps) => {
  return (
    <div className="border flex items-center justify-between rounded-md px-4 py-[10px] bg-white">
      <input
        type="text"
        placeholder="Search by title"
        className="text-[#D0D4D6] text-[14px] outline-none w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CiSearch size={20} className="text-[#3D4C56] cursor-pointer" />
    </div>
  );
};

export default BlogsSearch;
