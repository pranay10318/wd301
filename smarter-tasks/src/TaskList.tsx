import React from "react";
import Task from "./Task";
interface Props {
  tasks: TaskItem[];
}
interface TaskItem {
  title: string;
  description: string;
  date: Date;
}
interface State {}
class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <div>
        <Task
          key={idx}
          title={task.title}
          description={task.description}
          date={task.date}
        />{" "}
      </div>
    ));
  }
}
export default TaskList;
