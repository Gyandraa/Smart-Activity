import { useState } from "react";

export default function useTask() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "wake up 6am in every morning",
      description: "for healthy life",
      deadline: "2026-02-21",
      importance: "Medium",
    },
    {
      id: 2,
      task: "run 10km in every morning",
      description: "to improve body fitness",
      deadline: "2026-02-23",
      importance: "Low",
    },
    {
      id: 3,
      task: "read a book",
      description: "to improve knowledge",
      deadline: "2026-02-20",
      importance: "High",
    },
  ]);

  const [editingTask, setEditingTask] = useState(null);

  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function addTask(task, description, deadline, importance) {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), task, description, deadline, importance },
    ]);
  }

  function startEdit(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditingTask(taskToEdit);
  }

  function updatedTask(newTask, newDescription, newDeadline, newImportance) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              task: newTask,
              description: newDescription,
              deadline: newDeadline,
              importance: newImportance,
            }
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
