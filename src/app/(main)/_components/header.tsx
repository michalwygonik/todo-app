"use client";

import { UserButton } from "@clerk/clerk-react";
import { SearchBar } from "./search-bar";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const Header = () => {
  const pathname = usePathname();
  const currentRoute = capitalizeFirstLetter(pathname!.substring(1));

  return (
    <div className="flex justify-between items-center px-6 md:px-12 py-1 bg-slate-50">
      <h2 className="font-semibold text-xl md:text-5xl p-4">{currentRoute}</h2>
      <SearchBar />
      <div className="flex justify-between items-center h-10 w-20 p-2 md:w-32 md:h-14 bg-olive  md:p-3 rounded-full shadow-md">
        <div className="cursor-pointer h-6 w-6 md:w-8 md:h-8 rounded-full md:p-1 bg-slate-50">
          <Bell />
        </div>

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
