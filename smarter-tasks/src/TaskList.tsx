import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
  //shall change here and try once
  // onTaskDelete
}
interface TaskItem {
  title: string;
  description: string;
  dueDate: string;
}
// interface State {}

const TaskList = (props: Props) => {
  const func = (idx: number) => {
    const ut = props.tasks.filter((task, id) => {
      return id !== idx;
    });
    localStorage.setItem("tasks", JSON.stringify(ut));
  };
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <button
        id="deleteTaskButton"
        className="deleteTaskButton"
        onClick={() => {
          func(idx);
        }}
      >
        delete
      </button>
    </li>
  ));
  return <ol className="list-none">{list}</ol>;
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
