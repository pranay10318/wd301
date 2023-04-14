import "./App.css";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div>
      <div className="grid grid-cols-6 m-3">

        <div class="col-start-2 col-span-4">
          <center>
            <p class="text-3xl font-bold">Smarter Tasks</p>
            <p class="text-1xl mb-4">Project: Graduation Final Year Project (Revamp College Website)</p>      
          </center>
        </div>

        {/* left side column */}
        <div className="col-start-2 col-span-2 border border-black rounded-2xl p-2 pb-10 mr-3 ">
          <p className="text-2xl text-center font-bold mb-2">Pending</p>
          <div className="border border-black px-2 py-5 m-3 rounded">
            <TaskCard
              title="Build a website with static content"
              dueDate="10th April"
              assigneeName="Rohit S"
            />
          </div>
          <div className="border border-black px-2 py-5 m-3 rounded">
            <TaskCard
              title="Add a blog"
              dueDate="22nd March"
              assigneeName="Rohit M"
            />
          </div>
          <div className="border border-gray  p-1 m-3 rounded">
            <button className="bg-gray-400 w-full text-left rounded p-1">
              + New task
            </button>
          </div>
        </div>

        {/* right side column */}
        <div className="col-start-4 col-span-2 border border-black rounded-2xl p-2 ml-3">
          <p className="text-2xl text-center font-bold mb-2">Done</p>
          <div className="border border-black px-2 py-5 m-3 rounded">
            <TaskCard
              title="Design the Mockup"
              completedAtDate="10th April"
              assigneeName="Rohit M"
            />
          </div>
          <div className="border border-black px-2 py-5 m-3 rounded">
            <TaskCard
              title="Get the approval from principal"
              completedAtDate="20th April"
              assigneeName="Ajay S"
            />
          </div>
        </div>

      </div>
      {/* grid close */}
    </div>
  );
}

export default App;
