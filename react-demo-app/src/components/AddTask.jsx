import { useState } from "react";

function AddTask({ addNewTask }) {

  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      taskName
    };

    addNewTask(taskObj);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3 className="text-3xl mb-4">Add Task</h3>

      <input
        type="text"
        className="border p-2"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button className="bg-green-500 text-white p-2 ml-3">
        Add
      </button>

    </form>
  );
}

export default AddTask;