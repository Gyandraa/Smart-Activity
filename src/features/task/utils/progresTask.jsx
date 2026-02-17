export default function getNextProgress(currentStatus) {
  if (currentStatus === "pending") return "doing";
  if (currentStatus === "doing") return "completed";
  if (currentStatus === "completed") return "pending";

  return "pending";
}
