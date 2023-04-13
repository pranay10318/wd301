import "./App.css";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div class="grid grid-cols-6 m-10">
      <div class="col-start-2 col-span-5">
        <h1 className="text-3xl font-extrabold">
          Smater Tasks
        </h1>
        <p className="text-xl"><b className="mr-1">Project:</b>Graduation Final Year Project(Revamp College Website)</p>
      </div>
      
      <div class="mt-4 col-start-2 col-span-4 space-x-10">
        <div className="float-left border border-black p-3 rounded-2xl pb-24">
          <h1 className="text-xl text-center mb-2 font-semibold">Pending</h1>
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
          <button className="bg-gray-300 rounded p-1 mt-2">+NewTask</button>
        </div>

        <div className="border border-black rounded-2xl p-4 pb-32 float-left">
          <h1 className="text-xl font-semibold text-center mb-2">Done</h1>
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

    </div>
  );
}
export default App;
