"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Calendar = () => {
  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h3 className="mx-2 font-semibold text-lg">Calendar</h3>
      </div>
      <div className="">
        <div>#1</div>
        <div>#2</div>
        <div>#3</div>
        <div>#4</div>
        <div>#5</div>
      </div>
    </div>
  );
};
