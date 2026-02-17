import { useState } from "react";

export default function useTask() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "wake up 6am in every morning",
      description: "for healthy life",
    },
    {
      id: 2,
      task: "run 10km in every morning",
      description: "to improve body fitness",
    },
    { id: 3, task: "read a book", description: "to improve knowledge" },
  ]);

  const [editingTask, setEditingTask] = useState(null);

  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function addTask(task, description) {
    setTasks((prev) => [...prev, { id: Date.now(), task, description }]);
  }

  function startEdit(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditingTask(taskToEdit);
  }

  function updatedTask(newTask, newDescription) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editingTask.id
          ? { ...task, task: newTask, description: newDescription }
          : task,
      ),
    );
    setEditingTask(null);
  }

  return {
    tasks,
    removeTask,
    addTask,
    startEdit,
    editingTask,
    updatedTask,
  };
}
