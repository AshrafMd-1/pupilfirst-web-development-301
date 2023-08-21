import Task from "./Task";

interface Props {
  tasks: TaskItem[];
  deleteTaskCB: (task: TaskItem) => void;
}

interface TaskItem {
  title: string;
  description: string;
  dueDate: string;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTaskCB={props.deleteTaskCB}
      />
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;
