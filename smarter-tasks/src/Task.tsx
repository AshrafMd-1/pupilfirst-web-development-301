import "./TaskCard.css";

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
  deleteTaskCB: (task: {
    title: string;
    description: string;
    dueDate: string;
  }) => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        className="deleteTaskButton bg-red-500 text-white mt-2 font-bold py-1 px-2 rounded hover:bg-red-700"
        onClick={() => {
          props.deleteTaskCB(props);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
