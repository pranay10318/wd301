import "./TaskCard.css";
const TaskCard = (props) => {
  if (props.dueDate) {
    return (
      <div className="TaskItem border border-black rounded mt-2 p-1">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  }
  return (
    <div className="TaskItem border border-black rounded mt-2 p-1">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>Completed on: {props.completedAtDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
