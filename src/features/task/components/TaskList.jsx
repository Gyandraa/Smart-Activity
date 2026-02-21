import { Link } from "react-router-dom";

export default function TaskList({ tasks, removeTask }) {
  const priorityColor = (priority) => {
    if (!priority) return "bg-gray-200 text-gray-700";
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="w-full mt-5 px-4 sm:px-6">
      <ul className="grid grid-cols-1 gap-8">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300
                       p-10 border border-gray-100"
          >
            <div className="flex flex-col min-h-[550px]">
              <h3 className="text-4xl font-bold text-gray-800 mb-6 break-words leading-snug">
                {task.task}
              </h3>

              <p className="text-xl text-gray-600 mb-8 whitespace-pre-wrap leading-relaxed">
                {task.notes || "No notes"}
              </p>

              <div className="space-y-3 text-lg text-gray-700 mb-8">
                <p>
                  <span className="font-semibold">Deadline:</span>{" "}
                  {task.deadline}
                </p>
                <p>
                  <span className="font-semibold">Time Remaining:</span>{" "}
                  {task.timeRemaining}
                </p>
                <p>
                  <span className="font-semibold">Urgency:</span> {task.urgency}
                </p>
                <p>
                  <span className="font-semibold">Importance:</span>{" "}
                  {task.importance ?? "Auto"}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`px-8 py-3 text-lg font-semibold rounded-full ${priorityColor(
                    task.finalPriority,
                  )}`}
                >
                  Final Priority: {task.finalPriority}
                </span>
              </div>

              <div className="mt-auto flex flex-col gap-5">
                <button
                  onClick={() => removeTask(task.id)}
                  className="w-full h-20 bg-red-500 hover:bg-red-600 text-white
                             font-semibold rounded-2xl transition active:scale-95 text-xl"
                >
                  Delete
                </button>

                <Link to={`/task-form/${task.id}`} className="w-full">
                  <button
                    className="w-full h-20 bg-emerald-500 hover:bg-emerald-600 text-white
                               font-semibold rounded-2xl transition active:scale-95 text-xl"
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
