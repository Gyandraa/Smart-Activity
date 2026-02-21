import useTask from "./hooks/useTask";
import TaskList from "./components/TaskList";
import useTaskFilter from "./hooks/useTaskFilter";
import { Link } from "react-router-dom";
export default function TaskPage() {
  const taskManager = useTask();
  const filteredTasks = useTaskFilter(taskManager.tasks);

  return (
    <div>
      <h1 className="text-center font-bold font-sans mt-5">Task List</h1>

      <TaskList
        tasks={filteredTasks}
        removeTask={taskManager.removeTask}
        startEdit={taskManager.startEdit}
      />
      <Link to="/task-form" className="text-right font-bold text-xl">
        Add
      </Link>
    </div>
  );
}
