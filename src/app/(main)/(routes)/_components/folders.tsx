"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Folders = () => {
  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h3 className="mx-2 font-semibold text-lg">Folders</h3>
        <Button className="bg-transparent text-olive hover:bg-transparent hover:scale-105 lg:hover:scale-110 transition-all duration-200">
          <Link
            href="/folders"
            className="flex items-center justify-center lg:text-base"
          >
            Show <ChevronRight height={20} />
          </Link>
        </Button>
      </div>
      <div className="">
        <div>#1</div>
        <div>#2</div>
        <div>#3</div>
      </div>
    </div>
  );
};
