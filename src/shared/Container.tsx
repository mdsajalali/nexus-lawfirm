import { ReactNode } from "react";

interface TContainer {
  children: ReactNode;
}

const Container = ({ children }: TContainer) => {
  return (
    <div className="mx-auto max-w-[1320px] px-4   xl:px-0">{children}</div>
  );
};

export default Container;
