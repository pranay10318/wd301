/* eslint-disable react/jsx-no-undef */
import React from "react";
import { TaskItem } from "./types";
import moment from "moment";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  date: Date;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: new Date(""),
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", date: new Date("") });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({
      title: event.target.value,
      description: this.state.description,
      date: this.state.date,
    });
    // for every input we are setting the state
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({
      description: event.target.value,
      title: this.state.title,
      date: this.state.date,
    });
    // for every input we are setting the state
  };
  // const onChangeDate = (date) => {
  //   const newDate = moment(date.timeStamp).format('YYYY-MM-DD');
  //   setValue(newDate);
  //   console.log(newDate); //always log "1970-01-01"
  // };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    const newDate = moment(event.target.value).format("YYYY-MM-DD");

    this.setState({
      title: this.state.title,
      description: this.state.description,
      date: new Date(newDate),
    });
    // for every input we are setting the state
  };

  render() {
    return (
      <form onSubmit={this.addTask} align-items="center">
        <div className="flex gap-3">
          <label>Title:</label>
          <p className="border border-gray-300">
            <input
              type="text"
              id="todoTitle"
              value={this.state.title}
              onChange={this.titleChanged}
              required
            />
          </p>
        </div>
        <div className="flex gap-3 mt-2">
          <label>Description:</label>
          <p className="border border-gray-300">
            <input
              type="text"
              id="todoDescription"
              value={this.state.description}
              onChange={this.descriptionChanged}
              required
            />
          </p>
        </div>
        <div className="flex gap-3 mt-2">
          <label>Date:</label>
          <p className="border border-gray-300">
            <input
              type="date"
              id="todoDueDate"
              value={moment(this.state.date).format("YYYY-MM-DD")}
              onChange={this.dateChanged}
              required
            />
          </p>
        </div>
        <button
          type="submit"
          id="addTaskButton"
          className=" rounded-xl p-1 border border-black bg-gray-300"
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
