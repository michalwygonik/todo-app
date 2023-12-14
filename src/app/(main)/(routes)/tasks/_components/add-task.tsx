"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { useState } from "react";
const AddTask = (props: any) => {
  const { isAddTaskActive, setIsAddTaskActive } = props;

  const [content, setContent] = useState("");
  const create = useMutation(api.todos.create);

  const onCreate = () => {
    create({ content });
    setContent("");
    setIsAddTaskActive(!isAddTaskActive);
  };

  return (
    <div className="w-full h-full absolute bg-black/50 backdrop-blur-sm">
      <div className="w-64 h-72 bg-slate-50 rounded-[32px] p-3 flex flex-col justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <h3 className="font-semibold text-slate-800 mb-3 ml-1">Add Task</h3>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-24 outline-none bg-slate-200 p-1 border-slate-100 rounded-lg focus-within:outline-slate-300 focus-within:outline-3 focus-within:bg-slate-50 focus-within:scale-105 transition-all duration-200 resize-none"
          ></textarea>
          <div></div>
        </div>
        <div className="flex justify-evenly">
          <Button
            className="bg-slate-50 text-slate-900 border-2 border-olive rounded-[32px] hover:bg-slate-800 hover:border-slate-800 hover:text-slate-50 hover:scale-105 transition-all duration-200"
            onClick={() => setIsAddTaskActive(!isAddTaskActive)}
          >
            Cancel
          </Button>
          <Button
            onClick={onCreate}
            className="bg-olive text-slate-50 rounded-[32px] hover:scale-105 transition-all duration-200"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
