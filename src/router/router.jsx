import { Routes, Route } from "react-router-dom";
import TaskPage from "../features/task/TaskPage";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
    </Routes>
  );
}
