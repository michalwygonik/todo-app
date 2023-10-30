"use client";

import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex justify-between items-center px-4 w-1/3  h-10 md:h-14 bg-olive bg-opacity-40 rounded-full  transition-all duration-100 focus-within:scale-105 shadow-md">
      <input
        type="text"
        className="w-full h-full rounded-full -ml-4 bg-olive bg-opacity-0 outline-0 p-4"
      />
      <Search className="cursor-pointer hover:scale-125 hover:transtion-all duration-200" />
    </div>
  );
};
