import { Check, Square } from "lucide-react";
import { CheckSquare } from "lucide-react";

const Task = (props: any) => {
  const { todo } = props;
  console.log(todo);

  return (
    <li className="p-2">
      {todo.completed ? (
        <>
          <CheckSquare className="float-left p-1 mr-1 text-slate-500" />
          <span className="line-through text-slate-400">{todo.content}</span>
        </>
      ) : (
        <>
          <Square className="float-left p-1 mr-1" />
          <span>{todo.content}</span>
        </>
      )}

      <hr />
    </li>
  );
};

export default Task;
