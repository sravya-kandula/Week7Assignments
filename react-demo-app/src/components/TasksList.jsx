function TasksList({ tasks }) {

  return (
    <div>

      <h3 className="text-3xl mb-3">Tasks List</h3>

      {tasks.length === 0 ? (

        <img
          width="200"
          src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-empty-cartoon-box-image_1252284.jpg"
          alt="empty"
        />

      ) : (

        tasks.map((task, index) => (
          <p key={index} className="text-2xl">
            {task.taskName}
          </p>
        ))

      )}

    </div>
  );
}

export default TasksList;