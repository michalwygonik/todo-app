"use client";

import AddTask from "./_components/add-task";

const Tasks = () => {
  return (
    <div className="h-full bg-[url('/comfy-study-room.jpg')] bg-cover ">
      <div className="h-full w-full bg-slate-50/25 backdrop-blur-sm flex items-center justify-center">
        <AddTask />
      </div>
    </div>
  );
};

export default Tasks;
