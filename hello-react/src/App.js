import "./App.css";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div className = "grid grid-cols-6 m-10">
      <div className = "col-start-2 col-span-5 m-3">
        <p className="text-3xl font-bold">
          Smater Tasks
        </p>
        <p className="text-xl"><b className="mr-1">Project:</b>Graduation Final Year Project(Revamp College Website)</p>
      </div>

      <div className = "col-start-2 col-span-4 space-x-5">
          <div className = "float-left border border-black rounded-2xl p-4">
            <p className = "text-2xl text-center font-bold mb-2">Pending</p>
            <TaskCard title = "Build a website with static content" dueDate = "10th April" assigneeName = "Rohit S"/>
            <TaskCard title = "Add a blog" dueDate = "22nd March" assigneeName = "Rohit M"/>
            <button className = "bg-gray-400 w-full text-left rounded p-1">+ New task</button>
          </div>

          <div className = "float-left border border-black rounded-2xl p-4 ">
            <p className = "text-2xl text-center font-bold mb-2">Done</p>
            <TaskCard title = "Design the Mockup" completedAtDate = "10th April" assigneeName = "Rohit M"/>
            <TaskCard title = "Get the approval from principal" completedAtDate = "20th April" assigneeName = "Ajay S"/>
          </div>
      </div>

    </div>
  );
}


export default App;
