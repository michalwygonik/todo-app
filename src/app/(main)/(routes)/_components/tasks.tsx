"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";
import Task from "./task";

export const Tasks = () => {
  const todos = useQuery(api.todos.getRecentTasks);
  const allTodos = useQuery(api.todos.get);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex justify-between items-center m-2">
        <h3 className="mx-2 font-semibold lg:text-2xl text-lg">Tasks</h3>
        <Button className="bg-transparent text-olive hover:bg-transparent hover:scale-105 lg:hover:scale-110 transition-all duration-200">
          <Link
            href="/tasks"
            className="flex items-center justify-center lg:text-base"
          >
            All <ChevronRight height={20} />
          </Link>
        </Button>
      </div>
      <div className="lg:text-xl h-full text-sm text-left mx-5 text-slate-800">
        Recent tasks
        <ul>
          {todos?.map((todo) => (
            <Task key={todo._id} todo={todo} />
          ))}
        </ul>
      </div>
      <div className="my-5 lg:mx-12 mx-2 text-lg text-center flex justify-between">
        <div>
          <h3>Number of tasks</h3>
          <span>{allTodos?.length}</span>
        </div>
        <div>
          <h3>Tasks to be completed</h3>
          <span>{allTodos?.filter((todo) => !todo.completed).length}</span>
        </div>
      </div>
    </div>
  );
};
