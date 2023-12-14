"use client";

import { useState } from "react";
import AddTask from "./_components/add-task";
import AllTasks from "./_components/all-tasks";

const Tasks = () => {
  const [isAddTaskActive, setIsAddTaskActive] = useState(false);
  return (
    <div className="h-full bg-[url('/comfy-study-room.jpg')] bg-cover">
      <div className="h-full w-full bg-slate-50/25 backdrop-blur-sm flex flex-col gap-12 items-center justify-center ">
        {isAddTaskActive && (
          <AddTask
            isAddTaskActive={isAddTaskActive}
            setIsAddTaskActive={setIsAddTaskActive}
          />
        )}

        <AllTasks
          isAddTaskActive={isAddTaskActive}
          setIsAddTaskActive={setIsAddTaskActive}
        />
      </div>
    </div>
  );
};

export default Tasks;
