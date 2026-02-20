import DeadlineStatus from "./deadlineStatus";
export default function CalculatePriority(userPriority, deadline) {
  const deadlineStatus = DeadlineStatus(deadline);

  const priorityLevel = {
    Low: 1,
    Medium: 2,
    High: 3,
  };

  const deadlinePriority = {
    Safe: 1,
    Warning: 2,
    Overdue: 3,
  };

  const userLevel = priorityLevel[userPriority] ?? 1;

  const deadlineLevel = deadlinePriority[deadlineStatus];

  const result = Math.max(userLevel, deadlineLevel);

  const levelToPriority = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  return levelToPriority[result];
}
