import { useEffect, useState } from "react";

export default function TaskForm({ addTask, editingTask, updatedTask }) {
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDeadline, setNewDeadline] = useState("YYYY-MM-DD");
  const [newImportance, setNewImportance] = useState("");

  useEffect(() => {
    if (editingTask) {
      setNewTask(editingTask.task);
      setNewDescription(editingTask.description);
      setNewDeadline(editingTask.deadline);
      setNewImportance(editingTask.priority);
    } else {
      setNewTask("");
      setNewDescription("");
      setNewDeadline("");
      setNewImportance("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask || !newDescription || !newDeadline || !newImportance) {
      return alert("Please enter task, description , deadline and importance");
    }

    if (editingTask) {
      updatedTask(newTask, newDescription, newDeadline, newImportance);
    } else {
      addTask(newTask, newDescription, newDeadline, newImportance);
      setNewTask("");
      setNewDescription("");
      setNewDeadline("");
      setNewImportance("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-center mt-5 ">
        <input
          className="w-50 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          type="text"
          name="task"
          placeholder="Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          className="w-50 px-4 py-2 ml-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          type="text"
          name="description"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <input
          className="w-50 px-4 py-2 ml-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          placeholder="Deadline"
          type="date"
          name="deadline"
          value={newDeadline}
          onChange={(e) => setNewDeadline(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="importance"
            value="Low"
            checked={newImportance === "Low"}
            onChange={(e) => setNewImportance(e.target.value)}
          />
          Low
        </label>

        <label>
          <input
            type="radio"
            name="importance"
            value="Medium"
            checked={newImportance === "Medium"}
            onChange={(e) => setNewImportance(e.target.value)}
          />
          Medium
        </label>

        <label>
          <input
            type="radio"
            name="importance"
            value="High"
            checked={newImportance === "High"}
            onChange={(e) => setNewImportance(e.target.value)}
          />
          High
        </label>

        <button
          type="submit"
          className="px-4 py-2 ml-5 bg-indigo-600 text-white font-semibold
      rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2
      focus:ring-indigo-500 focus:ring-opacity-75"
        >
          {editingTask ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
}
