import React from "react";

function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="border p-3 rounded flex justify-between items-center">

      <div>
        <h3 className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h3>

        <p className="text-sm text-gray-600">
          Priority: {task.priority}
        </p>
      </div>

      <div className="flex gap-2">

        {/* Status Button */}
        <button
          onClick={() => toggleTask(task.id)}
          className={`px-3 py-1 rounded text-white ${
            task.completed ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {task.completed ? "Completed" : "Not Completed"}
        </button>

        {/* Delete Button */}
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-gray-700 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;