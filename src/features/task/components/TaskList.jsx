export default function TaskList({ tasks, removeTask, startEdit }) {
  return (
    <ul className="mt-5">
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="text-center">
            <h3>Task: {task.task}</h3>
            <p>Notes : {task.notes}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Time Remaining : {task.timeRemaining}</p>
            <p>Urgency : {task.urgency}</p>
            <p>Importance : {task.importance ?? "Auto"} </p>
            <p>Final Priority : {task.finalPriority}</p>
            <button
              onClick={() => removeTask(task.id)}
              className="px-4 py-2 ml-5 bg-red-600 text-white font-semibold rounded-lg
            shadow-md hover:bg-red-700 focus:outline-none focus:ring-2
            focus:ring-red-500 focus:ring-opacity-75"
            >
              Delete
            </button>
            <button
              onClick={() => startEdit(task.id)}
              className="px-4 py-2 ml-5 bg-green-600 text-white font-semibold
      rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2
      focus:ring-green-500 focus:ring-opacity-75"
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
