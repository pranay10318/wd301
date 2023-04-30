import React from "react";
import Task from "./Task";
import "./TaskCard.css";

interface TaskAppState {
  tasks: TaskItem[];
}
interface TaskItem {
  title: string;
  description: string;
  dueDate: string;
}
interface Props {
  tasks: TaskItem[];
  setTask: React.Dispatch<React.SetStateAction<TaskAppState>>;
}
//shall change here and try once
// onTaskDelete
// interface State {}

const TaskList = (props: Props) => {
  const func = (idx: number) => {
    const updatedTasks = props.tasks.filter((task, id) => {
      return id !== idx;
    });
    const updatedTaskAppState: TaskAppState = {
      ...props.tasks,
      tasks: updatedTasks,
    };

    // Call setTaskAppState with the updated taskAppState object
    props.setTask(updatedTaskAppState);
  };
  // const list =
  return (
    <ol className="list-none">
      {props.tasks &&
        props.tasks.map((task, idx) => (
          <li key={idx} className="shadow-md-5 border border-solid my-6">
            <Task
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
            />
            <button
              className="deleteTaskButton bg-red-400 hover:cursor-pointer py-0 px-1 rounded my-3"
              onClick={() => {
                func(idx);
              }}
            >
              delete
            </button>
          </li>
        ))}
    </ol>
  );
};

// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <div>
//         <Task
//           key={idx}
//           title={task.title}
//           description={task.description}
//           dueDate={task.dueDate}
//         />{" "}
//       </div>
//     ));
//   }
// }

export default TaskList;
