"use client";

import { Logo } from "@/app/(marketing)/_components/logo";

const Navigation = () => {
  return (
    <>
      <aside className="group/sidebar pr-10 pt-5 h-full bg-olive w-40 overflow-y-auto">
        <div className="flex m-auto w-20 h-20 rounded-full bg-background justify-center ">
          <Logo />
        </div>
      </aside>
    </>
  );
};

export default Navigation;
