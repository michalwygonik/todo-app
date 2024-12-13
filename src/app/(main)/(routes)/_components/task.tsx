import { Square, Trash2Icon } from "lucide-react";
import { CheckSquare } from "lucide-react";
import FormattedDate from "./formattedDate";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

const Task = (props: any) => {
  const { todo } = props;

  const changeCompleted = useMutation(api.todos.changeCompleted);
  const deleteTask = useMutation(api.todos.deleteTask);

  const handleToggleCompleted = async () =>
    await changeCompleted({ id: todo._id, completed: !todo.completed });

  const handleDeleteTask = async () => await deleteTask({ id: todo._id });
  return (
    <li className="p-2">
      {todo.completed ? (
        <div className="flex justify-between">
          <CheckSquare
            onClick={handleToggleCompleted}
            cursor={"pointer"}
            className=" p-1 mr-1 text-slate-500"
          />
          <Trash2Icon
            onClick={handleDeleteTask}
            cursor={"pointer"}
            size={17}
            className="lg:-mx-14 lg:mt-1 m-1 mr-2 text-red-500"
          />
          <span className="line-through text-slate-400 w-1/2 mb-1">
            {todo.content}
          </span>
          <span className="line-through text-slate-400">
            <FormattedDate timestamp={todo._creationTime} />
          </span>
        </div>
      ) : (
        <div className="flex justify-between">
          <Square
            onClick={handleToggleCompleted}
            cursor={"pointer"}
            className="p-1 mr-1"
          />
          <span className="w-4/6 text-">{todo.content}</span>
          <FormattedDate timestamp={todo._creationTime} />
        </div>
      )}

      <hr />
    </li>
  );
};

export default Task;
