export default function DeadlineStatus(deadline) {
  const today = new Date();

  const deadlineDate = new Date(deadline);

  today.setHours(0, 0, 0, 0);
  deadlineDate.setHours(0, 0, 0, 0);

  const timeDif = deadlineDate - today;

  const daysDif = timeDif / (1000 * 3600 * 24);

  if (daysDif < 0) {
    return "overdue";
  } else if (daysDif <= 3) {
    return "warning";
  } else {
    return "safe";
  }
}
