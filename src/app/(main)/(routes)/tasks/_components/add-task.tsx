"use client";

import { Button } from "@/components/ui/button";
const AddTask = () => {
  return (
    <div className="w-64 h-72 bg-slate-50 rounded-[32px] p-3 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-slate-800 mb-3 ml-1">Add Task</h3>
        <textarea className="w-full h-24 outline-none bg-slate-200 p-1 border-slate-100 rounded-lg focus-within:outline-slate-300 focus-within:outline-3 focus-within:bg-slate-50 focus-within:scale-105 transition-all duration-200 resize-none"></textarea>
      </div>
      <div className="flex justify-evenly">
        <Button className="bg-slate-50 text-slate-900 border-2 border-olive rounded-[32px] hover:bg-slate-800 hover:border-slate-800 hover:text-slate-50 hover:scale-105 transition-all duration-200">
          Cancel
        </Button>
        <Button className="bg-olive text-slate-50 rounded-[32px] hover:scale-105 transition-all duration-200">
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
