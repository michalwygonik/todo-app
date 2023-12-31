"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";
import Task from "./task";

export const Tasks = () => {
  const todos = useQuery(api.todos.getRecentTasks);

  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h3 className="mx-2 font-semibold text-lg">Tasks</h3>
        <Button className="bg-transparent text-olive hover:bg-transparent hover:scale-105 lg:hover:scale-110 transition-all duration-200">
          <Link
            href="/tasks"
            className="flex items-center justify-center lg:text-base"
          >
            All <ChevronRight height={20} />
          </Link>
        </Button>
      </div>
      <div className="text-md text-left px-5 text-slate-800">
        Recent tasks
        <ul>
          {todos?.map((todo) => (
            <Task key={todo._id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};
