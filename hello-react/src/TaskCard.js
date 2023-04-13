import "./TaskCard.css";
const TaskCard = (props) => {
  if (props.dueDate) {
    return (
      <div className="TaskItem">
        <br/>
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  }
  return (
    <div className="TaskItem">
        <br/>
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>Completed on: {props.completedAtDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
