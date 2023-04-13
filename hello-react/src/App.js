import "./App.css";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div class="grid grid-cols-6 m-10">
      <div class="col-start-2 col-span-5">
        <p className="text-3xl font-extrabold">
          Smater Tasks
        </p>
        <p className="text-xl"><b className="mr-1">Project:</b>Graduation Final Year Project(Revamp College Website)</p>
      </div>
      
      <div class="mt-4 col-start-2 col-span-4 space-x-10">
        <div className="float-left border border-black p-3 rounded-2xl pb-24">
          <p className="text-xl text-center mb-2 font-semibold">Pending</p>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
          <button className="bg-gray-300 text-left font-semibold rounded p-1 mt-2 w-full">+ New task</button>
        </div>

        <div className="border border-black rounded-2xl p-4 pb-32 float-left">
          <p className="text-xl font-semibold text-center mb-2">Done</p>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>

    </div>
  );
}
export default App;
