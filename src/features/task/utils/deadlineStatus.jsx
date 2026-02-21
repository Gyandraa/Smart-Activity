import parseLocalDate from "./parseLocalDate";
export default function DeadlineStatus(deadline) {
  if (!deadline) return "Safe";

  const today = new Date();
  const deadlineDate = parseLocalDate(deadline);

  if (!deadlineDate) return "Safe";

  today.setHours(0, 0, 0, 0);
  deadlineDate.setHours(0, 0, 0, 0);

  const daysDif = (deadlineDate - today) / (1000 * 3600 * 24);

  if (daysDif < 0) return "Overdue";
  if (daysDif <= 3) return "Warning";
  return "Safe";
}
