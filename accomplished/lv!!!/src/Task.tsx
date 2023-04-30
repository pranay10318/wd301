import React from "react";
import "./TaskCard.css";
import moment from "moment";
interface TaskProp {
  title: string;
  description: string;
  date: Date;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem m-2">
        <p>
          {" "}
          <span className="text-m font-bold">{this.props.title + "  "}</span>
          <span>({moment(this.props.date).format("YYYY-MM-DD")})</span>
        </p>

        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default Task;
