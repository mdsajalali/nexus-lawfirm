import { useQuery } from "@tanstack/react-query";

const useBlogs = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("/blogs.json");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  const blogs = data?.blogs || [];
  const recentBlogs = data?.recent_blogs || [];

  return { blogs, recentBlogs };
};

export default useBlogs;
