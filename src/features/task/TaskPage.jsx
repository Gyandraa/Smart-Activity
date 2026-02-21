import useTask from "./hooks/useTask";
import TaskList from "./components/TaskList";
import useTaskFilter from "./hooks/useTaskFilter";
import { Link } from "react-router-dom";

export default function TaskPage() {
  const taskManager = useTask();
  const filteredTasks = useTaskFilter(taskManager.tasks);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">
            Task Manager
          </h1>
          <Link
            to="/task-form"
            className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-xl shadow transition active:scale-95"
          >
            + Add Task
          </Link>
        </div>
      </header>

      <main className="pb-24 md:pb-10">
        <TaskList
          tasks={filteredTasks}
          removeTask={taskManager.removeTask}
          startEdit={taskManager.startEdit}
        />
      </main>

      <Link
        to="/task-form"
        className="md:hidden fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white text-2xl w-16 h-16 flex items-center justify-center rounded-full shadow-xl active:scale-95 transition"
      >
        +
      </Link>
    </div>
  );
}
