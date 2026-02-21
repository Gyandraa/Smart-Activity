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
    <form onSubmit={handleSubmit} className="text-center mt-6 px-4">
      <input
        className="w-full px-5 py-4 mb-4 border rounded-lg text-xl"
        type="text"
        placeholder="Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <input
        className="w-full px-5 py-4 mb-4 border rounded-lg text-xl"
        type="text"
        placeholder="Notes (opsional)"
        value={newNotes}
        onChange={(e) => setNewNotes(e.target.value)}
      />

      <input
        className="w-full px-5 py-4 mb-4 border rounded-lg text-xl"
        type="date"
        value={newDeadline}
        onChange={(e) => setNewDeadline(e.target.value)}
      />

      <div className="mt-4 flex flex-col space-y-3 text-xl">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="importance"
            value="Auto"
            checked={newImportance === null}
            onChange={() => setNewImportance(null)}
            className="w-6 h-6"
          />
          <span>No preference</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="importance"
            value="Low"
            checked={newImportance === "Low"}
            onChange={(e) => setNewImportance(e.target.value)}
            className="w-6 h-6"
          />
          <span>Low</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="importance"
            value="Medium"
            checked={newImportance === "Medium"}
            onChange={(e) => setNewImportance(e.target.value)}
            className="w-6 h-6"
          />
          <span>Medium</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="importance"
            value="High"
            checked={newImportance === "High"}
            onChange={(e) => setNewImportance(e.target.value)}
            className="w-6 h-6"
          />
          <span>High</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-4 mt-6 bg-indigo-600 text-white font-bold
      rounded-xl shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2
      focus:ring-indigo-500 focus:ring-opacity-75 text-xl"
      >
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
