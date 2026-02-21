import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm({ addTask, editingTask, updatedTask }) {
  const [newTask, setNewTask] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newImportance, setNewImportance] = useState(null);

  const navigate = useNavigate();

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
      return alert("Please enter task and deadline");
    }

    if (editingTask) {
      updatedTask(newTask, cleanNotes, newDeadline, newImportance);
    } else {
      addTask(newTask, cleanNotes, newDeadline, newImportance);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mt-5">
      <input
        className="w-50 px-4 py-2 border rounded-md"
        type="text"
        placeholder="Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <input
        className="w-50 px-4 py-2 ml-3 border rounded-md"
        type="text"
        placeholder="Notes (opsional)"
        value={newNotes}
        onChange={(e) => setNewNotes(e.target.value)}
      />

      <input
        className="w-50 px-4 py-2 ml-3 border rounded-md"
        type="date"
        value={newDeadline}
        onChange={(e) => setNewDeadline(e.target.value)}
      />

      <div className="mt-3">
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

        <label className="ml-3">
          <input
            type="radio"
            name="importance"
            value="Low"
            checked={newImportance === "Low"}
            onChange={(e) => setNewImportance(e.target.value)}
          />
          Low
        </label>

        <label className="ml-3">
          <input
            type="radio"
            name="importance"
            value="Medium"
            checked={newImportance === "Medium"}
            onChange={(e) => setNewImportance(e.target.value)}
          />
          Medium
        </label>

        <label className="ml-3">
          <input
            type="radio"
            name="importance"
            value="High"
            checked={newImportance === "High"}
            onChange={(e) => setNewImportance(e.target.value)}
          />
          High
        </label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 ml-5 mt-5 bg-indigo-600 text-white font-semibold
      rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2
      focus:ring-indigo-500 focus:ring-opacity-75"
      >
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
