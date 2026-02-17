export default function DeadlineStatus(deadline) {
  const today = new Date();

  const deadlineDate = new Date(deadline);

  const timeDif = deadlineDate - today;

  const daysDif = timeDif / (1000 * 3600 * 24);

  if (daysDif < 0) return "overdue";
  if (daysDif <= 3) return "warning";
  if (daysDif > 3) return "safe";

  return "safe";
}
