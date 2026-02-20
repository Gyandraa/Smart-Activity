import { useEffect, useState } from "react";

export default function TaskForm({ addTask, editingTask, updatedTask }) {
  const [newTask, setNewTask] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newImportance, setNewImportance] = useState(null);

  useEffect(() => {
    if (editingTask) {
      setNewTask(editingTask.task);
      setNewNotes(editingTask.notes ?? "");
      setNewDeadline(editingTask.deadline);
      setNewImportance(editingTask.importance ?? null);
    } else {
      setNewTask("");
      setNewNotes("");
      setNewDeadline("");
      setNewImportance(null);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanNotes = newNotes.trim() || null;

    if (!newTask.trim() || !newDeadline) {
      return alert("Please enter task and deadline ");
    }

    if (editingTask) {
      updatedTask(newTask, cleanNotes, newDeadline, newImportance);
    } else {
      addTask(newTask, cleanNotes, newDeadline, newImportance);
      setNewTask("");
      setNewNotes("");
      setNewDeadline("");
      setNewImportance(null);
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
            value="Auto"
            checked={newImportance === null}
            onChange={() => setNewImportance(null)}
          />
          No preference
        </label>

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
