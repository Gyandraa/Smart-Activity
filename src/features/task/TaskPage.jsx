import useTask from "./hooks/useTask";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTaskFilter from "./hooks/useTaskFilter";
export default function TaskPage() {
  const taskManager = useTask();
  const filteredTasks = useTaskFilter(taskManager.tasks);

  return (
    <div>
      <h1 className="text-center font-bold font-sans mt-5">Task List</h1>

      <TaskForm
        addTask={taskManager.addTask}
        editingTask={taskManager.editingTask}
        updatedTask={taskManager.updatedTask}
      />

      <TaskList
        tasks={filteredTasks}
        removeTask={taskManager.removeTask}
        startEdit={taskManager.startEdit}
      />
    </div>
  );
}
