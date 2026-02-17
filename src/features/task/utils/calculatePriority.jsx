import DeadlineStatus from "./deadlineStatus";
export default function CalculatePriority(userPriority, deadline) {
  const deadlineStatus = DeadlineStatus(deadline);

  const priorityLevel = {
    low: 1,
    medium: 2,
    high: 3,
  };

  const deadlinePriority = {
    safe: 1,
    warning: 2,
    overdue: 3,
  };

  const userLevel = priorityLevel[userPriority];
  const deadlineLevel = deadlinePriority[deadlineStatus];

  const result = Math.max(userLevel, deadlineLevel);

  const levelToPriority = {
    1: "low",
    2: "medium",
    3: "high",
  };

  return levelToPriority[result];
}
