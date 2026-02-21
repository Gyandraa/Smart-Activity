import { useEffect, useState } from "react";

export default function useTask() {
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function getTaskById(id) {
    return tasks.find((task) => task.id === Number(id));
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function addTask(task, notes, deadline, importance) {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        task,
        notes,
        deadline,
        importance,
      },
    ]);
  }

  function updatedTask(id, newTask, newNotes, newDeadline, newImportance) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === Number(id)
          ? {
              ...task,
              task: newTask,
              notes: newNotes,
              deadline: newDeadline,
              importance: newImportance,
            }
          : task,
      ),
    );
  }

  return {
    tasks,
    removeTask,
    addTask,
    updatedTask,
    getTaskById,
  };
}
