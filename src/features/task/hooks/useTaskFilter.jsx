import { useEffect, useState } from "react";
import CalculatePriority from "../utils/calculatePriority";
import DeadlineStatus from "../utils/deadlineStatus";

export default function useTaskFilter(tasks) {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return tasks.map((task) => {
    const userPriority = task.importance?.toLowerCase() || "Auto";

    return {
      ...task,
      urgency: DeadlineStatus(task.deadline),
      finalPriority: CalculatePriority(userPriority, task.deadline),
    };
  });
}
