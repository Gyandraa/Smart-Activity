import { useEffect, useState } from "react";

export default function TaskForm({ addTask, editingTask, updatedTask }) {
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setNewTask(editingTask.task);
      setNewDescription(editingTask.description);
    } else {
      setNewTask("");
      setNewDescription("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTask) {
      updatedTask(newTask, newDescription);
    } else {
      addTask(newTask, newDescription);
      setNewTask("");
      setNewDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mt-5">
      <input
        className="w-50 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        type="text"
        name="task"
        placeholder="new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        className="w-50 px-4 py-2 ml-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        type="text"
        name="description"
        placeholder="new description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 ml-5 bg-indigo-600 text-white font-semibold
      rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2
      focus:ring-indigo-500 focus:ring-opacity-75"
      >
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
