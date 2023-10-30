"use client";

import { UserButton } from "@clerk/clerk-react";
import { SearchBar } from "./search-bar";
import { Bell } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 md:px-12 py-1 bg-slate-50">
      <h3 className="font-semibold text-xl md:text-5xl p-4">Dashboard</h3>
      <SearchBar />
      <div className="flex justify-between items-center h-10 w-20 p-2 md:w-32 md:h-14 bg-olive  md:p-3 rounded-full shadow-md">
        <Bell className="cursor-pointer" />

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
