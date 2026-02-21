import { useEffect, useState } from "react";
import CalculatePriority from "../utils/calculatePriority";
import DeadlineStatus from "../utils/deadlineStatus";
import parseLocalDate from "../utils/parseLocalDate";

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
      timeRemaining:
        Math.max(
          0,
          Math.ceil(
            (parseLocalDate(task.deadline) - new Date()) / (1000 * 3600 * 24),
          ),
        ) + " days",
    };
  });
}
