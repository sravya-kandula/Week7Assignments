import React, { useState } from "react";
import AddTaskForm from "./AddTask";
import TaskList from "./TaskList";

function TaskManager() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="bg-white p-10 rounded-xl shadow-2xl w-900">

      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
        Task Manager
      </h1>

      <p className="text-center text-gray-600 mb-6 text-lg">
        Total Tasks: {tasks.length} | Completed: {completedCount}
      </p>

      <AddTaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

    </div>
  );
}

export default TaskManager;