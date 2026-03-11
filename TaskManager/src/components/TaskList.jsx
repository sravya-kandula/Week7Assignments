import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask }) {

  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No tasks added yet
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}

    </div>
  );
}

export default TaskList;