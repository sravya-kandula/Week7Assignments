import React from "react";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-right from-blue-100 via-indigo-100 to-purple-100 flex justify-center items-start pt-20">
      <TaskManager />
    </div>
  );
}

export default App;