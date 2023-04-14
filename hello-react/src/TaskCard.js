import './TaskCard.css'
const TaskCard = (props) => {
    let x = "Due on: " + props.dueDate
    if(!props.dueDate) x = "Completed on: " + props.completedAtDate 
    return (
        <div className='TaskItem'>
            <p className='text-m font-bold'> {props.title} </p>
            <p>{x}</p>
            <p> Assignee: {props.assigneeName}  </p>
        </div>
    );
}
export default TaskCard