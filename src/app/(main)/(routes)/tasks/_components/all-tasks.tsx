"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import Task from "./task";

const AllTasks = (props: any) => {
  const { isAddTaskActive, setIsAddTaskActive } = props;

  const todos = useQuery(api.todos.get);
  return (
    <div className="w-72 min-h-96 bg-slate-50 rounded-[32px] p-3 flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-slate-800 ml-1">All Tasks</h3>
        <Button
          className="bg-olive text-slate-50 rounded-[32px] hover:scale-105 transition-all duration-200"
          onClick={() => setIsAddTaskActive(!isAddTaskActive)}
        >
          Add Task
        </Button>
      </div>
      <div className="flex flex-col gap-8 my-5">
        {todos?.map((todo) => (
          <Task key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
