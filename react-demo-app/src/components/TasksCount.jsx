function TasksCount({ tasks }) {

  return (
    <div>

      <h3 className="text-3xl text-amber-400">Tasks Count</h3>

      <p className="text-3xl">
        {tasks.length}
      </p>

    </div>
  );
}

export default TasksCount;