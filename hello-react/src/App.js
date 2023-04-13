import "./App.css";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div className="mt-50">
      <h1 className="text-3xl text-center">
        Smater Tasks
      </h1>
      <p className="text text-center"><b>Project:</b>Graduation Final Year Project(Revamp College Website)</p>
      <div className="float-left border border-grey p-2 ml-60">
        <h1 className="bg-slate-100 text-2xl">Pending</h1>
        <TaskCard
          title="Build the website with static content"
          dueDate="7-04-2023"
          assigneeName="Rohit S"
        />
        <TaskCard
          title="Add a blog"
          dueDate="6-04-2023"
          assigneeName="Rohit M"
        />
        <button className="bg-gray-300 rounded p-2">+NewTask</button>
      </div>

      <div className="float-right mr-60">
        <h1 className="bg-slate-100 text-2xl">Done</h1>
        <TaskCard
          title="Design the mockup"
          completedAtDate="7-04-2023"
          assigneeName="Rohit M"
        />
        <TaskCard
          title="Get the approval from principal"
          completedAtDate="8-04-2023"
          assigneeName="Ajay S"
        />
      </div>
    </div>
  );
}
export default App;
