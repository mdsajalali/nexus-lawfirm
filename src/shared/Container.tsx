import { ReactNode } from "react";

interface TContainer {
  children: ReactNode;
}

const Container = ({ children }: TContainer) => {
  return (
    <div className="max-w-[1320px] mx-auto xl:px-0 lg:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
