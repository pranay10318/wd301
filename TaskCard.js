import './TaskCard.css'

const TaskCard = (props) => {
    let msg = "Due on: " + props.dueDate
    if(!props.dueDate) msg = "Completed on: " + props.completedAtDate 
    return (
        <div className='TaskItem'>
            <p className='text-m font-bold'> {props.title} </p>
            <p>{msg}</p>
            <p> Assignee: {props.assigneeName}  </p>
        </div>
    );
}

export default TaskCard