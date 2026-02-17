import CalculatePriority from "./calculatePriority";

export default function sortTasksByPriority(tasks) {
  return tasks.sort((a, b) => {
    const priorityA = CalculatePriority(a);
    const priorityB = CalculatePriority(b);

    return priorityB - priorityA;
  });
}
