import React from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";
interface TaskProp {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}
const TaskFC = (props: TaskProp) => {
  return (
    <div className="TaskItem">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};
export default TaskFC;
