import { Routes, Route } from "react-router-dom";
import TaskPage from "../features/task/TaskPage";
import TaskFromPage from "../features/TaskFromPage";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/task-form" element={<TaskFromPage />} />

      <Route path="/task-form/:id" element={<TaskFromPage />} />
    </Routes>
  );
}
