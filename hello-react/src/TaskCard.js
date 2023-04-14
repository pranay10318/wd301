import './TaskCard.css'

const TaskCard = (props) => {
  if(props.dueDate) {
    return (
      <div className='TaskItem'>
        <p className="text-xl font-bold mb-2">{props.title}</p>
        <p>Due on: {props.dueDate}</p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
    );
  }
  return (
    <div className='TaskItem'>
      <p className="text-xl font-bold mb-2">{props.title}</p>
      <p>Completed on: {props.completedAtDate}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard