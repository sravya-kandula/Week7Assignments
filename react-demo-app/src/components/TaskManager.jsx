import { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function TaskManager() {

  const [tasks, setTasks] = useState([]);

  const addNewTask = (taskObj) => {
    setTasks([...tasks, taskObj]);
  };

  return (
    <div>

      <h1 className="text-5xl text-blue-500 mb-10">Task Manager</h1>

      <div className="flex justify-around">

        <AddTask addNewTask={addNewTask} />
        <TasksList tasks={tasks} />
        <TasksCount tasks={tasks} />

      </div>

    </div>
  );
}

export default TaskManager;