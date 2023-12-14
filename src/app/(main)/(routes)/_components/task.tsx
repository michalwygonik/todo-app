import { Check, Square } from "lucide-react";
import { CheckSquare } from "lucide-react";

const Task = (props: any) => {
  const { todo } = props;
  console.log(todo);

  return (
    <li className="p-2">
      {todo.completed ? (
        <div className="flex justify-between">
          <CheckSquare className=" p-1 mr-1 text-slate-500" />
          <span className="line-through text-slate-400 w-5/6">
            {todo.content}
          </span>
          <span>Today</span>
        </div>
      ) : (
        <div className="flex justify-between">
          <Square className="p-1 mr-1" />
          <span className="w-5/6">{todo.content}</span>
          <span>Today</span>
        </div>
      )}

      <hr />
    </li>
  );
};

export default Task;
