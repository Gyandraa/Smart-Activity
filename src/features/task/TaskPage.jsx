import useTask from "./hooks/useTask";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
export default function TaskPage() {
  const taskManager = useTask();

  return (
    <div>
      <h1 className="text-center font-bold font-sans mt-5">Task List</h1>

      <TaskForm
        addTask={taskManager.addTask}
        editingTask={taskManager.editingTask}
        updatedTask={taskManager.updatedTask}
      />

      <TaskList
        tasks={taskManager.tasks}
        removeTask={taskManager.removeTask}
        startEdit={taskManager.startEdit}
      />
    </div>
  );
}
