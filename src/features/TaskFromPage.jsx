import useTask from "./task/hooks/useTask";
import TaskForm from "./task/components/TaskForm";
import { useParams } from "react-router-dom";

export default function TaskFormPage() {
  const taskManager = useTask();
  const { id } = useParams();

  const editingTask = id ? taskManager.getTaskById(id) : null;
  if (id && !editingTask) {
    return <p className="text-center mt-10">Loading task...</p>;
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-5">Form Task</h1>

      <TaskForm
        addTask={taskManager.addTask}
        updatedTask={(...args) => taskManager.updatedTask(id, ...args)}
        editingTask={editingTask}
      />
    </>
  );
}
