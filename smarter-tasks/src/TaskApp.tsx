import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  React.useEffect(() => {
    // const id = setTimeout(() => {
    console.log(`Saved ${taskAppState.tasks.length} items to backend...`); //here set item to localstorage
    // }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      // clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-2">Pending</h1>
          <TaskForm addTask={addTask} />
          <div className="rounded-lg">
            <TaskList tasks={taskAppState.tasks} setTask={setTaskAppState} />
          </div>
        </div>
      </div>
    </div>
  );
};
// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//   constructor(props: TaskAppProp) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }
//   addTask = (task: TaskItem) => {
//     this.setState((state, props) => {
//       return {
//         tasks: [...state.tasks, task],
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="container py-10 max-w-4xl mx-auto">
//         <h1 className="text-3xl mb-2 font-bold text-slate-700">
//           Smarter Tasks
//         </h1>
//         <h1 className="text-md mb-6 text-slate-600">
//           <span className="font-bold">Project: </span>
//           Graduation Final Year Project (Revamp college website)
//         </h1>
//         <div className="grid grid-cols-6 gap-4">
//           <div className="col-start-2 col-span-4 border border-slate-200 rounded-xl p-4">
//             <h1 className="text-slate-500 font-bold text-center mb-2">
//               Pending
//             </h1>
//             <TaskForm addTask={this.addTask} />
//             <div className="rounded-lg">
//               <TaskList tasks={this.state.tasks} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default TaskApp;
