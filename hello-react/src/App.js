import TaskCard from "./TaskCard";


function App() {

  return (
    <div>
      <div class="grid grid-cols-6">
          <div class="col-start-2 col-span-4">
            <p class="text-3xl font-bold">Smarter Tasks</p>
            <p class="text-xl mb-4">Project: Graduation Final Year Project (Revamp College Website)</p>      
          </div>
          <div class=" col-start-2 col-span-2 border border-black rounded-2xl mr-3">
              <p class="py-2 text-2xl px-5 text-center font-bold"> Pending </p>
              <div class="border border-gray-900 m-3 py-1 px-5">
                <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohith S"/>
              </div>
              <div class="border border-gray-900 m-3 py-2 px-5">
                <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohith M"/>
              </div>
              <div class="border border-gray-900 m-3 py-2 px-5 bg-gray-300 ">
                <p>+New Task</p>
              </div>
          </div>
          <div class=" col-start-4 col-span-2 border border-gray-900 rounded-xl ml-3">
              <p class="text-2xl text-center font-bold py-2 px-5"> Done </p>
              <div class=" border border-gray-900 m-3 py-2 px-5">
                <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohith M"/>
              </div>
              <div class=" border border-gray-900 m-3 py-2 px-5">
                <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
              </div>
          </div>             
        </div>
    </div>
  );
}

export default App;