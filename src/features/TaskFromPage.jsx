import useTask from "./task/hooks/useTask";
import TaskForm from "./task/components/TaskForm";

export default function TaskFromPage() {
  const taskManager = useTask();
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-5">Form Task</h1>
      <div>
        <TaskForm
          addTask={taskManager.addTask}
          editingTask={taskManager.editingTask}
          updatedTask={taskManager.updatedTask}
        />
        ;
      </div>
    </>
  );
}
