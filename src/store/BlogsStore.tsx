import { create } from "zustand";

interface BlogStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  activePage: number;
  setActivePage: (page: number) => void;
  blogsPerPage: number;
}

const useBlogStore = create<BlogStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedCategory: "All",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  activePage: 1,
  setActivePage: (page) => set({ activePage: page }),
  blogsPerPage: 6,
}));

export default useBlogStore;
