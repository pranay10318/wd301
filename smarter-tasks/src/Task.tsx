import React from "react";
import "./TaskCard.css";
interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
}
const TaskFC = (props: TaskProp) => {
  return (
    <div className="TaskItem">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};
// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem m-2">
//         <p>
//           {" "}
//           <span className="text-m font-bold">{this.props.title + "  "}</span>
//           <span>({this.props.dueDate})</span>
//         </p>

//         <p>{this.props.description}</p>
//       </div>
//     );
//   }
// }
export default TaskFC;
