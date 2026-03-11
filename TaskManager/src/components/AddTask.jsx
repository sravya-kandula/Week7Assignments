import React, { useState } from "react";

function AddTaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };

    addTask(newTask);

    setTitle("");
    setPriority("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">

      <input
        className="border p-2 rounded"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <select
        className="border p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Add Task
      </button>

    </form>
  );
}

export default AddTaskForm;