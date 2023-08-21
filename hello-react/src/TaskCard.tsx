import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCardProps) => {
  if (props.completedAtDate !== "") {
    return (
      <div className="TaskItem">
        <h2 className="text-xl font-bold mb-3">{props.title}</h2>
        <p>Completed on: {props.completedAtDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  } else {
    return (
      <div className="TaskItem">
        <h2 className="text-xl font-bold mb-3">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  }
};

export default TaskCard;
