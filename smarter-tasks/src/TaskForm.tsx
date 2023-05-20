/* eslint-disable react/jsx-no-undef */
import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void; //here we are getting props from parent i.e. TaskApp
}
interface TaskFormState {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const uid = Date.now().toString(36);

  const [formState, setFormState] = React.useState<TaskFormState>({
    id: uid,
    title: "",
    description: "",
    dueDate: "",
  });

  // const [title, setTitle] = React.useState("");
  // const [description, setDescription] = React.useState("");
  // const [dueDate, setDueDate] = React.useState("");

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    // setFormState({ ...formState, id: uid });
    props.addTask(formState); //taskItem
    setFormState({ id: uid, title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={addTask}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="todoTitle"
            type="text"
            value={formState.title}
            onChange={titleChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="todoTitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="todoDescription"
            type="text"
            value={formState.description}
            onChange={descriptionChanged}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="todoDescription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            value={formState.dueDate}
            onChange={dueDateChanged}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="todoDueDate"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Due Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            type="submit"
            id="addTaskButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
};

// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       duedate: "",
//     };
//   }
//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const newTask = {
//       title: this.state.title,
//       description: this.state.description,
//       date: this.state.date,
//     };
//     this.props.addTask(newTask);
//     this.setState({ title: "", description: "", date: "" });
//   };

//   titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({
//       title: event.target.value,
//       description: this.state.description,
//       date: this.state.date,
//     });
//     // for every input we are setting the state
//   };
//   descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     this.setState({
//       description: event.target.value,
//       title: this.state.title,
//       date: this.state.date,
//     });
//     // for every input we are setting the state
//   };
//   // const onChangeDate = (date) => {
//   //   const newDate = moment(date.timeStamp).format('YYYY-MM-DD');
//   //   setValue(newDate);
//   //   console.log(newDate); //always log "1970-01-01"
//   // };
//   dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);

//     this.setState({
//       title: this.state.title,
//       description: this.state.description,
//       date: event.target.value,
//     });
//     // for every input we are setting the state
//   };

//   render() {
//     return (
//       <form onSubmit={this.addTask} align-items="center">
//         <div className="flex gap-3">
//           <label>Title:</label>
//           <p className="border border-gray-300">
//             <input
//               type="text"
//               id="todoTitle"
//               value={this.state.title}
//               onChange={this.titleChanged}
//               required
//             />
//           </p>
//         </div>
//         <div className="flex gap-3 mt-2">
//           <label>Description:</label>
//           <p className="border border-gray-300">
//             <input
//               type="text"
//               id="todoDescription"
//               value={this.state.description}
//               onChange={this.descriptionChanged}
//               required
//             />
//           </p>
//         </div>
//         <div className="flex gap-3 mt-2">
//           <label>Date:</label>
//           <p className="border border-gray-300">
//             <input
//               type="date"
//               id="todoDueDate"
//               value={this.state.date}
//               onChange={this.dateChanged}
//               required
//             />
//           </p>
//         </div>
//         <button
//           type="submit"
//           id="addTaskButton"
//           className=" rounded-xl p-1 border border-black bg-gray-300"
//         >
//           Add item
//         </button>
//       </form>
//     );
//   }
// }
export default TaskForm;
