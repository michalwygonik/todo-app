"use client";

import { CheckSquare, Square } from "lucide-react";

const Task = (props: any) => {
  const { todo } = props;
  return (
    <div className="flex bg-slate-200 p-3 rounded-lg">
      <div>{todo.completed ? <CheckSquare /> : <Square />}</div>
      <span className="mx-2">{todo.content}</span>
    </div>
  );
};

export default Task;
