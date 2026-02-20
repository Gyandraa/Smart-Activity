import { useEffect, useState } from "react";

export default function TaskForm({ addTask, editingTask, updatedTask }) {
  const [newTask, setNewTask] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [newDeadline, setNewDeadline] = useState("YYYY-MM-DD");
  const [newImportance, setNewImportance] = useState(null);

  const IMPORTANCE = ["Low", "Medium", "High"];

  useEffect(() => {
    if (editingTask) {
      setNewTask(editingTask.task);
      setNewNotes(editingTask.notes);
      setNewDeadline(editingTask.deadline);
      setNewImportance(editingTask.importance);
    } else {
      setNewTask("");
      setNewNotes("");
      setNewDeadline("");
      setNewImportance("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask || !newDeadline) {
      return alert("Please enter task and deadline ");
    }

    if (editingTask) {
      updatedTask(newTask, newNotes, newDeadline, newImportance);
    } else {
      addTask(newTask, newNotes, newDeadline, newImportance);
      setNewTask("");
      setNewNotes("");
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
          name="notes"
          placeholder="Notes (opsional)"
          value={newNotes}
          onChange={(e) => setNewNotes(e.target.value)}
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
